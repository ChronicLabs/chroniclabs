import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";
import { RelatedPages } from "@/components/RelatedPages";
import { Calendar, Clock, Brain, Download, Zap, Trophy } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const APP_STORE_URL = "https://apps.apple.com/us/app/defrag-daily-chronology-game/id6758625499";

// FAQ Data
const timelineGameFAQs = [
  {
    q: "What is a timeline game?",
    a: "A timeline game challenges you to arrange historical items, events, or products in chronological order from oldest to newest. Unlike trivia that asks for exact dates, timeline games reward relative knowledge—you need to know that Windows 95 came before Windows XP, not the specific years. Defrag is a daily timeline game featuring 16 items per puzzle across themes like tech history, movies, and major events.",
  },
  {
    q: "How do you play a timeline game?",
    a: "In timeline games, you're given scrambled historical items and must rearrange them chronologically. In Defrag, tap two tiles to swap positions, working through 16 items until the full timeline is correct from oldest to newest. Easy mode shows years on tiles (pure sorting), Hard mode hides years (tests knowledge). Submit when ready to see your score and leaderboard rank.",
  },
  {
    q: "Are timeline games educational?",
    a: "Yes—timeline games teach historical context and relative chronology better than rote memorization. By arranging items in order, you learn which innovations happened in the same era, understand cause-and-effect relationships (e.g., internet predates smartphones), and build intuitive timeline knowledge. Teachers use timeline games to make history more engaging than flashcards or dates-only quizzes.",
  },
  {
    q: "What skills do timeline games test?",
    a: "Timeline games test three main skills: historical knowledge (knowing approximate eras), deductive reasoning (figuring out relative order from context), and pattern recognition (understanding technological or cultural progression). You don't need perfect recall—just logical thinking. For example, knowing smartphones are recent tech helps you place iPhone after early computers without memorizing 2007.",
  },
  {
    q: "Where can I play timeline games?",
    a: "Defrag offers free daily timeline puzzles on iOS (iPhone & iPad), with Android coming soon. Each day at midnight, a new themed puzzle appears—operating systems, Pixar movies, historical events, tech products. It's free to play with optional premium features. Other timeline games include Timeline (card game) and various history quiz apps, but Defrag specializes in daily chronology challenges.",
  },
  {
    q: "What themes are in timeline games?",
    a: "Defrag rotates themes daily: tech history (operating systems, smartphones, gaming consoles), entertainment (Pixar movies, Marvel films, video game releases), historical events (space exploration, Olympics, scientific discoveries), and culture (music platforms, social media, sports championships). Daily variety keeps puzzles fresh—you're not solving the same tech timeline every day.",
  },
  {
    q: "Do I need exact dates for timeline games?",
    a: "No—timeline games focus on relative order, not exact years. You don't need to know Windows 95 launched in 1995, just that it came between MS-DOS and Windows XP. Defrag's Easy mode shows years if you want to learn them, but Hard mode hides years to test pure deduction. Most players prefer Hard mode once they're comfortable with chronological thinking.",
  },
  {
    q: "Are timeline games hard?",
    a: "Difficulty varies by theme and your knowledge. Tech history puzzles are easier for tech workers, movie timelines favor film fans. Defrag offers Easy mode (years visible) for learning and Hard mode (years hidden) for challenge. Most players complete puzzles in 8-15 minutes. Unlike timed games, there's no pressure—take as long as you need to work through the timeline logically.",
  },
  {
    q: "Can I play timeline games daily?",
    a: "Yes—Defrag offers one new timeline puzzle every day at midnight (your local time), similar to Wordle's daily format. This prevents burnout (you can't binge-play 100 puzzles) while building a daily habit. Streak tracking rewards consistency. If you want more than one puzzle per day, premium subscribers get access to a 30-day archive of past challenges.",
  },
  {
    q: "What's the difference between timeline games and trivia?",
    a: "Trivia asks specific questions with exact answers ('What year did the Moon landing happen?' → 1969). Timeline games ask you to arrange items in relative order without exact dates. Timeline games reward deductive reasoning and context; trivia rewards factual recall. If you're better at seeing patterns than memorizing facts, timeline games may feel more accessible than traditional trivia.",
  },
];

