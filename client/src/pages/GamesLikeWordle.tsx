import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { RelatedPages } from "@/components/RelatedPages";
import { MatrixButton } from "@/components/MatrixButton";
import { motion } from "framer-motion";
import { Calendar, Shuffle, Trophy, Brain, Download, Zap } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const APP_STORE_URL = "https://apps.apple.com/us/app/defrag-daily-chronology-game/id6758625499";

// FAQ Data
const gamesLikeWordleFAQs = [
  {
    q: "What games are like Wordle?",
    a: "Games like Wordle share the daily challenge format: one puzzle per day, streak tracking, and shareable results. Popular alternatives include Defrag (arrange historical items chronologically), Connections (group tiles by category), Quordle (four Wordles at once), and Heardle (guess songs). Each offers the same habit-forming daily format but tests different skills—timeline knowledge, pattern recognition, vocabulary, or music knowledge.",
  },
  {
    q: "What is the best alternative to Wordle?",
    a: "The best Wordle alternative depends on your interests. If you like Wordle's daily format but want a visual challenge instead of word-guessing, Defrag offers chronology puzzles where you arrange 16 historical items in timeline order. If you prefer staying with word games, Quordle and Dordle offer multiple simultaneous puzzles. Connections provides a similar daily NYT puzzle experience with tile-grouping mechanics.",
  },
  {
    q: "Are there puzzle games like Wordle for non-word fans?",
    a: "Yes—many daily puzzle games use Wordle's format but test different skills. Defrag challenges timeline knowledge (arrange events chronologically), Connections tests pattern recognition (group tiles by category), Nerdle uses numbers instead of letters (math equations), and Worldle asks you to guess countries by shape. All share Wordle's one-puzzle-per-day structure without requiring vocabulary skills.",
  },
  {
    q: "What makes a game 'like Wordle'?",
    a: "A game is 'like Wordle' if it offers one daily puzzle that resets at midnight, tracks your streak across days, and lets you share results without spoiling the answer. Wordle popularized this format: limited daily content prevents burnout, streak tracking builds habit formation, and social sharing creates community engagement. Games like Defrag, Connections, and Quordle all follow this proven structure.",
  },
  {
    q: "Is there a Wordle for history fans?",
    a: "Yes—Defrag is designed for history and timeline enthusiasts. Instead of guessing words, you arrange 16 historical items (operating systems, Pixar movies, tech products, events) in chronological order. It shares Wordle's daily format, streak tracking, and shareable results, but tests your knowledge of when things happened rather than vocabulary. Perfect for players who prefer deductive reasoning over word puzzles.",
  },
  {
    q: "Can I play multiple Wordle-like games per day?",
    a: "Yes—most Wordle alternatives offer one daily puzzle each, so you can play several different games in one day. A typical routine might include Wordle (words), Defrag (timelines), Connections (categories), and Quordle (multiple words) for 20-30 minutes of varied daily puzzles. Each game scratches a different mental itch while maintaining the satisfying daily challenge format.",
  },
  {
    q: "Are Wordle alternatives free?",
    a: "Most Wordle alternatives are free to play. Defrag offers free daily chronology puzzles with optional premium features (ad-free experience, unlimited hints, puzzle archive). Connections is free on NYT. Quordle and Dordle are free with ads. Some games offer premium subscriptions for extra features, but core daily puzzles remain free—following Wordle's accessible model.",
  },
  {
    q: "Do Wordle alternatives have leaderboards?",
    a: "Some do, some don't. Defrag has global leaderboards ranking players by completion time and move efficiency. Wordle itself doesn't have official leaderboards (just personal stats), while games like Quordle offer optional competitive modes. The leaderboard presence depends on whether the game emphasizes competition (Defrag) or personal improvement (Wordle).",
  },
  {
    q: "What's the difference between Wordle and Defrag?",
    a: "Both offer one puzzle per day at midnight with streak tracking and shareable results. Wordle tests vocabulary (guess a 5-letter word in 6 tries), while Defrag tests timeline knowledge (arrange 16 items chronologically with unlimited moves). Wordle is quick (2-5 minutes), Defrag is more substantial (8-15 minutes). Both build daily habits but appeal to different cognitive preferences—linguistic vs spatial/historical.",
  },
  {
    q: "How do I find more games like Wordle?",
    a: "Search for 'daily puzzle games,' 'Wordle alternatives,' or specific interests like 'math Wordle' (Nerdle), 'music Wordle' (Heardle), or 'geography Wordle' (Worldle). Most Wordle-like games are free web apps or mobile games. Download Defrag for a timeline-based alternative, or try NYT's Connections for another official daily puzzle. Communities on Reddit (r/wordle) often share new daily challenge games.",
  },
];

