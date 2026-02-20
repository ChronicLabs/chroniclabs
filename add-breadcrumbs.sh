#!/bin/bash
# Quick script to add breadcrumbs to chroniclabs.co pages
# Run from: /data/.openclaw/workspace/chroniclabs/

echo "📍 Adding breadcrumbs to chroniclabs.co pages..."

# Function to add breadcrumb to a file if not already present
add_breadcrumb() {
  local file=$1
  local page_name=$2
  
  if grep -q "breadcrumbs={" "$file"; then
    echo "⏭️  Skipping $file (breadcrumbs already exist)"
    return
  fi
  
  echo "✅ Adding breadcrumbs to $file"
  
  # Add breadcrumbs prop to SEO component
  # This is a simple find/replace - adjust the pattern if needed
  sed -i.bak "s|schema={|breadcrumbs={[\n    { name: \"Home\", item: \"https://chroniclabs.co/\" },\n    { name: \"$page_name\" }\n  ]}\n  schema={|" "$file"
}

# Add breadcrumbs to each page
add_breadcrumb "client/src/pages/ChronologyGame.tsx" "Chronology Game"
add_breadcrumb "client/src/pages/GamesLikeWordle.tsx" "Games Like Wordle"
add_breadcrumb "client/src/pages/TimelineGame.tsx" "Timeline Game"
add_breadcrumb "client/src/pages/HistoryTriviaGame.tsx" "History Trivia Game"
add_breadcrumb "client/src/pages/Defrag.tsx" "Defrag"
add_breadcrumb "client/src/pages/Grade.tsx" "Grade"

echo ""
echo "✅ Done! Breadcrumbs added to 6 pages."
echo ""
echo "⚠️  IMPORTANT: Review the changes before committing!"
echo "    - Check client/src/pages/*.tsx"
echo "    - Original files backed up as *.tsx.bak"
echo "    - Test locally before deploying"
echo ""
echo "Next steps:"
echo "1. cd /data/.openclaw/workspace/chroniclabs"
echo "2. npm run dev"
echo "3. Test pages at localhost:5000"
echo "4. Verify schema with Google Rich Results Tool"
echo "5. git add . && git commit -m 'Add breadcrumb schema to all pages'"