// Schema Markup
const timelineGameSchema = [
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": timelineGameFAQs.map((faq) => ({
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
    "description": "Daily timeline game. Arrange 16 historical items in chronological order.",
    "featureList": [
      "Daily timeline puzzles",
      "Easy mode (years visible) and Hard mode (years hidden)",
      "Multiple themes (tech, movies, history, culture)",
      "Global leaderboards",
      "Free to play",
    ],
    "downloadUrl": APP_STORE_URL,
  },
];

export default function TimelineGame() {
  return (
    <Layout>
      <SEO 
        title="Timeline Game: Arrange Historical Events in Chronological Order"
        description="Play timeline games daily. Arrange 16 historical items chronologically—tech, movies, events. Free on iOS. Test your timeline knowledge with Defrag."
        canonical="https://chroniclabs.co/timeline-game"
        breadcrumbs={[
          { name: "Home", item: "https://chroniclabs.co/" },
          { name: "Timeline Game" }
        ]}
        schema={timelineGameSchema}
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
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
              Timeline Game
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              Arrange Historical Events in Chronological Order
            </p>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Test your knowledge of when things happened—from tech history to Pixar movies
            </p>

            {/* What Is a Timeline Game */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 mb-8 text-left">
              <h2 className="text-xl font-semibold text-white mb-3">What Is a Timeline Game?</h2>
              <p className="text-gray-300 leading-relaxed">
                A timeline game challenges you to arrange historical items—events, inventions, products, cultural milestones—in chronological order from oldest to newest. Unlike trivia that requires exact dates, timeline games reward deductive reasoning: you might not know the iPhone launched in 2007, but you know it came after flip phones and before modern smartphones. That's enough to solve the puzzle.
              </p>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-orange-400" />
                <span>Daily puzzles</span>
              </div>
              <div className="flex items-center gap-2">
                <Brain className="w-4 h-4 text-red-400" />
                <span>Deduction over memorization</span>
              </div>
              <div className="flex items-center gap-2">
                <Trophy className="w-4 h-4 text-yellow-400" />
                <span>Leaderboards</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-pink-400" />
                <span>Free to play</span>
              </div>
            </div>

            {/* Primary CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={APP_STORE_URL}
                className="relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold tracking-widest bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 overflow-hidden"
              >
                <Download className="w-5 h-5 mr-2" />
                Play Defrag - Timeline Puzzles
                <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-current opacity-50" />
                <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-current opacity-50" />
              </a>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Free on iOS • New puzzle daily at midnight
            </p>
          </motion.div>
        </div>
      </section>

      {/* How Timeline Games Work */}
      <section className="py-20 bg-gray-900/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
              How Timeline Games Work
            </h2>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-8 mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">Example: Tech Timeline</h3>
              
              <div className="mb-6">
                <p className="text-gray-400 mb-3 text-sm">Items (scrambled):</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                  {['iPhone', 'Walkman', 'iPod', 'AirPods', 'Discman', 'MP3 Player'].map((item) => (
                    <div key={item} className="bg-gray-800/50 border border-gray-700 rounded p-3 text-center text-white">
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3 text-gray-300 mb-6">
                <p className="flex gap-3">
                  <span className="flex-shrink-0 text-orange-400 font-semibold">1.</span>
                  <span>Look at the items and think about which era each belongs to</span>
                </p>
                <p className="flex gap-3">
                  <span className="flex-shrink-0 text-orange-400 font-semibold">2.</span>
                  <span>Tap two tiles to swap positions (work oldest → newest)</span>
                </p>
                <p className="flex gap-3">
                  <span className="flex-shrink-0 text-orange-400 font-semibold">3.</span>
                  <span>Use logic: Walkman (cassettes) came before iPod (digital music)</span>
                </p>
                <p className="flex gap-3">
                  <span className="flex-shrink-0 text-orange-400 font-semibold">4.</span>
                  <span>Submit when all items are in chronological order</span>
                </p>
              </div>

              <div className="pt-6 border-t border-gray-700">
                <p className="text-sm text-gray-400 mb-2">Correct Timeline:</p>
                <div className="space-y-2 text-sm">
                  {[
                    'Walkman (1979)',
                    'Discman (1984)',
                    'MP3 Player (1998)',
                    'iPod (2001)',
                    'iPhone (2007)',
                    'AirPods (2016)'
                  ].map((item, i) => (
                    <div key={item} className="flex items-center gap-2 text-gray-300">
                      <span className="text-orange-400">{i + 1}.</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {[
                { icon: Brain, title: 'Deductive Reasoning', desc: 'Figure out relative order from context' },
                { icon: Clock, title: 'No Time Pressure', desc: 'Take as long as you need to solve' },
                { icon: Trophy, title: 'Compete Globally', desc: 'Leaderboard ranks by speed + accuracy' },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 text-center">
                  <Icon className="w-8 h-8 text-orange-400 mx-auto mb-2" />
                  <h4 className="font-semibold text-white mb-1">{title}</h4>
                  <p className="text-sm text-gray-400">{desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Themes */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
              Timeline Themes in Defrag
            </h2>

            <p className="text-lg text-gray-300 mb-12 text-center">
              Every day at midnight, a new themed timeline puzzle appears. Themes rotate to keep challenges fresh.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                { icon: '💻', title: 'Tech History', examples: 'Operating systems, smartphones, social media, gaming consoles' },
                { icon: '🎬', title: 'Entertainment', examples: 'Pixar movies, Marvel films, video game releases, music albums' },
                { icon: '🚀', title: 'Major Events', examples: 'Space exploration, Olympics, scientific discoveries, inventions' },
                { icon: '🏆', title: 'Culture & Sports', examples: 'Super Bowls, Grammy winners, viral moments, fashion trends' },
              ].map((theme) => (
                <div key={theme.title} className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                  <div className="text-4xl mb-3">{theme.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{theme.title}</h3>
                  <p className="text-gray-400 text-sm">{theme.examples}</p>
                </div>
              ))}
            </div>

            <div className="bg-orange-900/20 border border-orange-800/50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Why Themes Matter</h3>
              <p className="text-gray-300">
                You don't need to be an expert in every category. One day you're sorting Pixar movies (easy for movie fans), the next you're tackling operating systems (easier for tech folks). Daily variety means everyone has strengths—and everyone learns something new.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

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
              {timelineGameFAQs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left text-white hover:text-orange-400">
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
              Start Your Daily Timeline Challenge
            </h2>

            <p className="text-lg text-gray-300 mb-8">
              One new timeline puzzle every day. Free to play. No exact dates required—just logical thinking.
            </p>

            <div className="flex flex-col items-center gap-4">
              <a 
                href={APP_STORE_URL}
                className="relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold tracking-widest bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 overflow-hidden"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Defrag Free
                <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-current opacity-50" />
                <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-current opacity-50" />
              </a>
              <p className="text-sm text-gray-400">Available now on iPhone & iPad • Android coming soon</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Pages */}
      <RelatedPages
        title="Explore More Puzzle Games"
        pages={[
          {
            title: "Chronology Game",
            description: "Master chronological sorting with daily puzzles",
            href: "/chronology-game",
            icon: "⏰"
          },
          {
            title: "Games Like Wordle",
            description: "Daily puzzle alternatives for every interest",
            href: "/games-like-wordle",
            icon: "🎮"
          },
          {
            title: "History Trivia Game",
            description: "Test your historical knowledge",
            href: "/history-trivia-game",
            icon: "🎓"
          },
        ]}
      />
    </Layout>
  );
}
