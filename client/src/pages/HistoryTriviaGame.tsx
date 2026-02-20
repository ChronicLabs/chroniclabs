import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";
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
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://chroniclabs.co" },
      { "@type": "ListItem", "position": 2, "name": "History Trivia Game", "item": "https://chroniclabs.co/history-trivia-game" },
    ],
  },
];

export default function HistoryTriviaGame() {
  return (
    <Layout>
      <SEO 
        title="History Trivia Game: Daily Timeline Puzzles & Historical Knowledge"
        description="Test your history knowledge with daily trivia timeline games. Arrange historical events, tech, and culture chronologically. Free on iOS."
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
              className="relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Free on iOS
              <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-current opacity-50" />
              <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-current opacity-50" />
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
