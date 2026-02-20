# Chroniclabs.co Site Architecture

## Current Structure
```
chroniclabs.co/
├── / (homepage)
├── /defrag (main product page)
├── /grade (other product)
├── /chronology-game (SEO landing page)
├── /games-like-wordle (SEO landing page)
├── /timeline-game (SEO landing page)
├── /history-trivia-game (SEO landing page)
├── /privacy
├── /terms
└── /support
```

## Proposed New Structure
```
chroniclabs.co/
├── / (homepage - Chronic Labs company/brand)
│
├── /defrag (main Defrag product page)
│
├── /grade (Grade product page)
│
├── LANDING PAGES (root level - SEO optimized)
│   ├── /chronology-game
│   ├── /games-like-wordle
│   ├── /timeline-game
│   └── /history-trivia-game
│
├── /blog/ (NEW - content marketing hub)
│   ├── /blog/ (index - latest posts)
│   ├── /blog/how-to-improve-timeline-knowledge
│   ├── /blog/best-daily-puzzle-games-2026
│   ├── /blog/wordle-to-defrag-daily-puzzle-habit
│   ├── /blog/history-of-daily-puzzle-games
│   └── /blog/chronology-game-strategy-tips
│
└── LEGAL/SUPPORT (footer)
    ├── /privacy
    ├── /terms
    └── /support
```

## Why This Structure?

### **Landing Pages at Root**
✅ **SEO benefit:** `/chronology-game` beats `/pages/chronology-game` in rankings
✅ **Authority:** Root URLs = more important to Google
✅ **Branding:** Clean, professional URLs

### **Blog Under /blog/**
✅ **Scalability:** Can add 100+ posts without cluttering root
✅ **Organization:** Clear content hierarchy
✅ **Internal linking:** Easy to cross-link blog ↔ landing pages
✅ **RSS feed:** `/blog/rss.xml` for subscribers

---

## Navigation Structure

### **Main Header Nav**
```
[Chronic Labs Logo]  |  Defrag  |  Grade  |  Blog  |  [Download Button]
```

### **Footer Nav**
```
PRODUCTS              RESOURCES                COMPANY
- Defrag              - Blog                   - About
- Grade               - Chronology Games       - Privacy
                      - Timeline Games         - Terms
LEARN MORE            - Games Like Wordle      - Support
- What is Defrag?     - History Trivia
- How to Play         
```

### **Blog Sidebar** (on all blog posts)
```
RELATED TOPICS
- Chronology Games
- Timeline Games
- Daily Puzzles
- Games Like Wordle

RECENT POSTS
- [Latest 5 blog posts]

DOWNLOAD DEFRAG
[App Store button]
```

---

## Internal Linking Strategy

### **Landing Page → Blog**
Each landing page footer:
```
## Learn More About Daily Puzzles
- [How to Build a Daily Puzzle Habit](/blog/wordle-to-defrag-daily-puzzle-habit)
- [Best Daily Puzzle Games in 2026](/blog/best-daily-puzzle-games-2026)
- [Chronology Game Strategy Tips](/blog/chronology-game-strategy-tips)
```

### **Blog → Landing Pages**
Every blog post contextually links to:
- 2-3 relevant landing pages (anchor text variations)
- Main Defrag page (product-focused CTAs)

### **Landing Page ↔ Landing Page**
"Related Pages" component at bottom of each:
```
## Explore More
[Card] Chronology Game - What chronological sorting puzzles are
[Card] Timeline Game - How timeline games work
[Card] Games Like Wordle - Daily puzzle alternatives
```

---

## Blog Post Types

### **1. How-To Guides** (Instructional)
- URL: `/blog/how-to-[topic]`
- Length: 1,200-1,800 words
- Schema: HowTo + Article
- CTA: "Try Defrag to practice [skill]"

**Examples:**
- `/blog/how-to-improve-timeline-knowledge`
- `/blog/how-to-play-chronology-games`
- `/blog/how-to-build-daily-puzzle-habit`

### **2. Listicles** (Aggregation)
- URL: `/blog/best-[topic]` or `/blog/[number]-[topic]`
- Length: 1,500-2,500 words
- Schema: ItemList + Article
- CTA: "Defrag is #X on our list"

