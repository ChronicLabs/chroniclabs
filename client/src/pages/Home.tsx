import { Layout } from "@/components/Layout";
import { MatrixButton } from "@/components/MatrixButton";
import { GridAnimation } from "@/components/GridAnimation";
import { motion } from "framer-motion";
import { ArrowRight, Cpu, Network, ShieldCheck } from "lucide-react";

export default function Home() {
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
                SYSTEM_VERSION_2.0.4
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter leading-tight">
                SYSTEM <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF41] to-[#003B00]">FRAGMENTED</span>
              </h1>
              <p className="text-xl md:text-2xl text-[#00FF41]/80 mb-8 max-w-xl font-light leading-relaxed">
                16 data nodes. One correct sequence. Restore order before the cycle ends.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <MatrixButton onClick={() => window.open("#", "_blank")}>
                  DOWNLOAD_ON_APP_STORE
                </MatrixButton>
                <MatrixButton variant="outline" onClick={() => {
                  document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
                }}>
                  SYSTEM_SPECS
                </MatrixButton>
              </div>
            </motion.div>

            {/* Visual Content */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex-1 flex justify-center items-center relative"
            >
              {/* Decorative rings */}
              <div className="absolute inset-0 border border-[#003B00] rounded-full opacity-20 animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-8 border border-[#00FF41] rounded-full opacity-10 animate-[spin_15s_linear_infinite_reverse]" />
              
              <GridAnimation />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 border-t border-[#003B00] bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Cpu />}
              title="DAILY_CHALLENGE"
              description="A new unique sequence is generated every 24 hours. Compete globally on the same hardware parameters."
            />
            <FeatureCard 
              icon={<Network />}
              title="GLOBAL_LEADERBOARD"
              description="Sync your high scores to the central mainframe. Verify your standing among other operators."
            />
            <FeatureCard 
              icon={<ShieldCheck />}
              title="SECURE_ID"
              description="Anonymous authentication via Apple Sign In. No personal data traces left on the server."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#00FF41]/5 transform skew-y-3 z-0" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">READY_TO_DEFRAG?</h2>
          <p className="text-[#00FF41]/70 mb-10 text-lg">
            The system is waiting for your input. Begin the sequence now.
          </p>
          <MatrixButton className="text-lg px-10 py-4" onClick={() => window.open("#", "_blank")}>
            INITIALIZE_DOWNLOAD <ArrowRight className="ml-2 w-5 h-5" />
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
