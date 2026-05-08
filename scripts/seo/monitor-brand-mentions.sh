#!/usr/bin/env bash
# Monitor unlinked brand mentions for 247iBET
# Usage: ./scripts/seo/monitor-brand-mentions.sh

BRAND="247iBET"
DOMAIN="247ibet.ca"
echo "=== 247iBET Brand Mention Monitor ==="
echo ""
echo "Search: \"$BRAND\" -site:$DOMAIN -site:facebook.com -site:x.com -site:instagram.com -site:tiktok.com -site:reddit.com -site:linkedin.com"
echo ""
echo "Recommended tools:"
echo "  - Semrush Brand Monitoring"
echo "  - Google Alerts for \"$BRAND\""
echo "  - Ahrefs Content Explorer"
echo ""
echo "Search URL:"
echo "https://www.google.com/search?q=%22$BRAND%22+-site%3A$DOMAIN"
