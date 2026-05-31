# Digency Consults — Premium SaaS Website

Premium personal SaaS-style website for **Digency Consults**, the studio of
**Oluwatobi Olowookere** — AI &amp; CRM Infrastructure Engineer.

Built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**,
**Framer Motion**, **Supabase**, **Resend** and webhook integrations for
**n8n / GoHighLevel**.

---

## Stack

| Layer        | Tech                                                  |
|--------------|--------------------------------------------------------|
| Framework    | Next.js 14 (App Router)                                |
| Language     | TypeScript                                             |
| Styling      | Tailwind CSS, custom design system, dark/light mode    |
| Animation    | Framer Motion                                          |
| Forms        | Native + Zod validation                                |
| Email        | Resend                                                 |
| Database     | Supabase (Postgres)                                    |
| CRM Webhook  | n8n / GoHighLevel / Make / Zapier                      |
| SMS          | Twilio or GoHighLevel (placeholder)                    |
| Analytics    | Vercel Analytics + Speed Insights, GA4, FB Pixel       |
| Deployment   | Vercel (recommended)                                   |

---

## Pages

- `/` — Home (hero, problems, services, projects, how-I-help, results, case studies, social proof, testimonials, FAQ, CTA)
- `/about` — Founder story, positioning, certifications
- `/services` — All 12 services in detail
- `/portfolio` — All projects with problem / solution / tools / result
- `/case-studies` — Long-form case studies with metrics
- `/testimonials` — All testimonials and social proof
- `/pricing` — Sprint, System, Engine packages
- `/blog` + `/blog/[slug]` — Articles
- `/contact` — Contact form + booking links

---

## API Routes

| Route                     | Purpose                                                            |
|---------------------------|--------------------------------------------------------------------|
| `POST /api/contact`       | Saves lead → Supabase, emails via Resend, fires CRM webhook.       |
| `POST /api/newsletter`    | Subscribes email → Supabase + CRM webhook.                         |
| `POST /api/lead-webhook`  | Generic ingestion endpoint for ads / quizzes / 3rd-party tools.    |

All routes work _without_ Supabase / Resend / webhooks set up — they fail
silently in dev so you can demo the UI immediately.

---

## Local setup

```bash
# 1. Install
npm install

# 2. Copy envs
cp .env.example .env.local

# 3. Run
npm run dev
```

Open http://localhost:3000.

---

## Environment variables

See [`.env.example`](./.env.example) for the full list. Key ones:

```bash
NEXT_PUBLIC_SITE_URL=https://digencyconsults.com
NEXT_PUBLIC_WHATSAPP_NUMBER=2348000000000
NEXT_PUBLIC_CALENDAR_URL=https://calendly.com/digency-consults/strategy-call
NEXT_PUBLIC_LINKEDIN_URL=https://www.linkedin.com/in/oluwatobi-olowookere-720b3610a/

NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
SUPABASE_SERVICE_ROLE_KEY=...

RESEND_API_KEY=...
RESEND_FROM_EMAIL="Digency Consults <hello@digencyconsults.com>"
CONTACT_TO_EMAIL=hello@digencyconsults.com

LEAD_WEBHOOK_URL=https://your-n8n-or-ghl-webhook
LEAD_WEBHOOK_SECRET=optional-shared-secret

# Analytics placeholders
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_FB_PIXEL_ID=000000000000000
NEXT_PUBLIC_VISITOR_TRACKING_ID=
```

---

## Supabase setup

1. Create a Supabase project.
2. Open the SQL editor and run [`supabase/schema.sql`](./supabase/schema.sql).
3. Copy your project URL, anon key and service role key into `.env.local`.

The schema creates two tables:

- `leads` — every contact-form submission and webhook capture.
- `newsletter_subscribers` — newsletter opt-ins.

Both tables have RLS enabled — only the service role (used by the API routes)
can read or write.

---

## CRM webhook (n8n / GoHighLevel)

Set `LEAD_WEBHOOK_URL` to your inbound webhook (n8n, GHL, Make, Zapier).
Every contact submission, newsletter subscribe and direct webhook call is
forwarded as JSON. Optionally protect with `LEAD_WEBHOOK_SECRET` (sent as
`x-webhook-secret` header).

---

## Folder structure

```
src/
  app/                # App Router pages + API routes
    api/              # contact, newsletter, lead-webhook
    about/
    blog/
    case-studies/
    contact/
    portfolio/
    pricing/
    services/
    testimonials/
  components/
    cards/            # ServiceCard, ProjectCard, CaseStudyCard, ...
    forms/            # ContactForm, NewsletterForm
    layout/           # Navbar, Footer
    providers/        # ThemeProvider
    sections/         # Hero, Problems, Services, ... etc.
    ui/               # ThemeToggle
    widgets/          # Analytics, WhatsAppButton
  data/               # services, projects, testimonials, pricing, blog, ...
  lib/                # site-config, utils, supabase, resend, webhook, validators
supabase/
  schema.sql          # Postgres schema for leads + newsletter
public/
  favicon.svg
```

---

## Design system

- Color palette: dark navy, white, electric blue, neon purple, neon green.
- Glassmorphism cards (`.glass-card`) and gradient borders.
- Custom Tailwind tokens in `tailwind.config.ts`.
- Inter (body) + Space Grotesk (display) via `next/font`.
- Dark mode default, system-aware via `next-themes`.

---

## Deploy to Vercel

1. Push the repo to GitHub.
2. Import into Vercel.
3. Add the env vars from `.env.example` in the Vercel project settings.
4. Deploy. Done.

Vercel Analytics and Speed Insights are wired in automatically through
`@vercel/analytics` and `@vercel/speed-insights`.

---

## Credits

- Built by [Oluwatobi Olowookere](https://www.linkedin.com/in/oluwatobi-olowookere-720b3610a/).
- Icons by [Lucide](https://lucide.dev).
- Imagery from [Unsplash](https://unsplash.com).
