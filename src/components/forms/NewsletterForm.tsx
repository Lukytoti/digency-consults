"use client";

import { useState } from "react";
import { ArrowRight, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

type Status = "idle" | "loading" | "success" | "error";

export function NewsletterForm({ className }: { className?: string }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Something went wrong");
      setStatus("success");
      setMessage("Thank you. Your message has been received. I will get back to you shortly.");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setMessage(
        err instanceof Error ? err.message : "Something went wrong. Try again."
      );
    }
  }

  return (
    <form onSubmit={onSubmit} className={cn("space-y-2", className)}>
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@business.com"
          className="flex-1 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-navy-900 px-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-electric focus:outline-none focus:ring-2 focus:ring-electric/30"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="btn-primary px-4 py-2.5 disabled:opacity-60"
        >
          {status === "loading" ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <>
              Subscribe <ArrowRight className="h-4 w-4" />
            </>
          )}
        </button>
      </div>
      {status === "success" && (
        <p className="flex items-center gap-2 text-xs text-emerald-500">
          <CheckCircle2 className="h-3.5 w-3.5" /> {message}
        </p>
      )}
      {status === "error" && (
        <p className="flex items-center gap-2 text-xs text-rose-500">
          <AlertCircle className="h-3.5 w-3.5" /> {message}
        </p>
      )}
      <p className="text-[11px] text-slate-500 dark:text-slate-400">
        No spam. Unsubscribe in one click.
      </p>
    </form>
  );
}
