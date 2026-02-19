import { Layout } from "@/components/Layout";
import { MatrixButton } from "@/components/MatrixButton";
import { GridAnimation } from "@/components/GridAnimation";
import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Archive, Zap, Shield, Clock, Star, Trophy } from "lucide-react";
import { useState } from "react";

const APP_STORE_URL = "https://apps.apple.com/us/app/defrag-daily-timeline-puzzle/id6758625499";

const defragFAQs = [
  {
    q: "What is Defrag?",
    a: "Defrag is a free daily chronological puzzle game for iPhone and iPad, made by Chronic Labs. Each day, 16 tiles representing historical events, pop culture moments, and tech milestones are scrambled. Your goal: sort them into the correct chronological order. A new puzzle drops every 24 hours.",
  },
  {
    q: "How do you play Defrag?",
    a: "Open the app to see 16 scrambled tiles. Drag and drop each tile into chronological order from earliest to latest. Once you're satisfied with the arrangement, submit your solution. Your score is based on move count — fewer moves equals a higher rank. Results are shared on the global leaderboard.",
  },
  {
    q: "Is Defrag free to play?",
    a: "Yes. Defrag is completely free to download and play on the App Store. The daily puzzle, all 3 difficulty modes, global leaderboard, and streak tracking are all free. Defrag Pro is an optional upgrade for extra features.",
  },
  {
    q: "What is Defrag Pro?",
    a: "Defrag Pro is an optional subscription that unlocks premium features: access to the full puzzle archive (hundreds of past puzzles), free hints, detailed stats, a Pro badge on the leaderboard, and an ad-free experience. The core daily puzzle remains free forever.",
  },
  {
    q: "How does the leaderboard work?",
    a: "Every completed puzzle is scored by move count. Fewer moves = higher rank. All players worldwide receive the same daily puzzle, so rankings are directly comparable. Sign in with Apple to appear on the global leaderboard. Guest plays are tracked locally on your device.",
  },
  {
    q: "What are the difficulty modes in Defrag?",
    a: "Defrag has 3 difficulty modes: Easy (year labels are visible on each tile — focus is on move efficiency), Hard (year labels are hidden — you rely on knowledge of the events), and Super Hard (no hints at all — no years, no indicators, pure chronological mastery).",
  },
  {
    q: "Does Defrag require an account?",
    a: "No account is required to play. You can complete the daily puzzle as a guest, with scores tracked locally. To appear on the global leaderboard and save your streak across devices, sign in with Apple — a secure, private authentication method.",
  },
  {
    q: "How do streak freezes work?",
    a: "A streak freeze protects your daily streak on a day you miss the puzzle. When you use a streak freeze, your streak is preserved as if you played that day. Streak freezes can be earned or purchased in-app.",
  },
  {
    q: "Is Defrag available on Android?",
    a: "Currently, Defrag is only available on iOS — iPhone, iPad, and Mac (Apple Silicon). Android is not supported at this time.",
  },
  {
    q: "What is the puzzle archive?",
    a: "The puzzle archive is a library of all past Defrag daily puzzles. Defrag Pro subscribers can play any archived puzzle at any time, giving access to hundreds of additional challenges beyond the daily rotation.",
  },
];

const defragSchema = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Defrag — Daily Timeline Puzzle",
    "operatingSystem": "iOS",
    "applicationCategory": "GameApplication",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "url": "https://chroniclabs.co/defrag",
    "downloadUrl": "https://apps.apple.com/us/app/defrag-daily-timeline-puzzle/id6758625499",
    "description": "Sort 16 historical events in chronological order. New puzzle every day. 3 difficulty modes, global leaderboard, streak tracking.",
    "screenshot": "https://chroniclabs.co/defrag-screenshot.png",
    "author": { "@type": "Organization", "name": "Chronic Labs" },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": defragFAQs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": { "@type": "Answer", "text": faq.a },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://chroniclabs.co" },
      { "@type": "ListItem", "position": 2, "name": "Defrag", "item": "https://chroniclabs.co/defrag" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Play Defrag",
    "description": "Defrag is a daily chronological sorting puzzle. Sort 16 historical events into the correct order in as few moves as possible.",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Open the daily puzzle",
        "text": "Each day at midnight, 16 new scrambled tiles appear representing historical events, pop culture moments, or tech milestones. Every player worldwide gets the same puzzle.",
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Choose your difficulty mode",
        "text": "Select Easy mode (years visible on tiles), Hard mode (years hidden), or Super Hard mode (no hints at all). Each mode uses the same puzzle with different information shown.",
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Sort tiles into chronological order",
        "text": "Drag and tap tiles to arrange all 16 events from earliest to latest. Your score is tracked by move count — fewer moves means a higher rank.",
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Submit and check your global rank",
        "text": "Submit your solution to see your move count, completion time, and global leaderboard rank. Share your result and return tomorrow for a new puzzle.",
      },
    ],
    "tool": [{ "@type": "HowToTool", "name": "Defrag iOS app (free)" }],
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

