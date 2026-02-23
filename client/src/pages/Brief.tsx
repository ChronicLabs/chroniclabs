import { Layout } from "@/components/Layout";
import { MatrixButton } from "@/components/MatrixButton";
import { RelatedPages } from "@/components/RelatedPages";
import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";
import { ArrowRight, ListChecks, RotateCcw, CalendarClock, Bell, BarChart3, Sunrise } from "lucide-react";
import { useState } from "react";

const APP_STORE_URL = "https://apps.apple.com/app/id0000000000";

const briefFAQs = [
  {
    q: "What is Brief?",
    a: "Brief is a privacy-first daily work planner for iPhone and iPad, built by Chronic Labs. Each morning, Brief shows your task list for the day — including anything that carried forward from yesterday. Add tasks, schedule them on your calendar, and get smart reminders. No AI, no tracking, no data selling.",
  },
  {
    q: "How does the daily workflow work?",
    a: "Open Brief in the morning to see your task list. Tasks you didn't finish yesterday are automatically carried forward. Add new tasks, drag them onto your calendar to time block, and Brief handles reminders. At the end of the day, anything unfinished rolls to tomorrow with a carry-forward count so you can see what's been lingering.",
  },
  {
    q: "Does Brief use AI?",
    a: "No. Brief does not use AI in any form. All insights (completion rate, average tasks per day, top day of the week, carry-over rate) are calculated using simple rule-based database queries. Your data is never processed by language models or machine learning systems.",
  },
  {
    q: "What calendar permissions does Brief need?",
    a: "Brief requests read and write access to your device calendar to create time blocks for scheduled tasks. Calendar data is processed locally on your device. Only the calendar event ID is stored alongside your task in our database to enable editing and deletion — no event content is transmitted to our servers.",
  },
  {
    q: "What notifications does Brief send?",
    a: "Brief schedules three types of local notifications: a morning briefing (default 8 AM) showing your task count for the day, an evening summary (default 7 PM) with your completion stats, and time block reminders 15 minutes before a scheduled task. All notifications are local — they don't require a server connection.",
  },
  {
    q: "How does carry-forward work?",
    a: "At the end of each day, any incomplete tasks are automatically moved to the next day. Each carried task tracks a roll count so you can see how many days it's been waiting. This helps you identify tasks that keep slipping and need attention or should be removed.",
  },
  {
    q: "Does Brief sync across devices?",
    a: "Yes. Sign in with Apple or Google to sync your tasks across iPhone and iPad. You can also use Brief as a guest with data stored locally on your device only.",
  },
  {
    q: "Is Brief free?",
    a: "Yes. Brief is completely free to download and use. All features — task management, carry-forward, calendar sync, smart notifications, and insights — are included at no cost.",
  },
  {
    q: "What platforms does Brief support?",
    a: "Brief is available on iOS — iPhone and iPad. Android is not supported at this time.",
  },
  {
    q: "How do I delete my account and data?",
    a: "You can delete your account directly within the app via Settings. You can also request full account and data deletion by emailing hello@chroniclabs.co. All task data, account records, and associated information will be purged within 30 days.",
  },
];

const briefSchema = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Brief — Daily Work Planner",
    "operatingSystem": "iOS",
    "applicationCategory": "ProductivityApplication",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "url": "https://chroniclabs.co/brief",
    "downloadUrl": APP_STORE_URL,
    "description": "Brief is a privacy-first daily planner for iPhone and iPad. Morning task list, automatic carry-forward, calendar time blocking, and smart notifications. No AI. Built by Chronic Labs.",
    "author": { "@type": "Organization", "name": "Chronic Labs" },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": briefFAQs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": { "@type": "Answer", "text": faq.a },
    })),
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-[#003B00] hover:border-[#00FF41]/50 transition-colors">
      <button
        className="w-full text-left px-4 py-4 flex items-start gap-3 group"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="text-[#003B00] font-mono text-xs mt-0.5 flex-shrink-0 group-hover:text-[#00FF41] transition-colors">
          {open ? "[-]" : "[+]"}
        </span>
        <span className="font-mono text-sm text-[#00FF41]/80 group-hover:text-[#00FF41] transition-colors leading-relaxed">
          [Q] {q}
        </span>
      </button>
      {open && (
        <div className="px-4 pb-4 pl-11">
          <p className="font-mono text-xs text-[#00FF41]/60 leading-relaxed">
            <span className="text-[#003B00] mr-2">[A]</span>
            {a}
          </p>
        </div>
      )}
    </div>
  );
}

