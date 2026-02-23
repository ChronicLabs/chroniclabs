import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function BriefPrivacy() {
  return (
    <Layout>
      <SEO
        title="Brief Privacy Policy — Chronic Labs"
        description="Privacy policy for the Brief daily work planner iOS app by Chronic Labs."
        canonical="https://chroniclabs.co/brief/privacy"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://chroniclabs.co" },
              { "@type": "ListItem", "position": 2, "name": "Brief", "item": "https://chroniclabs.co/brief" },
              { "@type": "ListItem", "position": 3, "name": "Brief Privacy Policy", "item": "https://chroniclabs.co/brief/privacy" },
            ],
          },
        ]}
      />
      <div className="matrix-container">
        <Link href="/brief" className="inline-flex items-center text-[#003B00] hover:text-[#00FF41] mb-8 transition-colors group">
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          RETURN_TO_BRIEF
        </Link>

        <article className="prose prose-invert max-w-none">
          <header className="mb-12 border-b border-[#003B00] pb-8">
            <h1 className="text-4xl md:text-6xl mb-4 text-[#00FF41]">BRIEF_PRIVACY_POLICY</h1>
            <p className="text-[#003B00] font-mono">LAST_MODIFIED: FEBRUARY_2026</p>
          </header>

          <section className="space-y-12 text-[#ccc]">
            <div className="matrix-card">
              <h2 className="text-2xl text-[#00FF41] mb-4 flex items-center">
                <span className="mr-3 text-[#003B00]">01.</span>
                DATA_COLLECTED
              </h2>
              <p className="leading-relaxed mb-6">
                Brief collects the following data to provide and improve the app:
              </p>
              <div className="space-y-2">
                <div className="flex items-start space-x-3">
                  <span className="text-[#00FF41] mt-0.5">&gt;</span>
                  <span><strong className="text-white">Task data</strong> — names, descriptions, due dates, scheduling information (stored in our database)</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-[#00FF41] mt-0.5">&gt;</span>
                  <span><strong className="text-white">Calendar data</strong> — read and write access to your device calendar for time blocking (processed locally on device)</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-[#00FF41] mt-0.5">&gt;</span>
                  <span><strong className="text-white">Push notification token</strong> — for local notification scheduling (stored on device)</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-[#00FF41] mt-0.5">&gt;</span>
                  <span><strong className="text-white">Authentication data</strong> — User ID from Apple or Google Sign In</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-[#00FF41] mt-0.5">&gt;</span>
                  <span><strong className="text-white">App usage data</strong> — task completion rates, carry-forward counts, streak data</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-[#00FF41] mt-0.5">&gt;</span>
                  <span><strong className="text-white">Crash and performance data</strong> — for debugging (anonymized)</span>
                </div>
              </div>
            </div>

            <div className="matrix-card">
              <h2 className="text-2xl text-[#00FF41] mb-4 flex items-center">
                <span className="mr-3 text-[#003B00]">02.</span>
                AUTHENTICATION
              </h2>
              <p className="leading-relaxed">
                Brief uses <strong className="text-white">Apple Sign In</strong> and <strong className="text-white">Google Sign In</strong> via Supabase.
                We collect a unique User ID and optional display name. No passwords are stored on our servers.
                You can use Brief as a guest (data stored locally) or sign in to sync across devices.
              </p>
            </div>

            <div className="matrix-card">
              <h2 className="text-2xl text-[#00FF41] mb-4 flex items-center">
                <span className="mr-3 text-[#003B00]">03.</span>
                CALENDAR_ACCESS
              </h2>
              <p className="leading-relaxed">
                Brief requests read and write access to your device calendar to create time blocks for scheduled tasks.
                Calendar data is processed <strong className="text-white">locally on your device</strong>. Event data is not transmitted to our servers —
                only the calendar event ID is stored alongside your task in our database to enable editing and deletion.
              </p>
            </div>

            <div className="matrix-card">
              <h2 className="text-2xl text-[#00FF41] mb-4 flex items-center">
                <span className="mr-3 text-[#003B00]">04.</span>
                NOTIFICATIONS
              </h2>
              <p className="leading-relaxed">
                Brief schedules <strong className="text-white">local notifications</strong> on your device for: morning briefing (default 8 AM daily),
                evening summary (default 7 PM daily), and time block reminders (15 minutes before a scheduled task).
                These are local notifications — they do not require a server connection.
                No notification content is transmitted off your device.
              </p>
            </div>

            <div className="matrix-card">
              <h2 className="text-2xl text-[#00FF41] mb-4 flex items-center">
                <span className="mr-3 text-[#003B00]">05.</span>
                IN-APP_PURCHASES
              </h2>
              <p className="leading-relaxed">
                Brief does not currently offer in-app purchases and does not collect or process any payment information.
              </p>
            </div>

            <div className="matrix-card">
              <h2 className="text-2xl text-[#00FF41] mb-4 flex items-center">
                <span className="mr-3 text-[#003B00]">06.</span>
                THIRD_PARTY_SERVICES
              </h2>
              <p className="leading-relaxed mb-4">
                We use the following third-party services:
              </p>
              <div className="space-y-2">
                <div className="flex items-start space-x-3">
                  <span className="text-[#00FF41] mt-0.5">&gt;</span>
                  <span><strong className="text-white">Supabase</strong> — database and authentication (your task data is stored on Supabase's servers in the US)</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-[#00FF41] mt-0.5">&gt;</span>
                  <span><strong className="text-white">Apple Sign In / Google Sign In</strong> — authentication</span>
                </div>
              </div>
              <p className="leading-relaxed mt-4">
                No user data is sold to advertisers or third-party data brokers.
                Task data is used exclusively to provide the Brief app experience.
              </p>
            </div>

            <div className="matrix-card">
              <h2 className="text-2xl text-[#00FF41] mb-4 flex items-center">
                <span className="mr-3 text-[#003B00]">07.</span>
                DATA_DELETION
              </h2>
              <p className="leading-relaxed">
                You may request full account and data deletion at any time by emailing
                <strong className="text-white ml-1">hello@chroniclabs.co</strong>. All task data, account records,
                and associated information will be purged within 30 days. You can also delete your account
                directly within the app via Settings.
              </p>
            </div>

            <div className="matrix-card">
              <h2 className="text-2xl text-[#00FF41] mb-4 flex items-center">
                <span className="mr-3 text-[#003B00]">08.</span>
                CONTACT_PROTOCOL
              </h2>
              <p className="leading-relaxed">
                For questions about this Privacy Policy, contact us at
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