export default function Defrag() {
  return (
    <Layout>
      <SEO
        title="Defrag: Daily Timeline Puzzle Game — Free iOS App"
        description="Sort 16 historical events in chronological order. New puzzle every day. 3 difficulty modes, global leaderboard, streak tracking. Free on iPhone & iPad."
        canonical="https://chroniclabs.co/defrag"
        schema={defragSchema}
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
                FREE · DAILY PUZZLE · iOS
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter leading-tight">
                DEFRAG<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF41] to-[#003B00] text-3xl md:text-4xl font-light tracking-widest">
                  DAILY TIMELINE PUZZLE
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-[#00FF41]/80 mb-4 max-w-xl font-light leading-relaxed">
                16 data nodes. One correct sequence. New puzzle every 24 hours.
              </p>
              <p className="text-[#00FF41]/50 mb-8 max-w-lg text-sm leading-relaxed">
                Sort historical events, pop culture moments, and tech milestones into chronological order. 
                Compete on the global leaderboard. Build your streak. Defrag the system.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-white text-black rounded-xl hover:bg-[#00FF41] transition-colors font-bold text-sm"
                >
                  <svg viewBox="0 0 814 1000" className="w-6 h-6 flex-shrink-0" fill="currentColor">
                    <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-43.4-150.3-109.2c-52.1-75.3-95.2-191.6-95.2-302.9 0-166.3 108.8-254.9 215.7-254.9 49.1 0 101.3 33.3 134.3 33.3 32.2 0 92.5-35.5 155.8-35.5 24.1 0 108.2 2.3 164.4 100.7zm-155.9-120.6c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z"/>
                  </svg>
                  Download on the App Store
                </a>
                <MatrixButton variant="outline" onClick={() => {
                  document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
                }}>
                  SYSTEM_SPECS
                </MatrixButton>
              </div>

              {/* Social proof */}
              <div className="mt-8 flex items-center gap-6 justify-center md:justify-start">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#00FF41]">FREE</div>
                  <div className="text-xs text-[#003B00]">TO PLAY</div>
                </div>
                <div className="w-px h-8 bg-[#003B00]" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#00FF41]">3</div>
                  <div className="text-xs text-[#003B00]">DIFFICULTY MODES</div>
                </div>
                <div className="w-px h-8 bg-[#003B00]" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#00FF41]">365</div>
                  <div className="text-xs text-[#003B00]">PUZZLES / YEAR</div>
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
              <GridAnimation />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────────── */}
      <section className="py-20 border-t border-[#003B00] bg-black/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold tracking-widest mb-3">HOW_IT_WORKS</h2>
            <p className="text-[#00FF41]/50 text-sm">Three steps. One minute. Daily.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                step: "01",
                title: "RECEIVE_FRAGMENTS",
                desc: "16 scrambled data nodes land in your grid each day at midnight. Every player worldwide gets the same puzzle.",
              },
              {
                step: "02",
                title: "SORT_BY_YEAR",
                desc: "Slide tiles into chronological order. Easy mode shows years. Hard mode hides them. Super Hard removes all hints.",
              },
              {
                step: "03",
                title: "DEFRAG_COMPLETE",
                desc: "Submit your solution, see your move count, and check your global rank. Share your result. Beat tomorrow's puzzle.",
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

          {/* ── HOW TO PLAY — Step-by-Step ── */}
          <div className="border border-[#003B00] bg-black/60 p-8">
            <div className="mb-6">
              <span className="text-[10px] font-bold tracking-[0.3em] text-[#003B00] border border-[#003B00] px-2 py-0.5">HOW_TO_PLAY</span>
            </div>
            <h3 className="text-xl font-bold tracking-widest mb-8 text-[#00FF41]">STEP_BY_STEP_PROTOCOL</h3>
            <div className="space-y-6">
              {[
                {
                  n: "01",
                  label: "OPEN_THE_APP",
                  desc: "Launch Defrag on your iPhone or iPad. You'll see 16 scrambled tiles, each representing a historical event — moments from history, pop culture, and technology. Every player worldwide receives the exact same set of tiles.",
                },
                {
                  n: "02",
                  label: "SORT_CHRONOLOGICALLY",
                  desc: "Drag and drop tiles into chronological order, earliest event at the top, latest at the bottom. In Easy mode, year labels are visible on each tile to help guide your strategy. In Hard mode, years are hidden. In Super Hard, all hints are removed.",
                },
                {
                  n: "03",
                  label: "SUBMIT_YOUR_SOLUTION",
                  desc: "When you're confident in your arrangement, submit. Your score is determined by move count — the fewer moves you make, the better your rank. Precision beats speed.",
                },
                {
                  n: "04",
                  label: "CHECK_GLOBAL_RANK",
                  desc: "See how your move count stacks up against players worldwide. Share your result, track your daily streak, and come back tomorrow for a new puzzle. Sign in with Apple to appear on the permanent global leaderboard.",
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
                  <div className="text-3xl font-bold font-mono text-[#003B00] flex-shrink-0 w-10">{step.n}</div>
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

      {/* ── LEADERBOARD ──────────────────────────────────────── */}
      <section className="py-20 border-t border-[#003B00]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 px-2 py-1 border border-[#003B00] text-[#003B00] text-xs tracking-[0.2em] font-bold">
                GLOBAL_COMPETITION
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-6">
                GLOBAL<br/>
                <span className="text-[#00FF41]">LEADERBOARD</span>
              </h2>
              <p className="text-[#00FF41]/60 mb-6 leading-relaxed">
                Every completed puzzle is scored by move count. Fewer moves = higher rank.
                The best players compete for the top spot daily — same puzzle, same grid, global competition.
              </p>
              <p className="text-[#00FF41]/40 text-sm mb-8">
                Sign in with Apple to save your scores and appear on the leaderboard.
                Guest plays are tracked locally.
              </p>
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#00FF41] text-sm hover:text-white transition-colors"
              >
                COMPETE TODAY <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Static leaderboard visual */}
            <div className="border border-[#003B00] bg-black/60 p-6 rounded">
              <div className="flex items-center gap-3 mb-6">
                <Trophy className="w-5 h-5 text-[#00FF41]" />
                <span className="font-bold tracking-widest text-sm">GLOBAL_RANKINGS</span>
              </div>
              <div className="space-y-3 mb-6">
                {[
                  { rank: 1, name: "PLAYER_7731", moves: 16, color: "#FFD700" },
                  { rank: 2, name: "GRIDMASTER", moves: 18, color: "#C0C0C0" },
                  { rank: 3, name: "DATANAUT_X", moves: 21, color: "#CD7F32" },
                  { rank: 4, name: "CHRONOS_9", moves: 23, color: "#003B00" },
                  { rank: 5, name: "NULLBYTE", moves: 25, color: "#003B00" },
                ].map((entry) => (
                  <div key={entry.rank} className="flex items-center justify-between py-2 border-b border-[#003B00]/40 last:border-0">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold w-5 text-right" style={{ color: entry.color }}>
                        {entry.rank}
                      </span>
                      <span className="text-sm text-[#00FF41]/80 font-mono">{entry.name}</span>
                    </div>
                    <span className="text-sm font-bold font-mono text-[#00FF41]">
                      {entry.moves} <span className="text-xs text-[#003B00] font-normal">moves</span>
                    </span>
                  </div>
                ))}
              </div>
              <div className="text-center border border-dashed border-[#003B00] py-3 px-4">
                <p className="text-[#003B00] text-xs tracking-widest">YOUR_RANK_LIVES_IN_THE_APP</p>
                <a
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1 text-[#00FF41] text-xs hover:text-white transition-colors"
                >
                  DOWNLOAD TO COMPETE <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ────────────────────────────────────────── */}
      <section id="features" className="py-20 border-t border-[#003B00] bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold tracking-widest mb-3">SYSTEM_SPECS</h2>
            <p className="text-[#00FF41]/50 text-sm">Everything in the free version. More in Pro.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Calendar className="w-5 h-5" />,
                title: "DAILY_CHALLENGE",
                desc: "One new themed puzzle every day. Calendar events for holidays and cultural moments.",
                tag: "FREE",
              },
              {
                icon: <Zap className="w-5 h-5" />,
                title: "THREE_DIFFICULTY_MODES",
                desc: "Easy (years visible), Hard (years hidden), Super Hard (no indicators at all).",
                tag: "FREE",
              },
              {
                icon: <Star className="w-5 h-5" />,
                title: "STREAK_TRACKING",
                desc: "Build a daily streak. Use Streak Freeze tokens to protect it on days you can't play.",
                tag: "FREE",
              },
              {
                icon: <Shield className="w-5 h-5" />,
                title: "GLOBAL_LEADERBOARD",
                desc: "Compete against players worldwide on each daily puzzle. Daily + all-time rankings.",
                tag: "FREE",
              },
              {
                icon: <Archive className="w-5 h-5" />,
                title: "PUZZLE_ARCHIVE",
                desc: "Unlock hundreds of past puzzles and play them at any time.",
                tag: "PRO",
              },
              {
                icon: <Clock className="w-5 h-5" />,
                title: "CUSTOM_THEMES",
                desc: "Unlock exclusive visual themes to personalize your grid.",
                tag: "PRO",
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
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 border ${
                      f.tag === "PRO"
                        ? "border-[#FFB800] text-[#FFB800]"
                        : "border-[#003B00] text-[#003B00]"
                    }`}
                  >
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

      {/* ── GAME MODES ────────────────────────────────────────── */}
      <section className="py-20 border-t border-[#003B00]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold tracking-widest mb-3">DIFFICULTY_MODES</h2>
            <p className="text-[#00FF41]/50 text-sm">Same puzzle. Different challenge levels.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                mode: "EASY",
                color: "#00FF41",
                label: "Year labels visible on each tile",
                detail: "Perfect for new players or quick daily runs. Years displayed — strategy is in move efficiency.",
              },
              {
                mode: "HARD",
                color: "#FFB800",
                label: "Years hidden",
                detail: "No year hints. Pure chronological knowledge. You know the events — but do you know the order?",
              },
              {
                mode: "SUPER_HARD",
                color: "#FF4141",
                label: "No hints at all",
                detail: "No years, no indicators, no safety net. For players who have mastered the grid and want a real challenge.",
              },
            ].map((m, i) => (
              <motion.div
                key={m.mode}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border p-6 transition-all"
                style={{ borderColor: `${m.color}30` }}
              >
                <div
                  className="text-xs font-bold tracking-widest mb-3 px-2 py-1 inline-block border"
                  style={{ color: m.color, borderColor: m.color }}
                >
                  {m.mode}
                </div>
                <p className="font-bold text-white text-sm mb-3">{m.label}</p>
                <p className="text-[#00FF41]/50 text-sm leading-relaxed">{m.detail}</p>
              </motion.div>
            ))}
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
            <p className="text-[#00FF41]/50 text-sm font-mono">// frequently asked questions — defrag v1.0</p>
          </div>
          <div className="space-y-2">
            {defragFAQs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────── */}
      <section className="py-24 relative overflow-hidden border-t border-[#003B00]">
        <div className="absolute inset-0 bg-[#00FF41]/5 transform skew-y-3 z-0" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tighter">
            TODAY'S PUZZLE<br/>
            <span className="text-[#00FF41]">IS WAITING</span>
          </h2>
          <p className="text-[#00FF41]/60 mb-10 text-lg max-w-xl mx-auto">
            Free to download. One puzzle a day. Available on iPhone and iPad.
          </p>
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-xl hover:bg-[#00FF41] transition-colors font-bold text-lg"
          >
            <svg viewBox="0 0 814 1000" className="w-7 h-7 flex-shrink-0" fill="currentColor">
              <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-43.4-150.3-109.2c-52.1-75.3-95.2-191.6-95.2-302.9 0-166.3 108.8-254.9 215.7-254.9 49.1 0 101.3 33.3 134.3 33.3 32.2 0 92.5-35.5 155.8-35.5 24.1 0 108.2 2.3 164.4 100.7zm-155.9-120.6c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z"/>
            </svg>
            Download Free on App Store
            <ArrowRight className="w-5 h-5" />
          </a>
          <p className="mt-4 text-[#003B00] text-xs">iPhone · iPad · Mac (Apple Silicon)</p>
        </div>
      </section>

    </Layout>
  );
}
