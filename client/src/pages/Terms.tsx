import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function Terms() {
  return (
    <Layout>
      <SEO
        title="Terms of Service — Chronic Labs"
        description="Terms of service for Chronic Labs apps and services."
        canonical="https://chroniclabs.co/terms"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://chroniclabs.co" },
              { "@type": "ListItem", "position": 2, "name": "Terms of Service", "item": "https://chroniclabs.co/terms" },
            ],
          },
        ]}
      />
      <div className="matrix-container">
        <Link href="/" className="inline-flex items-center text-[#003B00] hover:text-[#00FF41] mb-8 transition-colors group">
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          RETURN_TO_HOME
        </Link>

        <article className="prose prose-invert max-w-none">
          <header className="mb-12 border-b border-[#003B00] pb-8">
            <h1 className="text-4xl md:text-6xl mb-4 text-[#00FF41]">TERMS_OF_SERVICE</h1>
            <p className="text-[#003B00] font-mono">LAST_MODIFIED: FEBRUARY_2026</p>
          </header>

          <section className="space-y-12 text-[#ccc]">
            <div className="matrix-card">
              <h2 className="text-2xl text-[#00FF41] mb-4 flex items-center">
                <span className="mr-3 text-[#003B00]">01.</span>
                ACCEPTANCE_OF_TERMS
              </h2>
              <p className="leading-relaxed">
                By downloading, installing, or using <strong className="text-white">Defrag</strong> ("the App"), 
                you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use the App.
              </p>
            </div>

            <div className="matrix-card">
              <h2 className="text-2xl text-[#00FF41] mb-4 flex items-center">
                <span className="mr-3 text-[#003B00]">02.</span>
                DESCRIPTION_OF_SERVICE
              </h2>
              <p className="leading-relaxed">
                Defrag is a daily chronological puzzle game. Players sort historical items by year across multiple 
                difficulty modes. The App includes daily puzzles, leaderboards, optional premium features, and in-app purchases.
              </p>
            </div>

            <div className="matrix-card">
              <h2 className="text-2xl text-[#00FF41] mb-4 flex items-center">
                <span className="mr-3 text-[#003B00]">03.</span>
                USER_ACCOUNTS
              </h2>
              <p className="leading-relaxed mb-4">
                You may sign in using <strong className="text-white">Apple Sign In</strong>. You are responsible for 
                maintaining the security of your account. You must be at least 13 years old to create an account. 
                Guest play is available without an account.
              </p>
            </div>

            <div className="matrix-card">
              <h2 className="text-2xl text-[#00FF41] mb-4 flex items-center">
                <span className="mr-3 text-[#003B00]">04.</span>
                SUBSCRIPTIONS
              </h2>
              <p className="leading-relaxed mb-4">
                Defrag Pro is an auto-renewable subscription that provides premium features including puzzle archive access, 
                free hints, detailed stats, a premium badge, and an ad-free experience.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <span className="text-[#00FF41]">&gt;</span>
                  <span>Payment is charged to your Apple ID account at confirmation of purchase</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-[#00FF41]">&gt;</span>
                  <span>Subscription automatically renews unless cancelled at least 24 hours before the end of the current period</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-[#00FF41]">&gt;</span>
                  <span>Your account will be charged for renewal within 24 hours prior to the end of the current period</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-[#00FF41]">&gt;</span>
                  <span>Manage and cancel subscriptions in your device's App Store account settings</span>
                </div>
              </div>
            </div>

            <div className="matrix-card">
              <h2 className="text-2xl text-[#00FF41] mb-4 flex items-center">
                <span className="mr-3 text-[#003B00]">05.</span>
                IN-APP_PURCHASES
              </h2>
              <p className="leading-relaxed">
                The App offers consumable credit packs (coins) used for hints and puzzle redos. Credits do not expire, 
                have no cash value, and cannot be transferred. All purchases are processed through Apple's App Store. 
                Credit purchases are non-refundable except as required by applicable law.
              </p>
            </div>

            <div className="matrix-card">
              <h2 className="text-2xl text-[#00FF41] mb-4 flex items-center">
                <span className="mr-3 text-[#003B00]">06.</span>
                USER_CONDUCT
              </h2>
              <p className="leading-relaxed mb-4">You agree not to:</p>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <span className="text-[#00FF41]">&gt;</span>
                  <span>Cheat, hack, or exploit bugs in the App</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-[#00FF41]">&gt;</span>
                  <span>Use automated tools or bots</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-[#00FF41]">&gt;</span>
                  <span>Submit offensive or inappropriate display names</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-[#00FF41]">&gt;</span>
                  <span>Attempt to reverse engineer the App</span>
                </div>
              </div>
            </div>

            <div className="matrix-card">
              <h2 className="text-2xl text-[#00FF41] mb-4 flex items-center">
                <span className="mr-3 text-[#003B00]">07.</span>
                INTELLECTUAL_PROPERTY
              </h2>
              <p className="leading-relaxed">
                Defrag and its content are protected by copyright and intellectual property laws. You may not copy, modify, 
                distribute, or create derivative works based on the App or its content without express written permission.
              </p>
            </div>

            <div className="matrix-card">
              <h2 className="text-2xl text-[#00FF41] mb-4 flex items-center">
                <span className="mr-3 text-[#003B00]">08.</span>
                DISCLAIMER_AND_LIABILITY
              </h2>
              <p className="leading-relaxed">
                THE APP IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. TO THE MAXIMUM EXTENT 
                PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES 
                ARISING FROM YOUR USE OF THE APP.
              </p>
            </div>

            <div className="matrix-card">
              <h2 className="text-2xl text-[#00FF41] mb-4 flex items-center">
                <span className="mr-3 text-[#003B00]">09.</span>
                TERMINATION
              </h2>
              <p className="leading-relaxed">
                We may terminate or suspend your access to the App at any time for violation of these Terms. 
                Upon termination, your right to use the App ceases immediately.
              </p>
            </div>

            <div className="matrix-card">
              <h2 className="text-2xl text-[#00FF41] mb-4 flex items-center">
                <span className="mr-3 text-[#003B00]">10.</span>
                GRADE_CHROME_EXTENSION
              </h2>
              <p className="leading-relaxed mb-4">
                The <strong className="text-white">Grade Chrome Extension</strong> is provided "AS IS" for sports card grading assistance. 
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <span className="text-[#00FF41]">&gt;</span>
                  <span>Card grades are estimates, not guarantees</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-[#00FF41]">&gt;</span>
                  <span>Not affiliated with PSA, BGS, SGC, or any official grading service</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-[#00FF41]">&gt;</span>
                  <span>Results should not be used as the sole basis for purchasing or selling decisions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-[#00FF41]">&gt;</span>
                  <span>We are not liable for financial losses based on extension grades</span>
                </div>
              </div>
            </div>

            <div className="matrix-card">
              <h2 className="text-2xl text-[#00FF41] mb-4 flex items-center">
                <span className="mr-3 text-[#003B00]">11.</span>
                CONTACT_PROTOCOL
              </h2>
              <p className="leading-relaxed">
                For questions about these Terms, contact us at 
                <strong className="text-white ml-1">hello@chroniclabs.co</strong>.
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
