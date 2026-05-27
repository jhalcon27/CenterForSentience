#!/bin/bash
# One-shot link audit: find all hardcoded href="/..." in src/, check if page exists in dist/
cd /Users/Shared/GitHub/CenterForSentience

echo "=== LINK AUDIT ==="
grep -rEoh 'href="(/[^"#?]*)"' src/ 2>/dev/null \
  | sed 's/href="//;s/"$//' \
  | grep -v '^//' \
  | sort -u \
  | while read path; do
      # Normalize: strip trailing slash for dir check
      clean="${path%/}"
      # Check dist
      if [ -d "dist${clean}" ] || [ -f "dist${clean}.html" ] || [ -f "dist${clean}/index.html" ]; then
        echo "OK   $path"
      else
        echo "404  $path"
      fi
    done
