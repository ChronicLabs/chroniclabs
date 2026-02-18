import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function GradePrivacy() {
  return (
    <Layout>
      <SEO
        title="Grade Privacy Policy — Chronic Labs"
        description="Privacy policy for the Grade AI sports card grader Chrome extension by Chronic Labs."
        canonical="https://chroniclabs.co/grade/privacy"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://chroniclabs.co" },
              { "@type": "ListItem", "position": 2, "name": "Grade", "item": "https://chroniclabs.co/grade" },
              { "@type": "ListItem", "position": 3, "name": "Grade Privacy Policy", "item": "https://chroniclabs.co/grade/privacy" },
            ],
          },
        ]}
      />
      <div className="matrix-container">
        <Link href="/grade" className="inline-flex items-center text-[#003B00] hover:text-[#00FF41] mb-8 transition-colors group">
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          RETURN_TO_GRADE
        </Link>

        <article className="prose prose-invert max-w-none">
          <header className="mb-12 border-b border-[#003B00] pb-8">
            <h1 className="text-4xl md:text-6xl mb-4 text-[#00FF41]">GRADE_PRIVACY_POLICY</h1>
            <p className="text-[#003B00] font-mono">LAST_MODIFIED: FEBRUARY_2026</p>
          </header>

          <section className="space-y-12 text-[#ccc]">
            <div className="matrix-card">
              <h2 className="text-2xl text-[#00FF41] mb-4 flex items-center">
                <span className="mr-3 text-[#003B00]">01.</span>
                DATA_COLLECTED
              </h2>
              <p className="leading-relaxed">
                The Grade Chrome extension collects <strong className="text-white">card images</strong> uploaded for analysis. 
                Images are processed server-side and are <strong className="text-white">not stored permanently</strong> unless 
                you explicitly submit a grade correction for training purposes. API settings (if configured) are stored locally 
                via <strong className="text-white">chrome.storage</strong> and never leave your device.
              </p>
            </div>

            <div className="matrix-card">
              <h2 className="text-2xl text-[#00FF41] mb-4 flex items-center">
                <span className="mr-3 text-[#003B00]">02.</span>
                IMAGE_PROCESSING
              </h2>
              <p className="leading-relaxed">
                Card images are sent to our API server for computer vision analysis and to 
                <strong className="text-white"> Google Gemini 2.5 Flash</strong> for AI assessment. Images are processed 
                <strong className="text-white"> in memory</strong> and discarded after analysis. The only exception is when 
                you explicitly submit a grade correction for training — in that case, the image may be retained to improve 
                the grading model.
              </p>
            </div>

            <div className="matrix-card">
              <h2 className="text-2xl text-[#00FF41] mb-4 flex items-center">
                <span className="mr-3 text-[#003B00]">03.</span>
                THIRD_PARTY_SERVICES
              </h2>
              <p className="leading-relaxed mb-4">
                We use <strong className="text-white">Google Gemini 2.5 Flash</strong> for vision analysis. 
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <span className="text-[#00FF41]">&gt;</span>
                  <span>No user tracking</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-[#00FF41]">&gt;</span>
                  <span>No analytics</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-[#00FF41]">&gt;</span>
                  <span>No advertisements</span>
                </div>
              </div>
            </div>

            <div className="matrix-card">
              <h2 className="text-2xl text-[#00FF41] mb-4 flex items-center">
                <span className="mr-3 text-[#003B00]">04.</span>
                DATA_STORAGE
              </h2>
              <p className="leading-relaxed">
                <strong className="text-white">No personal data is collected.</strong> No accounts are required. 
                If you configure a custom API key, it is stored locally in Chrome sync storage and is never transmitted 
                to our servers. We do not track who you are or what cards you grade.
              </p>
            </div>

            <div className="matrix-card">
              <h2 className="text-2xl text-[#00FF41] mb-4 flex items-center">
                <span className="mr-3 text-[#003B00]">05.</span>
                DATA_DELETION
              </h2>
              <p className="leading-relaxed">
                There is <strong className="text-white">no persistent data to delete</strong> under normal usage. 
                If you have submitted correction images and would like them purged from our training data, 
                contact us at <strong className="text-white">hello@chroniclabs.co</strong>.
              </p>
            </div>

            <div className="matrix-card">
              <h2 className="text-2xl text-[#00FF41] mb-4 flex items-center">
                <span className="mr-3 text-[#003B00]">06.</span>
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
