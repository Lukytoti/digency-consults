-- =============================================================
-- Digency Consults — Supabase schema
-- =============================================================
-- Run this in the Supabase SQL editor (or via psql).
-- These tables back the contact form, newsletter form, and the
-- generic /api/lead-webhook endpoint.
-- =============================================================

create extension if not exists pgcrypto;

-- ----------- Leads ------------------------------------------------
create table if not exists public.leads (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  name        text,
  email       text,
  phone       text,
  company     text,
  service     text,
  budget      text,
  message     text,
  source      text,                 -- e.g. contact_form, lead-webhook, hero
  status      text not null default 'new',  -- new, contacted, qualified, won, lost
  ip          text,
  user_agent  text,
  raw         jsonb                 -- full payload for webhook captures
);

create index if not exists leads_email_idx       on public.leads (email);
create index if not exists leads_created_at_idx  on public.leads (created_at desc);
create index if not exists leads_status_idx      on public.leads (status);

-- ----------- Newsletter subscribers --------------------------------
create table if not exists public.newsletter_subscribers (
  id              uuid primary key default gen_random_uuid(),
  email           text not null unique,
  source          text,
  subscribed_at   timestamptz not null default now(),
  unsubscribed_at timestamptz
);

create index if not exists newsletter_email_idx
  on public.newsletter_subscribers (email);

-- ----------- Row level security -----------------------------------
-- The website API routes use the SERVICE ROLE key, so RLS does not
-- block them. We still enable RLS so anon traffic cannot read leads.

alter table public.leads enable row level security;
alter table public.newsletter_subscribers enable row level security;

-- (No anon policies are created; only the service role can read/write.)