// Schema Markup
const gamesLikeWordleSchema = [
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": gamesLikeWordleFAQs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": { "@type": "Answer", "text": faq.a },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Defrag",
    "applicationCategory": "GameApplication",
    "operatingSystem": "iOS",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
    },
    "description": "Daily chronology puzzle game like Wordle. Arrange 16 historical items in timeline order.",
    "featureList": [
      "Daily puzzle at midnight (like Wordle)",
      "Streak tracking and rewards",
      "Shareable results without spoilers",
      "Global leaderboards",
      "Free to play",
    ],
    "downloadUrl": APP_STORE_URL,
  },
];

export default function GamesLikeWordle() {
  return (
    <Layout>
      <SEO 
        title="Games Like Wordle: Daily Puzzle Alternatives for Every Interest"
        description="Looking for games like Wordle? Try Defrag's daily timeline puzzles, Connections, Quordle, and more. Same addictive daily format, different challenges."
        canonical="https://chroniclabs.co/games-like-wordle"
        breadcrumbs={[
          { name: "Home", item: "https://chroniclabs.co/" },
          { name: "Games Like Wordle" }
        ]}
        schema={gamesLikeWordleSchema}
      />

      {/* Hero Section */}
      <section className="min-h-[70vh] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-90" />
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Games Like Wordle
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              Daily Puzzle Alternatives for Every Interest
            </p>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Love Wordle's daily challenge format? Discover puzzle games that offer the same habit-forming experience but test different skills.
            </p>

            {/* What Makes Games Like Wordle */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 mb-8 text-left">
              <h2 className="text-xl font-semibold text-white mb-3">What Makes a Game "Like Wordle"?</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Games like Wordle share three key features: <strong>one puzzle per day</strong> (resets at midnight), <strong>streak tracking</strong> (rewards daily play), and <strong>shareable results</strong> (without spoiling the answer). This format creates habit-forming gameplay—you can't binge-play, so there's always anticipation for tomorrow's challenge.
              </p>
              <p className="text-gray-300 leading-relaxed">
                The best Wordle alternatives keep this structure but test different skills: timeline knowledge (Defrag), pattern recognition (Connections), math (Nerdle), geography (Worldle), or music (Heardle).
              </p>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-green-400" />
                <span>Daily puzzles</span>
              </div>
              <div className="flex items-center gap-2">
                <Trophy className="w-4 h-4 text-yellow-400" />
                <span>Streak tracking</span>
              </div>
              <div className="flex items-center gap-2">
                <Shuffle className="w-4 h-4 text-blue-400" />
                <span>Shareable results</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-purple-400" />
                <span>Free to play</span>
              </div>
            </div>

            {/* Primary CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MatrixButton variant="primary" size="lg" className="inline-flex items-center gap-3">
                  <Download className="w-5 h-5" />
                  Download Defrag - Daily Puzzles
                </MatrixButton>
              </a>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Free on iOS • Android coming soon
            </p>
          </motion.div>
        </div>
      </section>

      {/* Popular Wordle Alternatives */}
      <section className="py-20 bg-gray-900/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
              Popular Daily Puzzle Games
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {/* Defrag */}
              <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-800/50 rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-1">Defrag</h3>
                    <p className="text-blue-300 text-sm">Timeline Chronology Puzzles</p>
                  </div>
                  <Brain className="w-8 h-8 text-blue-400" />
                </div>
                <p className="text-gray-300 mb-4">
                  Arrange 16 historical items in chronological order. Tests timeline knowledge and deductive reasoning—perfect for history buffs and trivia fans.
                </p>
                <div className="space-y-2 text-sm text-gray-400 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span>Daily puzzle at midnight</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span>Easy & Hard difficulty modes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span>Global leaderboards</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span>Free • iOS, Android soon</span>
                  </div>
                </div>
                <a 
                  href={APP_STORE_URL}
                  className="inline-block px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition-colors"
                >
                  Download Free →
                </a>
              </div>

              {/* Connections */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-1">Connections</h3>
                    <p className="text-gray-400 text-sm">NYT Category Grouping</p>
                  </div>
                  <Shuffle className="w-8 h-8 text-yellow-400" />
                </div>
                <p className="text-gray-300 mb-4">
                  Group 16 tiles into 4 categories. Official NYT puzzle with Wordle-style daily format. Tests pattern recognition and lateral thinking.
                </p>
                <div className="space-y-2 text-sm text-gray-400 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span>Daily puzzle at midnight</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span>Four difficulty levels</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span>Shareable results</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span>Free • Web & app</span>
                  </div>
                </div>
              </div>

              {/* Quordle */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-1">Quordle</h3>
                    <p className="text-gray-400 text-sm">Four Wordles Simultaneously</p>
                  </div>
                  <Trophy className="w-8 h-8 text-purple-400" />
                </div>
                <p className="text-gray-300 mb-4">
                  Solve four 5-letter words at once in 9 guesses. Same Wordle mechanics but significantly harder—for players who find Wordle too easy.
                </p>
                <div className="space-y-2 text-sm text-gray-400 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span>Daily & practice modes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span>Streak tracking</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span>9 guesses for 4 words</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span>Free • Web based</span>
                  </div>
                </div>
              </div>

              {/* Worldle */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-1">Worldle</h3>
                    <p className="text-gray-400 text-sm">Geography Shape Guessing</p>
                  </div>
                  <Calendar className="w-8 h-8 text-green-400" />
                </div>
                <p className="text-gray-300 mb-4">
                  Guess the country from its silhouette in 6 tries. Get distance/direction hints after each guess. Perfect for geography enthusiasts.
                </p>
                <div className="space-y-2 text-sm text-gray-400 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span>Daily puzzle at midnight</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span>Distance/direction hints</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span>6 guesses per puzzle</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span>Free • Web & mobile</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-gray-400 mb-6">
                Each game offers the same satisfying daily ritual—just testing different skills. Mix and match to create your perfect morning puzzle routine.
              </p>
              <a 
                href={APP_STORE_URL}
                className="relative inline-flex items-center justify-center px-8 py-3 font-bold tracking-widest bg-green-600 hover:bg-green-700 text-white transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 overflow-hidden"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Defrag Free
                <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-current opacity-50" />
                <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-current opacity-50" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Daily Puzzles Work */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
              Why Wordle's Daily Format Works
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 text-center">
                <Calendar className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">One Puzzle Per Day</h3>
                <p className="text-gray-400 text-sm">
                  Limited supply prevents burnout. You can't binge-play 100 puzzles—there's always anticipation for tomorrow.
                </p>
              </div>

              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 text-center">
                <Trophy className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Streak Tracking</h3>
                <p className="text-gray-400 text-sm">
                  Daily consistency builds habits. Missing a day breaks your streak—gentle motivation to keep playing.
                </p>
              </div>

              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 text-center">
                <Shuffle className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Shareable Results</h3>
                <p className="text-gray-400 text-sm">
                  Everyone gets the same puzzle, so you can compare scores without spoiling answers. Social engagement without competition.
                </p>
              </div>
            </div>

            <div className="bg-blue-900/20 border border-blue-800/50 rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-white mb-4">The Perfect Daily Routine</h3>
              <p className="text-gray-300 mb-4">
                Many players build a morning ritual: coffee + Wordle (5 min) + Defrag (10 min) + Connections (5 min). 
                20 minutes of varied mental stimulation to start your day—word puzzles, timeline challenges, and pattern recognition.
              </p>
              <p className="text-gray-400 text-sm">
                Because each game offers one puzzle daily, you can play multiple games without feeling overwhelmed. It's the opposite of endless scroll—satisfying, finite challenges with clear completion.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Pages */}
      <RelatedPages
        title="More Daily Puzzle Games"
        pages={[
          {
            title: "Chronology Game",
            description: "Daily timeline sorting puzzles",
            href: "/chronology-game",
            icon: "⏰"
          },
          {
            title: "Timeline Game",
            description: "Arrange events in chronological order",
            href: "/timeline-game",
            icon: "📅"
          },
          {
            title: "Defrag",
            description: "Free daily chronology game for iOS",
            href: "/defrag",
            icon: "📱"
          },
        ]}
      />

      {/* FAQ Section */}
      <section className="py-20 bg-gray-900/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
              Frequently Asked Questions
            </h2>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {gamesLikeWordleFAQs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left text-white hover:text-green-400">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-b from-gray-900/50 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready for a Timeline Challenge?
            </h2>

            <p className="text-lg text-gray-300 mb-8">
              If you love Wordle's daily format but want something beyond word puzzles, try Defrag. Same satisfying ritual, different skill set.
            </p>

            <div className="flex flex-col items-center gap-4 mb-8">
              <a 
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MatrixButton variant="primary" size="lg" className="inline-flex items-center gap-3">
                  <Download className="w-5 h-5" />
                  Download Defrag Free
                </MatrixButton>
              </a>
              <p className="text-sm text-gray-400">Available now on iPhone & iPad • Free to play • Android coming soon</p>
            </div>

            <p className="text-xs text-gray-500">
              Wordle is a trademark of The New York Times Company. Defrag is an independent game not affiliated with or endorsed by NYT.
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
