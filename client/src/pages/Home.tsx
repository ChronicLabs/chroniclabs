import { Layout } from "@/components/Layout";
import { MatrixButton } from "@/components/MatrixButton";
import { motion } from "framer-motion";
import { ArrowRight, Gamepad2, ScanLine, Store, Sparkles } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-block mb-6 px-3 py-1 border border-[#003B00] text-[#003B00] text-xs tracking-[0.2em] font-bold">
              DIGITAL_EXPERIENCES_LAB
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter leading-tight">
              CHRONIC <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF41] to-[#003B00]">LABS</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#00FF41]/80 mb-10 font-light leading-relaxed">
              Building unique digital experiences. One app at a time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 border-t border-[#003B00] bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">OUR_PROJECTS</h2>
            <p className="text-[#00FF41]/60">Apps and experiences from the lab</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 items-stretch">
            {/* Defrag Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/defrag">
                <div className="matrix-card group hover:-translate-y-2 transition-all duration-300 cursor-pointer h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-[#003B00]/20 rounded border border-[#003B00] group-hover:border-[#00FF41] group-hover:shadow-[0_0_10px_rgba(0,255,65,0.3)] transition-all">
                      <Gamepad2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-[#00FF41] transition-colors">DEFRAG</h3>
                      <span className="text-xs text-[#003B00]">PUZZLE_GAME</span>
                    </div>
                  </div>
                  
                  {/* Mini Grid Preview */}
                  <div className="border border-[#003B00] w-full aspect-square mb-4 grid grid-cols-4 gap-1 p-2 bg-black group-hover:border-[#00FF41] transition-colors">
                    {Array.from({ length: 16 }).map((_, i) => (
                      <div 
                        key={i} 
                        className={`bg-[#00FF41] rounded-sm transition-opacity ${[0, 2, 5, 7, 8, 10, 13, 15].includes(i) ? 'opacity-80' : 'opacity-10'}`}
                      />
                    ))}
                  </div>
                  
                  <p className="text-[#00FF41]/60 text-sm mb-4">
                    16 data nodes. One correct sequence. Restore order before the cycle ends.
                  </p>
                  
                  <div className="flex items-center text-[#00FF41] text-sm group-hover:text-white transition-colors">
                    VIEW_PROJECT <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Grade Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Link href="/grade">
                <div className="matrix-card group hover:-translate-y-2 transition-all duration-300 cursor-pointer h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-[#003B00]/20 rounded border border-[#003B00] group-hover:border-[#00FF41] group-hover:shadow-[0_0_10px_rgba(0,255,65,0.3)] transition-all">
                      <ScanLine className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-[#00FF41] transition-colors">GRADE</h3>
                      <span className="text-xs text-[#003B00]">CHROME_EXTENSION</span>
                    </div>
                  </div>
                  
                  {/* Card shape with GEM MT 10 */}
                  <div className="border border-[#003B00] w-full aspect-square mb-4 flex flex-col items-center justify-center bg-black group-hover:border-[#00FF41] transition-colors relative overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00FF41]/10 to-transparent"
                      animate={{ y: [-50, 200] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />
                    <div className="text-4xl font-bold text-[#00FF41] z-10">10</div>
                    <div className="text-lg font-bold text-white z-10">GEM MT</div>
                  </div>
                  
                  <p className="text-[#00FF41]/60 text-sm mb-4">
                    AI-powered sports card grading. Upload a photo, get an instant PSA-aligned grade.
                  </p>
                  
                  <div className="flex items-center text-[#00FF41] text-sm group-hover:text-white transition-colors">
                    VIEW_PROJECT <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Chronic Sports Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <a href="https://chronicsportscards.com" target="_blank" rel="noopener noreferrer">
                <div className="matrix-card group hover:-translate-y-2 transition-all duration-300 cursor-pointer h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-[#003B00]/20 rounded border border-[#003B00] group-hover:border-[#00FF41] group-hover:shadow-[0_0_10px_rgba(0,255,65,0.3)] transition-all">
                      <Store className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-[#00FF41] transition-colors">CHRONIC_SPORTS_CARDS</h3>
                      <span className="text-xs text-[#003B00]">E-COMMERCE</span>
                    </div>
                  </div>

                  {/* Card Marketplace Visual — fanned cards */}
                  <div className="border border-[#003B00] w-full aspect-square mb-4 flex items-center justify-center bg-black group-hover:border-[#00FF41] transition-colors relative overflow-hidden">
                    <div className="flex flex-col items-center gap-4 w-full px-4">
                      {/* Fanned card stack */}
                      <div className="relative w-[100px] h-[130px]">
                        {/* Back card — rotated left */}
                        <div className="absolute top-0 left-0 w-[72px] h-[100px] border border-[#003B00] group-hover:border-[#00FF41]/40 bg-[#001500] rounded-sm transition-all"
                          style={{ transform: "rotate(-8deg) translate(-4px, 4px)" }}>
                          <div className="flex flex-col items-center justify-center h-full gap-1">
                            <div className="text-[8px] text-[#003B00] group-hover:text-[#00FF41]/30 font-bold tracking-widest transition-colors">NFL</div>
                            <div className="w-8 h-px bg-[#003B00]/60" />
                            <div className="text-[7px] text-[#003B00]/60 group-hover:text-[#00FF41]/20 transition-colors">RC</div>
                          </div>
                        </div>
                        {/* Middle card — slight right tilt */}
                        <div className="absolute top-0 left-[16px] w-[72px] h-[100px] border border-[#003B00] group-hover:border-[#00FF41]/60 bg-[#001a00] rounded-sm transition-all"
                          style={{ transform: "rotate(4deg) translate(4px, 2px)" }}>
                          <div className="flex flex-col items-center justify-center h-full gap-1">
                            <div className="text-[8px] text-[#003B00] group-hover:text-[#00FF41]/50 font-bold tracking-widest transition-colors">NBA</div>
                            <div className="w-8 h-px bg-[#003B00]/60" />
                            <div className="text-[7px] text-[#003B00]/60 group-hover:text-[#00FF41]/30 transition-colors">HOF</div>
                          </div>
                        </div>
                        {/* Front card — straight */}
                        <div className="absolute top-[14px] left-[8px] w-[72px] h-[100px] border border-[#00FF41]/40 group-hover:border-[#00FF41] bg-black rounded-sm transition-all shadow-[0_0_8px_rgba(0,255,65,0.1)] group-hover:shadow-[0_0_12px_rgba(0,255,65,0.25)]">
                          <div className="flex flex-col items-center justify-center h-full gap-1">
                            <div className="text-[8px] text-[#00FF41]/60 group-hover:text-[#00FF41] font-bold tracking-widest transition-colors">MLB</div>
                            <div className="w-8 h-px bg-[#00FF41]/30 group-hover:bg-[#00FF41]/60 transition-colors" />
                            <div className="text-[7px] text-[#00FF41]/40 group-hover:text-[#00FF41]/70 tracking-wider transition-colors">ROOKIE</div>
                          </div>
                        </div>
                      </div>
                      <div className="text-[9px] text-[#003B00] group-hover:text-[#00FF41]/50 transition-colors tracking-widest font-bold">BUY · SELL · TRADE</div>
                    </div>
                  </div>

                  <p className="text-[#00FF41]/60 text-sm mb-4">
                    Premium sports cards marketplace. Authenticated inventory, competitive pricing.
                  </p>

                  <div className="flex items-center text-[#00FF41] text-sm group-hover:text-white transition-colors">
                    VISIT_STORE <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </div>
              </a>
            </motion.div>

            {/* Coming Soon Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="matrix-card h-full opacity-50 cursor-not-allowed">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-[#003B00]/20 rounded border border-[#003B00]">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">COMING_SOON</h3>
                    <span className="text-xs text-[#003B00]">IN_DEVELOPMENT</span>
                  </div>
                </div>
                
                <div className="border border-[#003B00] border-dashed w-full aspect-square mb-4 flex items-center justify-center bg-black/50">
                  <span className="text-[#003B00] text-sm">[ CLASSIFIED ]</span>
                </div>
                
                <p className="text-[#00FF41]/40 text-sm">
                  New project in development. Stay tuned for updates.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#00FF41]/5 transform -skew-y-3 z-0" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">ABOUT_THE_LAB</h2>
          <p className="text-[#00FF41]/70 mb-6 text-lg leading-relaxed">
            Chronic Labs creates unique mobile experiences with a focus on clean design and engaging gameplay. 
            Based on the principle that great apps should be both beautiful and functional.
          </p>
          <p className="text-[#00FF41]/50 text-sm">
            Contact: <a href="mailto:hello@chroniclabs.co" className="text-[#00FF41] hover:text-white underline">hello@chroniclabs.co</a>
          </p>
        </div>
      </section>
    </Layout>
  );
}