**Examples:**
- `/blog/best-daily-puzzle-games-2026`
- `/blog/10-wordle-alternatives-you-should-try`
- `/blog/7-ways-to-improve-your-brain-with-games`

### **3. Thought Leadership** (Authority Building)
- URL: `/blog/[topic-name]`
- Length: 1,000-1,500 words
- Schema: Article
- CTA: "See these principles in action"

**Examples:**
- `/blog/history-of-daily-puzzle-games`
- `/blog/why-timeline-games-are-better-than-trivia`
- `/blog/psychology-of-daily-puzzles`

### **4. Product Updates** (User Engagement)
- URL: `/blog/[feature]-launch` or `/blog/defrag-[version]`
- Length: 500-800 words
- Schema: Article
- CTA: "Download the update"

**Examples:**
- `/blog/defrag-android-launch`
- `/blog/new-themes-march-2026`
- `/blog/leaderboard-improvements`

---

## Branding Guidelines

### **Visual Identity**
- **Colors:** Keep Defrag gradient (blue/purple/pink) for product pages
- **Blog:** Simpler, cleaner design (focus on content)
- **Logo:** Chronic Labs logo in header (consistent across all pages)

### **Typography**
- **Headlines:** Same font as landing pages (bold, modern)
- **Body:** Readable font for long-form (18px line-height 1.6)
- **Code blocks:** Monospace for any technical content

### **Components to Reuse**
- Header/Footer from Layout.tsx
- MatrixButton for CTAs (or link-styled buttons for blog)
- SEO component for all meta tags
- Accordion for FAQ sections

---

## SEO Considerations

### **URL Slugs**
✅ **DO:** `/blog/how-to-improve-timeline-knowledge`
❌ **DON'T:** `/blog/post-123` or `/blog/2026/02/19/how-to...`

**Rules:**
- Lowercase only
- Hyphens (not underscores)
- Include target keyword
- No dates in URL (allows evergreen updates)

### **Title Tag Format**
```
[H1 Headline] | Chronic Labs Blog
```
Example: `How to Improve Your Timeline Knowledge | Chronic Labs Blog`

### **Meta Description**
```
[150-160 chars with keyword + CTA]
```
Example: `Master timeline knowledge with these 7 proven strategies. Learn deductive reasoning, pattern recognition, and historical context. Try Defrag free.`

### **Internal Linking Anchors**
Vary anchor text (don't always use exact keyword):
- "chronology game" (exact match)
- "timeline sorting puzzles" (semantic)
- "daily challenge games" (related)
- "Defrag" (branded)

---

## Content Calendar (First Month)

### **Week 1:**
- `/blog/how-to-play-chronology-games` (tutorial)
- Internal linking: → /chronology-game, /timeline-game

### **Week 2:**
- `/blog/best-daily-puzzle-games-2026` (listicle)
- Internal linking: → /games-like-wordle, /defrag

### **Week 3:**
- `/blog/wordle-to-defrag-daily-puzzle-habit` (lifestyle)
- Internal linking: → /games-like-wordle, /chronology-game

### **Week 4:**
- `/blog/chronology-game-strategy-tips` (advanced guide)
- Internal linking: → /chronology-game, /timeline-game

**Frequency:** 1 post/week = 52 posts/year

---

## Analytics & Tracking

### **Blog-Specific Metrics**
- Time on page (target: 3:00+)
- Scroll depth (target: 75%+)
- Click-through to landing pages (target: 10%+)
- Click-through to App Store (target: 5%+)

### **GA4 Events**
```javascript
// Blog post view
gtag('event', 'blog_view', {
  post_title: 'How to Improve Timeline Knowledge',
  post_category: 'how-to'
});

// Internal link click
gtag('event', 'internal_link_click', {
  link_text: 'chronology game',
  link_url: '/chronology-game'
});

// CTA click
gtag('event', 'app_store_click', {
  source_page: '/blog/how-to-play-chronology-games',
  cta_location: 'inline'
});
```

---

## Next Steps

1. ✅ Add GA4 tracking code to Layout
2. ✅ Create Blog index page (/blog)
3. ✅ Create BlogPost component template
4. ✅ Write 2-3 initial blog posts
5. ✅ Add internal linking component to landing pages
6. ✅ Update sitemap.xml
7. ✅ Update navigation (header/footer)

