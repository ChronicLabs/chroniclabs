import { Layout } from "@/components/Layout";
import { MatrixButton } from "@/components/MatrixButton";
import { motion } from "framer-motion";
import { ArrowRight, Target, Eye, Zap } from "lucide-react";

export default function Grade() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            
            {/* Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="flex-1 text-center md:text-left z-10"
            >
              <div className="inline-block mb-4 px-2 py-1 border border-[#003B00] text-[#003B00] text-xs tracking-[0.2em] font-bold">
                CHROME_EXTENSION
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter leading-tight">
                AI-POWERED <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF41] to-[#003B00]">CARD_GRADING</span>
              </h1>
              <p className="text-xl md:text-2xl text-[#00FF41]/80 mb-8 max-w-xl font-light leading-relaxed">
                Chrome extension that grades sports cards using AI. Upload a photo, get instant PSA-aligned grade.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <MatrixButton onClick={() => window.open("#", "_blank")}>
                  INSTALL_FROM_CHROME_WEB_STORE
                </MatrixButton>
              </div>

              <div className="mt-6 text-sm text-[#003B00]">
                BY_CHRONIC_SPORTS_CARDS
              </div>
            </motion.div>

            {/* Visual Content */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex-1 flex justify-center items-center relative"
            >
              {/* Card-shaped div with grade overlay */}
              <div className="relative w-64 h-96 border-2 border-[#00FF41] rounded-lg bg-black/50 overflow-hidden">
                {/* Scanning animation */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00FF41]/20 to-transparent"
                  animate={{ y: [-100, 500] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Grade overlay */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 backdrop-blur-sm"
                >
                  <div className="text-6xl font-bold text-[#00FF41] mb-2">10</div>
                  <div className="text-2xl font-bold text-white">GEM MT</div>
                  <div className="mt-8 space-y-2 text-sm">
                    <div className="flex justify-between gap-8 text-[#00FF41]/80">
                      <span>CENTERING:</span>
                      <span className="text-white">15%</span>
                    </div>
                    <div className="flex justify-between gap-8 text-[#00FF41]/80">
                      <span>CORNERS:</span>
                      <span className="text-white">30%</span>
                    </div>
                    <div className="flex justify-between gap-8 text-[#00FF41]/80">
                      <span>EDGES:</span>
                      <span className="text-white">25%</span>
                    </div>
                    <div className="flex justify-between gap-8 text-[#00FF41]/80">
                      <span>SURFACE:</span>
                      <span className="text-white">30%</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 border-t border-[#003B00] bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Target />}
              title="PSA_ALIGNED"
              description="Centering 15%, Corners 30%, Edges 25%, Surface 30%. Full scale GEM MT 10 to POOR 1."
            />
            <FeatureCard 
              icon={<Eye />}
              title="AI_VISION"
              description="Gemini 2.5 Flash identifies cards, detects slabs, reads existing grades."
            />
            <FeatureCard 
              icon={<Zap />}
              title="INSTANT_RESULTS"
              description="Upload or right-click any card image. Grade in 10-15 seconds."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#00FF41]/5 transform skew-y-3 z-0" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">READY_TO_GRADE?</h2>
          <p className="text-[#00FF41]/70 mb-10 text-lg">
            Install the extension and start grading your cards instantly.
          </p>
          <MatrixButton className="text-lg px-10 py-4" onClick={() => window.open("#", "_blank")}>
            INSTALL_FROM_CHROME_WEB_STORE <ArrowRight className="ml-2 w-5 h-5" />
          </MatrixButton>
        </div>
      </section>
    </Layout>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="matrix-card group hover:-translate-y-2 transition-transform duration-300">
      <div className="text-[#00FF41] mb-4 p-3 bg-[#003B00]/20 inline-block rounded border border-[#003B00] group-hover:border-[#00FF41] group-hover:shadow-[0_0_10px_rgba(0,255,65,0.3)] transition-all">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#00FF41] transition-colors">{title}</h3>
      <p className="text-[#00FF41]/60 leading-relaxed text-sm">
        {description}
      </p>
    </div>
  );
}
