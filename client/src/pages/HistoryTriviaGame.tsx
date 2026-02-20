import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { MatrixButton } from "@/components/MatrixButton";
import { motion } from "framer-motion";
import { RelatedPages } from "@/components/RelatedPages";
import { CTASection } from "@/components/CTASection";
import { Brain, Download, Trophy, Clock } from "lucide-react";

const APP_STORE_URL = "https://apps.apple.com/us/app/defrag-daily-chronology-game/id6758625499";

const historyTriviaSchema = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Defrag",
    "applicationCategory": "GameApplication",
    "operatingSystem": "iOS",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "description": "Daily history timeline game with trivia elements",
  },
];

export default function HistoryTriviaGame() {
  return (
    <Layout>
      <SEO 
        title="History Trivia Game: Daily Timeline Puzzles & Historical Knowledge"
        description="Test your history knowledge with daily trivia timeline games. Arrange historical events, tech, and culture chronologically. Free on iOS."
        canonical="https://chroniclabs.co/history-trivia-game"
        breadcrumbs={[
          { name: "Home", item: "https://chroniclabs.co/" },
          { name: "History Trivia Game" }
        ]}
        schema={historyTriviaSchema}
      />

      <section className="min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              History Trivia Game
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Test your historical knowledge with daily timeline challenges
            </p>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 mb-8 text-left">
              <p className="text-gray-300">
                Defrag combines history trivia with timeline puzzles. Instead of answering questions with exact dates, you arrange historical items in chronological order—testing your knowledge of when things happened relative to each other.
              </p>
            </div>

            <a 
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MatrixButton variant="primary" size="lg" className="inline-flex items-center gap-3">
                <Download className="w-5 h-5" />
                Download Free on iOS
              </MatrixButton>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Related Pages */}
      <RelatedPages
        title="More Timeline & Puzzle Games"
        pages={[
          {
            title: "Chronology Game",
            description: "What chronology puzzles are and how to play",
            href: "/chronology-game",
            icon: "⏰"
          },
          {
            title: "Timeline Game",
            description: "Arrange historical events in order",
            href: "/timeline-game",
            icon: "📅"
          },
          {
            title: "Games Like Wordle",
            description: "Other daily puzzle games to try",
            href: "/games-like-wordle",
            icon: "🎮"
          },
        ]}
      />

      {/* Final CTA */}
      <CTASection 
        title="Ready for Daily History Challenges?"
        subtitle="Download Defrag free on iOS — test your timeline knowledge every day"
        location="footer"
      />
    </Layout>
  );
}
