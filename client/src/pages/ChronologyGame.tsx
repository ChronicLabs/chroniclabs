import { Layout } from "@/components/Layout";
import { MatrixButton } from "@/components/MatrixButton";
import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";
import { Calendar, Shuffle, Trophy, Brain, Zap, Download } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { trackAppStoreClick } from "@/lib/analytics";

const APP_STORE_URL = "https://apps.apple.com/us/app/defrag-daily-chronology-game/id6758625499";
const GOOGLE_PLAY_URL = "#"; // Update when Android is live
const WEB_PLAY_URL = "/defrag";

// FAQ Data
const chronologyFAQs = [
  {
    q: "What is a chronology game?",
    a: "A chronology game is a puzzle where you arrange historical items—events, inventions, products, or cultural milestones—in timeline order from oldest to newest. Unlike trivia games that require exact dates, chronology games test your ability to deduce relative order based on context and historical knowledge. Defrag is a daily chronology game where you sort 16 items (like operating systems or Pixar movies) into the correct timeline using swaps.",
  },
  {
    q: "How do you play a chronology game?",
    a: "You start with scrambled historical items and swap their positions until everything is in chronological order from oldest to newest. In Defrag, tap two tiles to swap them, working through 16 items until the full timeline is correct. Easy mode shows years on each tile (pure sorting), while Hard mode hides years (tests your knowledge). Once you're confident in your arrangement, submit to see your score and rank on the leaderboard.",
  },
  {
    q: "How does a chronology game work?",
    a: "Chronology games give you scrambled historical items to arrange in timeline order. Defrag presents 16 tiles daily—tap two to swap positions, working through the grid until everything is chronologically correct from oldest to newest. Easy mode shows years (great for learning), Hard mode hides them (tests your knowledge). Submit when ready to see your score and leaderboard rank.",
  },
  {
    q: "Are chronology games free?",
    a: "Defrag is free to play with daily puzzles, leaderboards, and streak tracking included at no cost. Optional premium subscriptions remove ads and unlock unlimited hints plus access to a 30-day puzzle archive. You can enjoy Defrag indefinitely without paying—premium is for players who want extra features, not a paywall blocking core gameplay.",
  },
  {
    q: "What themes are available in chronology games?",
    a: "Defrag rotates through themes daily, including tech history (operating systems, smartphones, gaming consoles), entertainment (Pixar movies, Marvel films, video games), historical events (space exploration, Olympic hosts, scientific discoveries), and culture (music platforms, social media, sports championships). Themes change every 24 hours, so you're never solving the same type of puzzle two days in a row.",
  },
  {
    q: "Do I need to know exact years to play chronology games?",
    a: "No—chronology games reward relative knowledge, not memorization. You don't need to know Windows 95 launched in 1995; you just need to know it came before Windows XP and after MS-DOS. Defrag's Easy mode shows years (great for learning), while Hard mode hides them (tests your deduction skills). Most players start with Easy mode to build confidence, then switch to Hard mode for the challenge.",
  },
  {
    q: "What's the difference between chronology games and trivia games?",
    a: "Trivia games ask specific questions requiring exact answers (\"What year did the iPhone launch?\" → 2007), while chronology games ask you to arrange items in relative order without needing exact dates. Chronology games test deductive reasoning and pattern recognition; trivia tests factual recall. If you're good at seeing connections and trends, chronology games may feel easier than trivia even if you don't consider yourself a \"history person.\"",
  },
  {
    q: "Are chronology games educational?",
    a: "Yes—chronology games build timeline literacy and historical context. By arranging items in order, you learn which innovations happened in the same era, understand cause-and-effect relationships (e.g., transistors enabled microprocessors), and develop intuitive historical knowledge that's more memorable than rote memorization. Teachers use timeline games to make history engaging, and casual players absorb context painlessly through play.",
  },
  {
    q: "Can I play chronology games on mobile?",
    a: "Yes—Defrag is available on iOS (iPhone/iPad), Android, and web browsers. Download the app for push notifications (daily puzzle reminders) and offline play, or play directly in your browser with no download required. Your progress syncs across devices if you sign in with Apple Sign-In.",
  },
];

// Schema Markup
const chronologySchema = [
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": chronologyFAQs.map((faq) => ({
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
    "operatingSystem": "iOS, Android, Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
    },
    "description": "Daily chronology game. Arrange 16 historical items in timeline order.",
    "featureList": [
      "Daily themed chronology puzzles",
      "Easy mode (years visible) and Hard mode (years hidden)",
      "Global leaderboards",
      "Streak tracking and rewards",
      "Free with optional premium subscription",
    ],
    "downloadUrl": APP_STORE_URL,
  },
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Play a Chronology Game",
    "description": "Learn how to arrange historical items in timeline order in a chronology puzzle game",
    "step": [
      {
        "@type": "HowToStep",
        "name": "View scrambled items",
        "text": "16 historical items appear in random order on your screen",
      },
      {
        "@type": "HowToStep",
        "name": "Tap two tiles to swap",
        "text": "Select two items to switch their positions in the timeline",
      },
      {
        "@type": "HowToStep",
        "name": "Use deduction to arrange chronologically",
        "text": "Place items from oldest to newest using historical knowledge and context clues",
      },
      {
        "@type": "HowToStep",
        "name": "Submit your timeline",
        "text": "When all 16 items are arranged correctly, submit to see your score",
      },
      {
        "@type": "HowToStep",
        "name": "Check the leaderboard",
        "text": "See your global ranking based on completion time and accuracy",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://chroniclabs.co" },
      { "@type": "ListItem", "position": 2, "name": "Chronology Game", "item": "https://chroniclabs.co/chronology-game" },
    ],
  },
];

