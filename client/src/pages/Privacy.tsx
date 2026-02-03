import { Layout } from "@/components/Layout";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function Privacy() {
  return (
    <Layout>
      <div className="matrix-container">
        <Link href="/" className="inline-flex items-center text-[#003B00] hover:text-[#00FF41] mb-8 transition-colors group">
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          RETURN_TO_HOME
        </Link>

        <article className="prose prose-invert max-w-none">
          <header className="mb-12 border-b border-[#003B00] pb-8">
            <h1 className="text-4xl md:text-6xl mb-4 text-[#00FF41]">PRIVACY_POLICY</h1>
            <p className="text-[#003B00] font-mono">LAST_MODIFIED: FEBRUARY_2026</p>
          </header>

          <section className="space-y-12 text-[#ccc]">
            <div className="matrix-card">
              <h2 className="text-2xl text-[#00FF41] mb-4 flex items-center">
                <span className="mr-3 text-[#003B00]">01.</span>
                DATA_COLLECTION
              </h2>
              <p className="leading-relaxed">
                We use <strong className="text-white">Apple Sign In</strong> to provide a secure, anonymous authentication method. 
                We collect a unique User ID and your chosen username to save your daily scores to our global database. 
                This ensures your identity remains fragmented and secure.
              </p>
            </div>

            <div className="matrix-card">
              <h2 className="text-2xl text-[#00FF41] mb-4 flex items-center">
                <span className="mr-3 text-[#003B00]">02.</span>
                IN-APP_PURCHASES
              </h2>
              <p className="leading-relaxed">
                Our app offers a Premium upgrade and consumable items. These transactions are processed via 
                <strong className="text-white"> RevenueCat</strong> and Apple's secure payment infrastructure. 
                We do not store, see, or process your financial information directly on our servers.
              </p>
            </div>

            <div className="matrix-card">
              <h2 className="text-2xl text-[#00FF41] mb-4 flex items-center">
                <span className="mr-3 text-[#003B00]">03.</span>
                THIRD-PARTY_SERVICES
              </h2>
              <p className="leading-relaxed">
                We utilize RevenueCat for subscription management and an encrypted database for leaderboard functionality. 
                No user data is sold to advertisers or third-party data brokers. Your performance metrics are strictly 
                for gameplay purposes.
              </p>
            </div>

            <div className="matrix-card">
              <h2 className="text-2xl text-[#00FF41] mb-4 flex items-center">
                <span className="mr-3 text-[#003B00]">04.</span>
                DATA_DELETION
              </h2>
              <p className="leading-relaxed">
                Users may request full account and data deletion at any time by initiating a protocol request to 
                <strong className="text-white ml-1">hello@chroniclabs.co</strong>. All associated records will be purged from the mainframe within 30 days.
              </p>
            </div>
          </section>

          <footer className="mt-16 pt-8 border-t border-[#003B00] text-center">
            <p className="text-[#003B00]">END_OF_FILE</p>
          </footer>
        </article>
      </div>
    </Layout>
  );
}
