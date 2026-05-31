import { createClient, SupabaseClient } from "@supabase/supabase-js";

/**
 * Server-side Supabase client (uses the service role key).
 * Returns null if env vars aren't configured — so dev still works
 * without Supabase set up.
 */
let _server: SupabaseClient | null = null;

export function getSupabaseAdmin(): SupabaseClient | null {
  if (_server) return _server;
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  _server = createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
  return _server;
}
