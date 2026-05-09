import re, os

files = [
  "src/routes/ontario/+page.svelte",
  "src/routes/ontario/online-casino/+page.svelte",
  "src/routes/ontario/sports-betting/+page.svelte",
  "src/routes/alberta/+page.svelte",
  "src/routes/alberta/online-casino/+page.svelte",
  "src/routes/alberta/sports-betting/+page.svelte",
  "src/routes/best-online-casinos-canada/+page.svelte",
  "src/routes/fast-payouts/+page.svelte",
  "src/routes/contact/+page.svelte",
  "src/routes/responsible-gambling/+page.svelte",
  "src/routes/interac/deposit/+page.svelte",
  "src/routes/interac/withdraw/+page.svelte",
  "src/routes/tools/parlay-calculator/+page.svelte",
  "src/routes/guides/+page.svelte",
  "src/routes/guides/blackjack-online-canada/+page.svelte",
  "src/routes/guides/casino-login/+page.svelte",
  "src/routes/guides/casino-payment-methods/+page.svelte",
  "src/routes/guides/crypto-casino-canada/+page.svelte",
  "src/routes/guides/deposit-free-spins/+page.svelte",
  "src/routes/guides/free-casino-games/+page.svelte",
  "src/routes/guides/how-to-choose-online-casino/+page.svelte",
  "src/routes/guides/how-to-withdraw-casino-winnings/+page.svelte",
  "src/routes/guides/jackpot-casino-games/+page.svelte",
  "src/routes/guides/kyc-verification-online-casino/+page.svelte",
  "src/routes/guides/wagering-requirements-explained/+page.svelte",
  "src/routes/guides/alberta-operator-readiness-index/+page.svelte",
]

for f in files:
    with open(f) as fh:
        content = fh.read()
    m = re.search(r'<title>(.+?)</title>', content, re.DOTALL)
    title = m.group(1).strip() if m else "NOT_FOUND"
    m = re.search(r'name="description"\s+content="(.+?)"', content, re.DOTALL)
    desc = m.group(1).strip().replace('\n', ' ').replace('  ', ' ') if m else "NOT_FOUND"
    m = re.search(r"canonicalUrl\('([^']+)'\)", content)
    canon = m.group(1) if m else "NOT_FOUND"
    has_article = 'articleSchema' in content
    has_jsonld = 'JsonLd' in content
    has_canonicalUrl = 'canonicalUrl' in content
    print(f"FILE: {f}")
    print(f"TITLE: {title}")
    print(f"DESC: {desc[:300]}")
    print(f"CANONICAL: {canon}")
    print(f"HAS_ARTICLE: {'YES' if has_article else 'NO'}")
    print(f"HAS_JSONLD: {'YES' if has_jsonld else 'NO'}")
    print(f"HAS_CANONICALURL: {'YES' if has_canonicalUrl else 'NO'}")
    print("---")
