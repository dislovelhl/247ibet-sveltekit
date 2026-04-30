<script lang="ts">
  import { canonicalUrl } from '$lib/site';
  import JsonLd from '$lib/components/JsonLd.svelte';
  // page
</script>

<svelte:head>
  <title>Terms of Service: Usage Agreement for 247iBET Canada</title>
  <meta
    name="description"
    content="Review the Terms of Service for 247iBET. Covers acceptable use, intellectual property, limitations of liability, and dispute resolution for Canadian users."
  />
  <meta property="og:title" content="Terms of Service: Usage Agreement for 247iBET Canada" />
  <meta
    property="og:description"
    content="Usage agreement and terms for the 247iBET Canadian iGaming platform."
  />
  <meta name="twitter:title" content="Terms of Service: Usage Agreement for 247iBET Canada" />
  <meta name="twitter:description" content="Usage terms and conditions for 247iBET." />
  <link rel="canonical" href={canonicalUrl('/terms-of-service')} />
  <JsonLd
    schema={[
      {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Terms of Service',
        description: 'Terms and conditions for using 247iBET guides and services.',
        url: 'https://247ibet.ca/terms-of-service',
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://247ibet.ca' },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Terms of Service',
            item: 'https://247ibet.ca/terms-of-service',
          },
        ],
      },
    ]}
  />
</svelte:head>

<div class="container mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20 z-10 max-w-4xl">
  <nav aria-label="Breadcrumb" class="mb-6">
    <ol class="flex items-center gap-2 text-xs text-text-tertiary">
      <li><a href="/" class="hover:text-white">Home</a></li>
      <li class="text-text-tertiary">/</li>
      <li class="text-white font-medium">Terms of Service</li>
    </ol>
  </nav>

  <article class="navy-card rounded-3xl p-8 md:p-12">
    <header class="mb-12 border-b border-white/10 pb-8">
      <h1 class="page-hero-title mb-4">
        Terms of <span class="text-slate-blue">Service</span>
      </h1>
      <p class="text-sm text-text-tertiary">Last reviewed: 2026-04-08</p>
    </header>

    <div class="prose prose-invert max-w-none">
      <p>
        Please review these Terms of Service carefully before using 247iBET.ca. By accessing or
        using the site, you agree to these terms, our Privacy Policy, our Cookie Policy, and any
        additional notices posted on the site.
      </p>

      <h2>1. Acceptance of Terms</h2>
      <p>
        These terms govern your access to informational content, tools, and utility pages on
        247iBET.ca. If you do not agree, you must stop using the site.
      </p>

      <h2>2. Eligibility</h2>
      <p>
        The site is intended for adults only. You must be at least 19 years old, or the legal
        gambling age in your province if lower, to use the content responsibly and lawfully. You are
        responsible for complying with the laws that apply where you live.
      </p>

      <h2>3. Informational Use Only</h2>
      <p>
        247iBET publishes editorial, educational, and comparison content. We are not a gambling
        operator, sportsbook, or casino, and we do not accept bets, wagers, or deposits. Any
        operator links or reviews are provided for informational and affiliate-disclosure purposes
        only.
      </p>

      <h2>4. Intellectual Property</h2>
      <p>
        All original text, design, logos, page layouts, branding, and site structure are owned by
        247iBET or its licensors. You may not copy, scrape, republish, or commercially exploit our
        content without prior written permission, except where fair dealing or other legal rights
        apply.
      </p>

      <h2>5. User Conduct</h2>
      <p>
        You agree not to misuse the site, attempt unauthorized access, interfere with security
        controls, submit harmful code, or use automated systems to overload our services. You also
        agree not to misrepresent your identity or location.
      </p>

      <h2>6. Third-Party Links</h2>
      <p>
        Our pages may link to third-party operators, regulators, payment providers, or reference
        sources. Those sites are governed by their own terms and policies. We are not responsible
        for their availability, content, or practices.
      </p>

      <h2>7. Bonus and Promotional Terms</h2>
      <p>
        Where a page references bonuses or offers, any applicable eligibility, wagering, expiry, and
        withdrawal restrictions are governed by the specific offer terms. For additional detail, see
        our
        <a href="/bonus-terms" class="text-slate-blue hover:underline"
          >Bonus Terms of Use and Rules</a
        >.
      </p>

      <h2>8. Disclaimers</h2>
      <p>
        The site is provided on an "as is" and "as available" basis. We do not guarantee that
        content will always be complete, uninterrupted, or error-free, and we do not promise any
        gambling outcome, payout speed, or operator approval.
      </p>

      <h2>9. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, 247iBET and its contributors will not be liable for
        indirect, incidental, consequential, special, or punitive damages arising from your use of
        the site or reliance on its content.
      </p>

      <h2>10. Indemnification</h2>
      <p>
        You agree to defend and indemnify 247iBET against claims arising from your misuse of the
        site, breach of these terms, or violation of law or third-party rights.
      </p>

      <h2>11. Termination</h2>
      <p>
        We may suspend or restrict access to the site, in whole or in part, if we believe the site
        is being misused, if security is at risk, or if legal/compliance concerns require action.
      </p>

      <h2>12. Governing Law</h2>
      <p>
        These terms are governed by the laws of Ontario and the federal laws of Canada applicable in
        Ontario, without regard to conflict-of-law rules.
      </p>

      <h2>13. Changes to These Terms</h2>
      <p>
        We may update these terms from time to time. Material changes will be reflected on this page
        with a new review date. Continued use of the site after changes means you accept the updated
        terms.
      </p>

      <h2>14. Contact</h2>
      <p>
        If you have questions about these terms, contact us through our
        <a href="/contact" class="text-slate-blue hover:underline">Contact and Support page</a>
        or review our
        <a href="/privacy-policy" class="text-slate-blue hover:underline">Privacy Policy</a>
        for data-specific questions.
      </p>
    </div>
  </article>

  <section class="sr-only" aria-label="Related legal resources">
    <h2>Related Resources</h2>
    <ul>
      <li><a href="/privacy-policy">Privacy Policy</a></li>
      <li><a href="/cookie-policy">Cookie Policy</a></li>
      <li><a href="/contact">Contact and Support</a></li>
      <li><a href="/responsible-gambling">Responsible Gambling Support</a></li>
    </ul>
  </section>
</div>