export default function ChronologyGame() {
  return (
    <Layout>
      <SEO 
        title="Chronology Game: Play Daily Timeline Puzzles Like Wordle"
        description="A chronology game challenges you to arrange historical items in timeline order. Play Defrag's free daily chronology puzzles on iOS, Android, and Web."
        schema={chronologySchema}
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
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Chronology Game
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              Arrange Events in Timeline Order
            </p>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Test your timeline knowledge with daily puzzles—like Connections, but arrange items chronologically
            </p>

            {/* What Is a Chronology Game - Answer First */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 mb-8 text-left">
              <h2 className="text-xl font-semibold text-white mb-3">What Is a Chronology Game?</h2>
              <p className="text-gray-300 leading-relaxed">
                A chronology game challenges you to arrange historical items—events, inventions, movie releases, tech products—in timeline order from oldest to newest. Unlike trivia games that test exact dates, chronology games reward deductive reasoning: you don't need to know that Windows 95 launched in 1995, just that it came before Windows XP.
              </p>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-blue-400" />
                <span>New puzzle daily</span>
              </div>
              <div className="flex items-center gap-2">
                <Trophy className="w-4 h-4 text-yellow-400" />
                <span>Global leaderboards</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-purple-400" />
                <span>Free to play</span>
              </div>
              <div className="flex items-center gap-2">
                <Download className="w-4 h-4 text-green-400" />
                <span>iOS, Android & Web</span>
              </div>
            </div>

            {/* Primary CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={APP_STORE_URL}
                onClick={() => trackAppStoreClick({ source_page: '/chronology-game', cta_location: 'hero', cta_text: 'Download on App Store' })}
                className="relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold tracking-widest bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 overflow-hidden"
              >
                <Download className="w-5 h-5 mr-2" />
                Download on App Store
                <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-current opacity-50" />
                <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-current opacity-50" />
              </a>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Free to play • iOS (iPhone & iPad) • Android coming soon
            </p>
          </motion.div>
        </div>
      </section>

      {/* How to Play Section */}
      <section className="py-20 bg-gray-900/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
              How to Play a Chronology Game
            </h2>

            <p className="text-lg text-gray-300 mb-8 text-center">
              Most chronology games follow a simple format: you're given a set of scrambled historical items and must rearrange them from oldest to newest. Defrag gives you 16 items per puzzle—enough to be challenging without being overwhelming.
            </p>

            {/* Example Puzzle */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-8 mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">Example Puzzle: Operating Systems</h3>
              
              <div className="mb-6">
                <p className="text-gray-400 mb-3 text-sm">Items shown (scrambled):</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                  {['iOS', 'MS-DOS', 'Windows 10', 'Android', 'Windows 95', 'macOS X'].map((item) => (
                    <div key={item} className="bg-gray-800/50 border border-gray-700 rounded p-3 text-center text-white">
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4 text-gray-300">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 border border-blue-500 flex items-center justify-center text-blue-400 font-semibold">1</div>
                  <div>
                    <strong className="text-white">View the scrambled items</strong><br/>
                    16 tiles appear in random order. Each shows a name (e.g., "Windows 95") and optionally a year (in Easy mode).
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 border border-blue-500 flex items-center justify-center text-blue-400 font-semibold">2</div>
                  <div>
                    <strong className="text-white">Tap two tiles to swap</strong><br/>
                    Select "MS-DOS" then "iOS" to switch their positions. Keep swapping until everything is in chronological order.
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 border border-blue-500 flex items-center justify-center text-blue-400 font-semibold">3</div>
                  <div>
                    <strong className="text-white">Use deduction, not memorization</strong><br/>
                    You might not know MS-DOS debuted in 1981, but you know it's older than smartphones. That's enough to place it first.
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 border border-blue-500 flex items-center justify-center text-blue-400 font-semibold">4</div>
                  <div>
                    <strong className="text-white">Submit when ready</strong><br/>
                    Once all 16 items are arranged oldest → newest, submit your answer and see your score.
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 border border-blue-500 flex items-center justify-center text-blue-400 font-semibold">5</div>
                  <div>
                    <strong className="text-white">Check the leaderboard</strong><br/>
                    Your completion time and number of moves rank you against other players globally.
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-700">
                <p className="text-sm text-gray-400 mb-2">Correct Timeline (Revealed After Solving):</p>
                <div className="grid grid-cols-1 gap-2 text-sm">
                  {[
                    'MS-DOS (1981)',
                    'Windows 95 (1995)',
                    'macOS X (2001)',
                    'iOS (2007)',
                    'Android (2008)',
                    'Windows 10 (2015)'
                  ].map((item, i) => (
                    <div key={item} className="flex items-center gap-2 text-gray-300">
                      <span className="text-blue-400">{i + 1}.</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Skills Tested */}
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {[
                { icon: Brain, title: 'Historical Context', desc: 'Which era things belong to' },
                { icon: Shuffle, title: 'Relative Knowledge', desc: 'X came before Y' },
                { icon: Zap, title: 'Pattern Recognition', desc: 'Tech evolution trends' },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 text-center">
                  <Icon className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <h4 className="font-semibold text-white mb-1">{title}</h4>
                  <p className="text-sm text-gray-400">{desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <a 
                href={APP_STORE_URL}
                onClick={() => trackAppStoreClick({ source_page: '/chronology-game', cta_location: 'mid-page', cta_text: 'Download Defrag Free' })}
                className="relative inline-flex items-center justify-center px-8 py-3 font-bold tracking-widest bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 overflow-hidden"
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

      {/* What Makes Defrag Unique */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
              Daily Puzzle Themes
            </h2>

            <p className="text-lg text-gray-300 mb-12 text-center">
              Defrag offers one new chronology puzzle every day at midnight—like the daily format you know from Wordle or Connections, but testing your timeline knowledge instead.
            </p>

            {/* Theme Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                { icon: '🖥️', title: 'Tech History', examples: 'Operating systems, smartphones, gaming consoles' },
                { icon: '🎬', title: 'Entertainment', examples: 'Pixar movies, Marvel films, video game releases' },
                { icon: '🚀', title: 'Historical Events', examples: 'Space exploration, Olympics, scientific discoveries' },
                { icon: '🎵', title: 'Culture & Sports', examples: 'Music platforms, social media, championships' },
              ].map((theme) => (
                <div key={theme.title} className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                  <div className="text-4xl mb-3">{theme.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{theme.title}</h3>
                  <p className="text-gray-400 text-sm">{theme.examples}</p>
                </div>
              ))}
            </div>

            {/* Easy vs Hard Mode */}
            <div className="bg-blue-900/20 border border-blue-800/50 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-semibold text-white mb-6 text-center">Two Difficulty Modes</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-blue-300 mb-2">Easy Mode</h4>
                  <p className="text-gray-300 text-sm mb-3">Years are visible on each tile. Focus on arranging them in the right order—perfect for learning and speed runs.</p>
                  <div className="bg-gray-900/50 rounded p-3 text-sm text-gray-400">
                    <div className="font-mono">Windows 95 → <span className="text-blue-400">1995</span></div>
                    <div className="font-mono">iOS → <span className="text-blue-400">2007</span></div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-purple-300 mb-2">Hard Mode</h4>
                  <p className="text-gray-300 text-sm mb-3">Years are hidden. Rely on your knowledge and deduction—more challenging, more rewarding.</p>
                  <div className="bg-gray-900/50 rounded p-3 text-sm text-gray-400">
                    <div className="font-mono">Windows 95 → <span className="text-gray-600">????</span></div>
                    <div className="font-mono">iOS → <span className="text-gray-600">????</span></div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <a 
                href={APP_STORE_URL}
                onClick={() => trackAppStoreClick({ source_page: '/chronology-game', cta_location: 'mid-page', cta_text: 'Download Free on App Store' })}
                className="relative inline-flex items-center justify-center px-8 py-3 font-bold tracking-widest bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 overflow-hidden mb-4"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Free on App Store
                <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-current opacity-50" />
                <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-current opacity-50" />
              </a>
              <p className="text-gray-400 text-sm">New puzzle daily at midnight • iOS (iPhone & iPad)</p>
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
              {chronologyFAQs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left text-white hover:text-blue-400">
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

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900/50 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Play a Chronology Game?
            </h2>

            <p className="text-lg text-gray-300 mb-8">
              Defrag gives you a free daily chronology puzzle every day—no account required, no paywall, no tricks.
            </p>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 mb-8 text-left">
              <h3 className="text-xl font-semibold text-white mb-4">What to Expect:</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>One new themed puzzle at midnight (your local time)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>16 items to arrange chronologically</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Easy mode (years shown) and Hard mode (years hidden)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Global leaderboard ranking your completion time</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Streak tracking and coin rewards for daily play</span>
                </li>
              </ul>
            </div>

            <p className="text-gray-400 mb-8">
              No commitment needed—play today, skip tomorrow, come back next week. The puzzle resets daily whether you play or not.
            </p>

            <div className="flex flex-col items-center gap-4">
              <a 
                href={APP_STORE_URL}
                onClick={() => trackAppStoreClick({ source_page: '/chronology-game', cta_location: 'footer', cta_text: 'Download Free on App Store' })}
                className="relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold tracking-widest bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 overflow-hidden"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Free on App Store
                <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-current opacity-50" />
                <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-current opacity-50" />
              </a>
              <p className="text-sm text-gray-400">Available now on iPhone & iPad • Android coming soon</p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
