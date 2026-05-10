<script lang="ts">
  import { SITE } from '$lib/site';
  import JsonLd from '$lib/components/JsonLd.svelte';
  import PolicyLayout from '$lib/components/PolicyLayout.svelte';

  const LAST_REVIEWED = '2026-04-08';
  
  const sections = [
    { id: 'acceptance', title: '1. Acceptance of Terms' },
    { id: 'eligibility', title: '2. Eligibility' },
    { id: 'informational', title: '3. Informational Use Only' },
    { id: 'intellectual-property', title: '4. Intellectual Property' },
    { id: 'conduct', title: '5. User Conduct' },
    { id: 'third-party', title: '6. Third-Party Links' },
    { id: 'bonus-terms', title: '7. Bonus and Promotional Terms' },
    { id: 'disclaimers', title: '8. Disclaimers' },
    { id: 'liability', title: '9. Limitation of Liability' },
    { id: 'indemnification', title: '10. Indemnification' },
    { id: 'termination', title: '11. Termination' },
    { id: 'governing-law', title: '12. Governing Law' },
    { id: 'changes', title: '13. Changes to These Terms' },
    { id: 'contact', title: '14. Contact' },
  ];
</script>

<svelte:head>
  <JsonLd
    schema={{
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Terms of Service',
      description: 'Review the Terms of Service for 247iBET. Covers acceptable use, intellectual property, and dispute resolution for Canadian users.',
      url: 'https://247ibet.ca/terms-of-service',
      datePublished: '2026-05-09',
      dateModified: '2026-05-09',
      publisher: {
        '@type': 'Organization',
        name: '247iBET',
        url: 'https://247ibet.ca',
      },
    }}
  />
  <JsonLd
    schema={{
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://247ibet.ca' },
        { '@type': 'ListItem', position: 2, name: 'Terms of Service', item: 'https://247ibet.ca/terms-of-service' },
      ],
    }}
  />
</svelte:head>

<PolicyLayout
  title="Terms of Service"
  subtitle="Usage agreement and terms for using the {SITE.name} Canadian iGaming platform."
  lastUpdated={LAST_REVIEWED}
  path="/terms-of-service"
  description="Review the Terms of Service for {SITE.name}. Covers acceptable use, intellectual property, and dispute resolution for Canadian users."
  {sections}
>
  <p>
    Please review these Terms of Service carefully before using {SITE.url.replace('https://', '')}. By accessing or
    using the site, you agree to these terms, our <a href="/privacy-policy">Privacy Policy</a>, our <a href="/cookie-policy">Cookie Policy</a>, and any
    additional notices posted on the site.
  </p>

  <h2 id="acceptance">1. Acceptance of Terms</h2>
  <p>
    These terms govern your access to informational content, tools, and utility pages on
    {SITE.url.replace('https://', '')}. If you do not agree, you must stop using the site.
  </p>

  <h2 id="eligibility">2. Eligibility</h2>
  <p>
    The site is intended for adults only. You must be at least 19 years old, or the legal
    gambling age in your province if lower, to use the content responsibly and lawfully. You are
    responsible for complying with the laws that apply where you live.
  </p>

  <h2 id="informational">3. Informational Use Only</h2>
  <p>
    {SITE.name} publishes editorial, educational, and comparison content. We are not a gambling
    operator, sportsbook, or casino, and we do not accept bets, wagers, or deposits. Any
    operator links or reviews are provided for informational and affiliate-disclosure purposes
    only.
  </p>

  <h2 id="intellectual-property">4. Intellectual Property</h2>
  <p>
    All original text, design, logos, page layouts, branding, and site structure are owned by
    {SITE.name} or its licensors. You may not copy, scrape, republish, or commercially exploit our
    content without prior written permission, except where fair dealing or other legal rights
    apply.
  </p>

  <h2 id="conduct">5. User Conduct</h2>
  <p>
    You agree not to misuse the site, attempt unauthorized access, interfere with security
    controls, submit harmful code, or use automated systems to overload our services. You also
    agree not to misrepresent your identity or location.
  </p>

  <h2 id="third-party">6. Third-Party Links</h2>
  <p>
    Our pages may link to third-party operators, regulators, payment providers, or reference
    sources. Those sites are governed by their own terms and policies. We are not responsible
    for their availability, content, or practices.
  </p>

  <h2 id="bonus-terms">7. Bonus and Promotional Terms</h2>
  <p>
    Where a page references bonuses or offers, any applicable eligibility, wagering, expiry, and
    withdrawal restrictions are governed by the specific offer terms. For additional detail, see
    our
    <a href="/bonus-terms">Bonus Terms of Use and Rules</a>.
  </p>

  <h2 id="disclaimers">8. Disclaimers</h2>
  <p>
    The site is provided on an "as is" and "as available" basis. We do not guarantee that
    content will always be complete, uninterrupted, or error-free, and we do not promise any
    gambling outcome, payout speed, or operator approval.
  </p>

  <h2 id="liability">9. Limitation of Liability</h2>
  <p>
    To the maximum extent permitted by law, {SITE.name} and its contributors will not be liable for
    indirect, incidental, consequential, special, or punitive damages arising from your use of
    the site or reliance on its content.
  </p>

  <h2 id="indemnification">10. Indemnification</h2>
  <p>
    You agree to defend and indemnify {SITE.name} against claims arising from your misuse of the
    site, breach of these terms, or violation of law or third-party rights.
  </p>

  <h2 id="termination">11. Termination</h2>
  <p>
    We may suspend or restrict access to the site, in whole or in part, if we believe the site
    is being misused, if security is at risk, or if legal/compliance concerns require action.
  </p>

  <h2 id="governing-law">12. Governing Law</h2>
  <p>
    These terms are governed by the laws of Ontario and the federal laws of Canada applicable in
    Ontario, without regard to conflict-of-law rules.
  </p>

  <h2 id="changes">13. Changes to These Terms</h2>
  <p>
    We may update these terms from time to time. Material changes will be reflected on this page
    with a new review date. Continued use of the site after changes means you accept the updated
    terms.
  </p>

  <h2 id="contact">14. Contact</h2>
  <p>
    If you have questions about these terms, contact us through our
    <a href="/contact">Contact and Support page</a>
    or review our
    <a href="/privacy-policy">Privacy Policy</a>
    for data-specific questions.
  </p>
</PolicyLayout>

