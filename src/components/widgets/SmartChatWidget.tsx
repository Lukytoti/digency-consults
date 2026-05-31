"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  CalendarCheck,
  ChevronLeft,
  MessageSquare,
  Send,
  Sparkles,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/site-config";

type Topic = {
  id: string;
  label: string;
  reply: string;
  cta: { label: string; href: string; type: "calendar" | "whatsapp" | "form" };
};

const topics: Topic[] = [
  {
    id: "ghl",
    label: "I need GoHighLevel help",
    reply:
      "Got you. I do GHL setups, workflow automation, snapshot installs and CRM cleanups every week. Easiest next step: book a 30-min strategy call so we can audit what you have and decide what to ship first.",
    cta: { label: "Book a Strategy Call", href: siteConfig.contact.calendar, type: "calendar" },
  },
  {
    id: "automation",
    label: "I need automation",
    reply:
      "Perfect. Whether it's n8n, Make, Zapier or GHL workflows, I scope, build and document automations end-to-end. Tell me a bit more on the call and I'll map the highest-leverage one.",
    cta: { label: "Book a Strategy Call", href: siteConfig.contact.calendar, type: "calendar" },
  },
  {
    id: "website",
    label: "I need a website",
    reply:
      "I build premium Next.js websites and SaaS-style brand sites. Fast, SEO-ready, dark/light mode, lead capture and CRM-connected. Want to share what you're trying to build?",
    cta: { label: "Send a brief", href: "/contact", type: "form" },
  },
  {
    id: "ai-agents",
    label: "I need AI agents",
    reply:
      "I deploy AI voice agents (VAPI, Retell), WhatsApp agents and inbound qualification bots. They book calls, capture leads and run 24/7. Quick call is the fastest way to scope it.",
    cta: { label: "Book a Strategy Call", href: siteConfig.contact.calendar, type: "calendar" },
  },
  {
    id: "whatsapp",
    label: "I need WhatsApp automation",
    reply:
      "WhatsApp is the highest-converting channel right now. I set up the Business API, AI agents, broadcast flows and CRM sync. Easiest: just WhatsApp me directly to talk specifics.",
    cta: { label: "Chat on WhatsApp", href: siteConfig.social.whatsapp, type: "whatsapp" },
  },
  {
    id: "book",
    label: "I want to book a call",
    reply:
      "Brilliant. Pick a slot that suits you — strategy calls run 30 minutes and we'll map your funnel and find the highest-leverage automation to ship first.",
    cta: { label: "Open the calendar", href: siteConfig.contact.calendar, type: "calendar" },
  },
];

type View = "menu" | "thread";