export default function Brief() {
  return (
    <Layout>
      <SEO
        title="Brief: Daily Work Planner — iOS App | Chronic Labs"
        description="Brief is a privacy-first daily planner for iPhone and iPad. Morning task list, automatic carry-forward, calendar time blocking, and smart notifications. No AI. Built by Chronic Labs."
        canonical="https://chroniclabs.co/brief"
        breadcrumbs={[
          { name: "Home", item: "https://chroniclabs.co/" },
          { name: "Brief" },
        ]}
        schema={briefSchema}
      />

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative pt-20 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="flex-1 text-center md:text-left z-10"
            >
              <div className="inline-block mb-4 px-2 py-1 border border-[#003B00] text-[#003B00] text-xs tracking-[0.2em] font-bold">
                FREE · DAILY PLANNER · iOS
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter leading-tight">
                BRIEF<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF41] to-[#003B00] text-3xl md:text-4xl font-light tracking-widest">
                  THE DAY STARTS HERE
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-[#00FF41]/80 mb-4 max-w-xl font-light leading-relaxed">
                Your morning task list. Automatic carry-forward. Calendar time blocking.
              </p>
              <p className="text-[#00FF41]/50 mb-8 max-w-lg text-sm leading-relaxed">
                A privacy-first daily planner for iPhone and iPad. No AI, no tracking, no data selling.
                Just a clean workflow to start your day and keep tasks moving.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-white text-black rounded-xl hover:bg-[#00FF41] transition-colors font-bold text-sm"
                >
                  <svg viewBox="0 0 814 1000" className="w-6 h-6 flex-shrink-0" fill="currentColor">
                    <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-43.4-150.3-109.2c-52.1-75.3-95.2-191.6-95.2-302.9 0-166.3 108.8-254.9 215.7-254.9 49.1 0 101.3 33.3 134.3 33.3 32.2 0 92.5-35.5 155.8-35.5 24.1 0 108.2 2.3 164.4 100.7zm-155.9-120.6c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z" />
                  </svg>
                  Coming Soon on App Store
                </a>
                <MatrixButton
                  variant="outline"
                  onClick={() => {
                    document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  SYSTEM_SPECS
                </MatrixButton>
              </div>
              <p className="mt-3 text-[#003B00] text-xs tracking-widest text-center md:text-left">
                COMING SOON — CURRENTLY ON TESTFLIGHT
              </p>

              {/* Social proof */}
              <div className="mt-8 flex items-center gap-6 justify-center md:justify-start">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#00FF41]">0 AI</div>
                  <div className="text-xs text-[#003B00]">RULE-BASED ONLY</div>
                </div>
                <div className="w-px h-8 bg-[#003B00]" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#00FF41]">100%</div>
                  <div className="text-xs text-[#003B00]">PRIVATE</div>
                </div>
                <div className="w-px h-8 bg-[#003B00]" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#00FF41]">1</div>
                  <div className="text-xs text-[#003B00]">PLACE</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex-1 flex justify-center items-center relative"
            >
              <div className="absolute inset-0 border border-[#003B00] rounded-full opacity-20 animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-8 border border-[#00FF41] rounded-full opacity-10 animate-[spin_15s_linear_infinite_reverse]" />
              {/* Task list mockup */}
              <div className="relative z-10 border border-[#003B00] bg-black/80 rounded-lg p-6 w-64">
                <div className="text-xs text-[#003B00] tracking-widest mb-4 font-bold">TODAY</div>
                <div className="relative flex flex-col gap-4">
                  {/* Vertical connector line */}
                  <div className="absolute left-[5px] top-[10px] bottom-[10px] w-px bg-[#003B00]/40" />
                  {[
                    { width: "w-full", opacity: "opacity-80" },
                    { width: "w-3/4", opacity: "opacity-50" },
                    { width: "w-[55%]", opacity: "opacity-30" },
                  ].map((row, i) => (
                    <div key={i} className="flex items-center gap-4 relative z-10">
                      <div
                        className={`w-[11px] h-[11px] rounded-full border-2 border-[#00FF41] flex-shrink-0 ${row.opacity} bg-black`}
                      />
                      <div
                        className={`h-3 rounded-full bg-[#00FF41] ${row.width} ${row.opacity}`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────────── */}
      <section className="py-20 border-t border-[#003B00] bg-black/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold tracking-widest mb-3">HOW_IT_WORKS</h2>
            <p className="text-[#00FF41]/50 text-sm">Three phases. One daily rhythm.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                step: "01",
                title: "MORNING_RITUAL",
                desc: "Open Brief each morning and see your task list for the day. Anything unfinished from yesterday is already there, carried forward automatically.",
              },
              {
                step: "02",
                title: "CAPTURE_AND_SCHEDULE",
                desc: "Add new tasks throughout the day. Drag them onto your calendar to time block. Brief creates the calendar event for you.",
              },
              {
                step: "03",
                title: "END_OF_DAY",
                desc: "At the end of the day, anything incomplete carries forward to tomorrow with a roll count. Nothing falls through the cracks.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative border border-[#003B00] p-6 hover:border-[#00FF41] transition-colors group"
              >
                <div className="text-5xl font-bold text-[#003B00] group-hover:text-[#003B00]/80 mb-4 font-mono">
                  {item.step}
                </div>
                <h3 className="text-sm font-bold tracking-widest mb-3 text-white group-hover:text-[#00FF41] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[#00FF41]/60 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* ── Step-by-Step ── */}
          <div className="border border-[#003B00] bg-black/60 p-8">
            <div className="mb-6">
              <span className="text-[10px] font-bold tracking-[0.3em] text-[#003B00] border border-[#003B00] px-2 py-0.5">
                DAILY_PROTOCOL
              </span>
            </div>
            <h3 className="text-xl font-bold tracking-widest mb-8 text-[#00FF41]">STEP_BY_STEP_PROTOCOL</h3>
            <div className="space-y-6">
              {[
                {
                  n: "01",
                  label: "OPEN_BRIEF",
                  desc: "Launch Brief on your iPhone or iPad. Your today view loads instantly — tasks from yesterday that weren't completed are already carried forward with their roll count visible. Your morning briefing notification at 8 AM reminds you to check in.",
                },
                {
                  n: "02",
                  label: "ADD_AND_SCHEDULE_TASKS",
                  desc: "Add new tasks as they come in. For tasks that need a specific time, schedule them directly onto your calendar from within Brief. Brief creates a calendar event and sets a 15-minute reminder automatically.",
                },
                {
                  n: "03",
                  label: "GET_SMART_REMINDERS",
                  desc: "Brief sends you a morning briefing with your task count, reminders 15 minutes before each time-blocked task, and an evening summary at 7 PM with your completion stats for the day. All notifications are local — no server needed.",
                },
                {
                  n: "04",
                  label: "REVIEW_AND_CARRY_FORWARD",
                  desc: "At the end of the day, check off what you completed. Anything left automatically rolls to tomorrow. The carry-forward count helps you spot tasks that keep slipping — a signal to either prioritize them or let them go.",
                },
              ].map((step, i) => (
                <motion.div
                  key={step.n}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6 items-start"
                >
                  <div className="text-3xl font-bold font-mono text-[#003B00] flex-shrink-0 w-10">
                    {step.n}
                  </div>
                  <div>
                    <div className="text-xs font-bold tracking-widest text-[#00FF41] mb-1">{step.label}</div>
                    <p className="text-[#00FF41]/60 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ────────────────────────────────────────── */}
      <section id="features" className="py-20 border-t border-[#003B00] bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold tracking-widest mb-3">SYSTEM_SPECS</h2>
            <p className="text-[#00FF41]/50 text-sm">Everything included. No paywalls.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <ListChecks className="w-5 h-5" />,
                title: "TODAY_VIEW",
                desc: "Your morning task list — clean, focused, ready. See everything you need to do today in one place.",
                tag: "FREE",
              },
              {
                icon: <RotateCcw className="w-5 h-5" />,
                title: "CARRY_FORWARD",
                desc: "Unfinished tasks automatically roll to the next day with a roll count. Nothing slips through the cracks.",
                tag: "FREE",
              },
              {
                icon: <CalendarClock className="w-5 h-5" />,
                title: "CALENDAR_SYNC",
                desc: "Schedule tasks directly on your calendar from within Brief. Time blocking with automatic event creation.",
                tag: "FREE",
              },
              {
                icon: <Bell className="w-5 h-5" />,
                title: "SMART_NOTIFICATIONS",
                desc: "Morning briefing at 8 AM, evening summary at 7 PM, and 15-minute reminders before time-blocked tasks.",
                tag: "FREE",
              },
              {
                icon: <BarChart3 className="w-5 h-5" />,
                title: "INSIGHTS",
                desc: "Completion rate, average tasks per day, top day of the week, carry-over rate. All rule-based — no AI.",
                tag: "FREE",
              },
              {
                icon: <Sunrise className="w-5 h-5" />,
                title: "DAILY_RHYTHM",
                desc: "A consistent daily workflow that builds habits. Open, plan, execute, carry forward. Repeat.",
                tag: "FREE",
              },
            ].map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="matrix-card group hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-[#00FF41] p-2 bg-[#003B00]/20 border border-[#003B00] group-hover:border-[#00FF41] transition-all rounded">
                    {f.icon}
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 border border-[#003B00] text-[#003B00]">
                    {f.tag}
                  </span>
                </div>
                <h3 className="text-sm font-bold tracking-widest mb-2 group-hover:text-[#00FF41] transition-colors">
                  {f.title}
                </h3>
                <p className="text-[#00FF41]/50 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRIVACY FIRST ────────────────────────────────────── */}
      <section className="py-20 border-t border-[#003B00]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 px-2 py-1 border border-[#003B00] text-[#003B00] text-xs tracking-[0.2em] font-bold">
                PRIVACY_FIRST
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-6">
                NO AI.<br />
                <span className="text-[#00FF41]">NO TRACKING.</span>
              </h2>
              <p className="text-[#00FF41]/60 mb-6 leading-relaxed">
                Brief doesn't use AI. Not for insights, not for suggestions, not at all.
                Every stat you see is calculated with simple database queries. Your task data
                is never fed to language models or machine learning systems.
              </p>
              <p className="text-[#00FF41]/40 text-sm mb-8">
                No data is sold to advertisers. No third-party analytics track your behavior.
                Calendar data stays on your device. Brief is built for people who want a tool,
                not a surveillance product.
              </p>
              <a
                href="/brief/privacy"
                className="inline-flex items-center gap-2 text-[#00FF41] text-sm hover:text-white transition-colors"
              >
                READ PRIVACY POLICY <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="border border-[#003B00] bg-black/60 p-6 rounded">
              <div className="flex items-center gap-3 mb-6">
                <span className="font-bold tracking-widest text-sm">PRIVACY_AUDIT</span>
              </div>
              <div className="space-y-4">
                {[
                  { label: "AI / Machine Learning", value: "NONE", color: "#00FF41" },
                  { label: "Third-Party Analytics", value: "NONE", color: "#00FF41" },
                  { label: "Ad Networks", value: "NONE", color: "#00FF41" },
                  { label: "Data Sold to Brokers", value: "NEVER", color: "#00FF41" },
                  { label: "Calendar Data Transmitted", value: "NO", color: "#00FF41" },
                  { label: "Notification Content Sent", value: "NO", color: "#00FF41" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between py-2 border-b border-[#003B00]/40 last:border-0">
                    <span className="text-sm text-[#00FF41]/60 font-mono">{item.label}</span>
                    <span className="text-sm font-bold font-mono" style={{ color: item.color }}>
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ_PROTOCOL ──────────────────────────────────────── */}
      <section className="py-20 border-t border-[#003B00] bg-black/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-block mb-4 px-2 py-1 border border-[#003B00] text-[#003B00] text-xs tracking-[0.2em] font-bold">
              KNOWLEDGE_BASE
            </div>
            <h2 className="text-3xl font-bold tracking-widest mb-3">FAQ_PROTOCOL</h2>
            <p className="text-[#00FF41]/50 text-sm font-mono">// frequently asked questions — brief v1.0</p>
          </div>
          <div className="space-y-2">
            {briefFAQs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <RelatedPages
        title="More from Chronic Labs"
        pages={[
          {
            title: "Defrag",
            description: "Daily timeline puzzle game for iOS",
            href: "/defrag",
            icon: "🧩",
          },
          {
            title: "Brief Privacy Policy",
            description: "How Brief handles your data",
            href: "/brief/privacy",
            icon: "🔒",
          },
        ]}
      />

      {/* ── CTA ────────────────────────────────────────────────── */}
      <section className="py-24 relative overflow-hidden border-t border-[#003B00]">
        <div className="absolute inset-0 bg-[#00FF41]/5 transform skew-y-3 z-0" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tighter">
            THE DAY<br />
            <span className="text-[#00FF41]">STARTS HERE</span>
          </h2>
          <p className="text-[#00FF41]/60 mb-10 text-lg max-w-xl mx-auto">
            Free to download. No AI. No tracking. Available on iPhone and iPad.
          </p>
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-xl hover:bg-[#00FF41] transition-colors font-bold text-lg"
          >
            <svg viewBox="0 0 814 1000" className="w-7 h-7 flex-shrink-0" fill="currentColor">
              <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-43.4-150.3-109.2c-52.1-75.3-95.2-191.6-95.2-302.9 0-166.3 108.8-254.9 215.7-254.9 49.1 0 101.3 33.3 134.3 33.3 32.2 0 92.5-35.5 155.8-35.5 24.1 0 108.2 2.3 164.4 100.7zm-155.9-120.6c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z" />
            </svg>
            Coming Soon on App Store
            <ArrowRight className="w-5 h-5" />
          </a>
          <p className="mt-4 text-[#003B00] text-xs">iPhone · iPad · Currently on TestFlight</p>
        </div>
      </section>
    </Layout>
  );
}
