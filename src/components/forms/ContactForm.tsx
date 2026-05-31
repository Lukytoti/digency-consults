"use client";

import { useState } from "react";
import { Loader2, Send, CheckCircle2, AlertCircle } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

const services = [
  "GoHighLevel CRM Setup",
  "GHL Workflow Automation",
  "n8n Automation",
  "AI Voice Agent",
  "WhatsApp AI Agent",
  "Sales Funnel Design",
  "Website Design",
  "Email Marketing Automation",
  "SMS Automation",
  "Lead Generation Systems",
  "Other",
];

const budgets = ["< $1k", "$1k – $3k", "$3k – $7k", "$7k – $15k", "$15k+"];

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const fd = new FormData(e.currentTarget);
    const payload = Object.fromEntries(fd.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, source: "contact_page" }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Failed to submit form");
      setStatus("success");
      setMessage(
        "Got it. I'll reply personally within 24 hours, usually faster."
      );
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Full Name" name="name" type="text" required />
        <Field label="Email" name="email" type="email" required />
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Company" name="company" type="text" />
        <Field label="Phone / WhatsApp" name="phone" type="tel" />
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <SelectField label="Service of interest" name="service" options={services} />
        <SelectField label="Budget range" name="budget" options={budgets} />
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Tell me about your project
        </label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="What are you trying to build, fix or scale?"
          className="mt-2 w-full rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-navy-900 px-4 py-3 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-electric focus:outline-none focus:ring-2 focus:ring-electric/30"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary w-full justify-center px-6 py-3.5 disabled:opacity-60"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Sending...
          </>
        ) : (
          <>
            Send Message <Send className="h-4 w-4" />
          </>
        )}
      </button>

      {status === "success" && (
        <p className="flex items-center gap-2 text-sm text-emerald-500">
          <CheckCircle2 className="h-4 w-4" /> {message}
        </p>
      )}
      {status === "error" && (
        <p className="flex items-center gap-2 text-sm text-rose-500">
          <AlertCircle className="h-4 w-4" /> {message}
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
        {label}
      </label>
      <input
        {...props}
        className="mt-2 w-full rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-navy-900 px-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-electric focus:outline-none focus:ring-2 focus:ring-electric/30"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
        {label}
      </label>
      <select
        name={name}
        className="mt-2 w-full rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-navy-900 px-4 py-2.5 text-sm text-slate-900 dark:text-white focus:border-electric focus:outline-none focus:ring-2 focus:ring-electric/30"
      >
        <option value="">Select...</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