export function SmartChatWidget() {
  const [open, setOpen] = useState(false);
  const [view, setView] = useState<View>("menu");
  const [active, setActive] = useState<Topic | null>(null);
  const threadRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  function pick(topic: Topic) {
    setActive(topic);
    setView("thread");
    setTimeout(() => threadRef.current?.scrollTo({ top: 9999, behavior: "smooth" }), 50);
  }

  function reset() {
    setView("menu");
    setActive(null);
  }

  return (
    <div className="fixed bottom-5 right-5 z-40">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-20 right-0 w-[340px] sm:w-[380px] max-w-[calc(100vw-2.5rem)] rounded-2xl shadow-glow overflow-hidden bg-white dark:bg-navy-950 border border-slate-200/60 dark:border-white/10"
          >
            {/* Header */}
            <div className="bg-gradient-to-br from-navy-900 via-navy-950 to-black p-4 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-electric to-neon-purple">
                      <Bot className="h-5 w-5" />
                    </span>
                    <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-emerald-500 ring-2 ring-navy-900" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Tobi</p>
                    <p className="text-[11px] text-slate-300">
                      Usually replies in minutes
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  aria-label="Close chat"
                  onClick={() => setOpen(false)}
                  className="h-8 w-8 inline-flex items-center justify-center rounded-lg hover:bg-white/10"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Body */}
            <div
              ref={threadRef}
              className="max-h-[420px] overflow-y-auto p-4 space-y-3 bg-slate-50 dark:bg-navy-900/40"
            >
              {/* Greeting bubble */}
              <Bubble
                from="bot"
                body="Hey 👋 I'm Tobi. Tell me what you're trying to build — I'll point you the fastest way to get it done."
              />

              {view === "menu" && (
                <>
                  <p className="text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400 px-1 pt-1">
                    Quick options
                  </p>
                  <div className="grid gap-2">
                    {topics.map((t) => (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => pick(t)}
                        className="text-left text-sm rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-navy-900/60 px-3 py-2.5 hover:border-electric/40 hover:bg-electric/5 dark:hover:bg-electric/10 text-slate-800 dark:text-slate-200 transition"
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>
                </>
              )}

              {view === "thread" && active && (
                <>
                  <Bubble from="user" body={active.label} />
                  <Bubble from="bot" body={active.reply} />
                  <ChatCTA topic={active} onDone={() => setOpen(false)} />
                  <button
                    type="button"
                    onClick={reset}
                    className="inline-flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 hover:text-electric mt-2"
                  >
                    <ChevronLeft className="h-3 w-3" /> Back to options
                  </button>
                </>
              )}
            </div>

            {/* Footer */}
            <div className="border-t border-slate-200 dark:border-white/10 p-3 bg-white dark:bg-navy-950 flex items-center gap-2">
              <Link
                href="/contact"
                className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg border border-slate-200 dark:border-white/10 px-3 py-2 text-xs font-medium text-slate-700 dark:text-slate-300 hover:border-electric"
              >
                <Send className="h-3.5 w-3.5" /> Send a message
              </Link>
              <a
                href={siteConfig.contact.calendar}
                target="_blank"
                rel="noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg bg-gradient-to-r from-electric to-neon-purple text-white px-3 py-2 text-xs font-medium shadow-glow"
              >
                <CalendarCheck className="h-3.5 w-3.5" /> Book a call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trigger button */}
      <button
        type="button"
        aria-label={open ? "Close chat" : "Open chat"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="group relative h-14 w-14 inline-flex items-center justify-center rounded-full bg-gradient-to-br from-electric via-neon-purple to-neon-green text-white shadow-glow ring-4 ring-electric/20 hover:scale-105 transition"
      >
        <span className="absolute -inset-1 rounded-full bg-electric/40 blur-xl group-hover:bg-neon-purple/40 transition" />
        <span className="relative">
          {open ? (
            <X className="h-6 w-6" />
          ) : (
            <MessageSquare className="h-6 w-6" />
          )}
        </span>
        {!open && (
          <span className="absolute -top-1 -right-1 h-3.5 w-3.5 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-navy-950 animate-pulse-glow" />
        )}
      </button>
    </div>
  );
}

function Bubble({ from, body }: { from: "bot" | "user"; body: string }) {
  const isBot = from === "bot";
  return (
    <div className={`flex ${isBot ? "justify-start" : "justify-end"}`}>
      <div
        className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
          isBot
            ? "bg-white dark:bg-navy-900 border border-slate-200/70 dark:border-white/10 text-slate-800 dark:text-slate-200 rounded-tl-sm"
            : "bg-gradient-to-r from-electric to-neon-purple text-white rounded-tr-sm"
        }`}
      >
        {body}
      </div>
    </div>
  );
}

function ChatCTA({ topic, onDone }: { topic: Topic; onDone: () => void }) {
  const isExternal = topic.cta.type !== "form";
  const className =
    "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold w-full bg-gradient-to-r from-electric to-neon-purple text-white shadow-glow hover:opacity-90 transition";
  const inner = (
    <>
      {topic.cta.label} <ArrowRight className="h-4 w-4" />
    </>
  );
  if (isExternal) {
    return (
      <a
        href={topic.cta.href}
        target="_blank"
        rel="noreferrer"
        className={className}
        onClick={onDone}
      >
        {inner}
      </a>
    );
  }
  return (
    <Link href={topic.cta.href} className={className} onClick={onDone}>
      {inner}
    </Link>
  );
}
