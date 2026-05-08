<script lang="ts">
  import { SITE } from '$lib/site';
  import JsonLd from '$lib/components/JsonLd.svelte';
  import PolicyLayout from '$lib/components/PolicyLayout.svelte';

  const LAST_REVIEWED = '2026-04-08';
  
  const sections = [
    { id: 'introduction', title: '1. Introduction' },
    { id: 'collection', title: '2. Information We Collect' },
    { id: 'usage', title: '3. How We Use Information' },
    { id: 'legal-basis', title: '4. Legal Basis and Consent' },
    { id: 'sharing', title: '5. Sharing and Disclosure' },
    { id: 'cookies', title: '6. Cookies' },
    { id: 'retention', title: '7. Data Retention' },
    { id: 'security', title: '8. Security' },
    { id: 'international', title: '9. International Processing' },
    { id: 'rights', title: '10. Your Rights' },
    { id: 'children', title: '11. Children\'s Privacy' },
    { id: 'changes', title: '12. Changes to This Policy' },
  ];
</script>

<svelte:head>
  <JsonLd
    schema={{
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Privacy Policy',
      description: 'Understand how 247iBET handles your personal data. Our privacy practices comply with PIPEDA and other Canadian privacy laws.',
      url: 'https://247ibet.ca/privacy-policy',
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
        { '@type': 'ListItem', position: 2, name: 'Privacy Policy', item: 'https://247ibet.ca/privacy-policy' },
      ],
    }}
  />
</svelte:head>

<PolicyLayout
  title="Privacy Policy"
  subtitle="How {SITE.name} collects, processes, and protects your personal data in accordance with Canadian privacy legislation."
  lastUpdated={LAST_REVIEWED}
  path="/privacy-policy"
  description="Understand how {SITE.name} handles your personal data. Our privacy practices comply with PIPEDA and other Canadian privacy laws."
  {sections}
>
  <h2 id="introduction">1. Introduction</h2>
  <p>
    {SITE.name} ("we", "our", "us") respects your privacy and is committed to handling personal
    information in accordance with the Personal Information Protection and Electronic Documents
    Act (PIPEDA) and other applicable Canadian privacy laws. This policy explains what we
    collect, why we collect it, how we share it, and the choices available to you when you use
    {SITE.url.replace('https://', '')} or related discovery pages.
  </p>

  <h2 id="collection">2. Information We Collect</h2>
  <p>Depending on how you use the site, we may collect:</p>
  <ul>
    <li>Contact information you submit through forms or support requests</li>
    <li>Account or authentication data when you use Stack Auth</li>
    <li>
      Usage data such as IP address, browser type, device type, referring page, and pages viewed
    </li>
    <li>Approximate province or region for jurisdiction-aware content delivery</li>
    <li>Cookie and consent preferences</li>
    <li>Interaction data for affiliate and content performance measurement</li>
  </ul>

  <h2 id="usage">3. How We Use Information</h2>
  <p>We use information to:</p>
  <ul>
    <li>Operate, secure, and improve the site</li>
    <li>Deliver province-aware editorial and comparison content</li>
    <li>Respond to support requests and user inquiries</li>
    <li>Measure page performance, engagement, and conversion paths</li>
    <li>Maintain compliance records and respond to lawful requests</li>
    <li>Detect abuse, fraud, or unauthorized access attempts</li>
  </ul>

  <h2 id="legal-basis">4. Legal Basis and Consent</h2>
  <p>
    Where required, we rely on consent, legitimate interests, contractual necessity, or legal
    obligations to process personal data. You may withdraw consent for non-essential tracking at
    any time through your browser settings or applicable consent controls.
  </p>

  <h2 id="sharing">5. Sharing and Disclosure</h2>
  <p>We do not sell personal information. We may share data with:</p>
  <ul>
    <li>Hosting, analytics, authentication, and content infrastructure providers</li>
    <li>WordPress and related publishing services used to serve editorial content</li>
    <li>Affiliate and attribution partners where a user clicks an outbound sponsored link</li>
    <li>Authorities, regulators, or law enforcement when disclosure is required by law</li>
  </ul>

  <h2 id="cookies">6. Cookies and Similar Technologies</h2>
  <p>
    We use essential, preference, analytics, and attribution technologies. See our
    <a href="/cookie-policy">Cookie Policy</a>
    for a more detailed explanation of what is used and how you can manage it.
  </p>

  <h2 id="retention">7. Data Retention</h2>
  <p>
    We keep personal data only as long as necessary for the purposes described in this policy,
    unless a longer retention period is required for compliance, dispute resolution, or
    security. Analytics data is retained on a limited schedule and reviewed periodically.
  </p>

  <h2 id="security">8. Security</h2>
  <p>
    We use administrative, technical, and organizational safeguards designed to protect
    information against unauthorized access, disclosure, alteration, or destruction. No online
    system is perfectly secure, so we cannot guarantee absolute protection.
  </p>

  <h2 id="international">9. International Processing</h2>
  <p>
    Some service providers may process data in Canada, the United States, or other
    jurisdictions. Where needed, we use contractual and operational safeguards intended to
    protect information during those transfers.
  </p>

  <h2 id="rights">10. Your Rights</h2>
  <p>You may have the right to:</p>
  <ul>
    <li>Request access to personal information we hold about you</li>
    <li>Request corrections to inaccurate or incomplete data</li>
    <li>Withdraw consent for non-essential processing</li>
    <li>Request deletion where legally permitted</li>
    <li>Raise a privacy concern with the Office of the Privacy Commissioner of Canada</li>
  </ul>
  <p>
    To exercise these rights, contact us at
    <a href="mailto:privacy@247ibet.ca">privacy@247ibet.ca</a>.
  </p>

  <h2 id="children">11. Children's Privacy</h2>
  <p>
    Our content is intended for adults only. We do not knowingly collect personal information
    from children.
  </p>

  <h2 id="changes">12. Changes to This Policy</h2>
  <p>
    We may revise this Privacy Policy from time to time. When we make material changes, we will
    update the review date on this page. Continued use of the site after an update means you
    accept the revised policy.
  </p>
</PolicyLayout>

