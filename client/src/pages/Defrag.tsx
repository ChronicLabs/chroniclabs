import { Layout } from "@/components/Layout";
import { MatrixButton } from "@/components/MatrixButton";
import { GridAnimation } from "@/components/GridAnimation";
import { LiveLeaderboard } from "@/components/defrag/LiveLeaderboard";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Archive, Zap, Shield, Clock, Star } from "lucide-react";

const APP_STORE_URL = "https://apps.apple.com/us/app/defrag-daily-timeline-puzzle/id6758625499";

export default function Defrag() {
  return (
    <Layout>

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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
        </div>
      </section>

      {/* ── LEADERBOARD ──────────────────────────────────────── */}
      <section className="py-20 border-t border-[#003B00]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-block mb-4 px-2 py-1 border border-[#003B00] text-[#003B00] text-xs tracking-[0.2em] font-bold">
                LIVE_DATA
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
            <LiveLeaderboard />
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
