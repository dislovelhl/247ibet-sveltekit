<script lang="ts">
  import { canonicalUrl } from '$lib/site';
  import JsonLd from '$lib/components/JsonLd.svelte';
  // page
</script>

<svelte:head>
  <title>Cookie Policy: How 247iBET Uses Cookies</title>
  <meta
    name="description"
    content="Learn how 247iBET uses cookies and tracking technologies to improve your browsing experience. Manage your cookie preferences for Canadian iGaming content."
  />
  <meta property="og:title" content="Cookie Policy: How 247iBET Uses Cookies" />
  <meta
    property="og:description"
    content="How 247iBET uses cookies and tracking technologies across our Canadian iGaming platform."
  />
  <meta name="twitter:title" content="Cookie Policy: How 247iBET Uses Cookies" />
  <meta
    name="twitter:description"
    content="How 247iBET uses cookies on our Canadian iGaming platform."
  />
  <link rel="canonical" href={canonicalUrl('/cookie-policy')} />
  <JsonLd
    schema={[
      {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Cookie Policy',
        description: 'How cookies are used to operate and improve the 247iBET website.',
        url: 'https://247ibet.ca/cookie-policy',
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://247ibet.ca' },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Cookie Policy',
            item: 'https://247ibet.ca/cookie-policy',
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
      <li class="text-white font-medium">Cookie Policy</li>
    </ol>
  </nav>

  <article class="navy-card rounded-3xl p-8 md:p-12">
    <header class="mb-12 border-b border-white/10 pb-8">
      <h1 class="text-4xl md:text-5xl font-black tracking-tight uppercase mb-4">
        Cookie <span class="text-slate-blue">Policy</span>
      </h1>
      <p class="text-sm text-text-tertiary">Last reviewed: 2026-04-08</p>
    </header>

    <div class="prose prose-invert max-w-none">
      <h2>1. What Are Cookies</h2>
      <p>
        Cookies are small text files stored on your device when you visit a website. They help us
        keep the site functional, remember preferences, measure performance, and support audience
        and attribution analysis.
      </p>

      <h2>2. Cookies We Use</h2>
      <h3>Essential Cookies</h3>
      <p>
        Necessary for site functionality, security, navigation, authentication via Stack Auth, and
        age-gate or consent states. These cookies cannot be disabled without affecting core
        functionality.
      </p>

      <h3>Analytics Cookies</h3>
      <p>
        Help us understand how visitors use the site, including pages viewed, time on page, and
        engagement patterns. We use this data to improve editorial relevance and site performance.
      </p>

      <h3>Preference Cookies</h3>
      <p>
        Remember choices such as province preference, display settings, and saved interactions so
        the site feels consistent on subsequent visits.
      </p>

      <h3>Marketing/Tracking Cookies</h3>
      <p>
        Used for affiliate conversion tracking and to measure content effectiveness. Where consent
        is required, we only enable these cookies after approval.
      </p>

      <h2>3. Third-Party Cookies</h2>
      <p>Depending on configuration, we may use:</p>
      <ul>
        <li>Google Analytics or similar analytics tooling for aggregate usage reporting</li>
        <li>Vercel Analytics or equivalent platform telemetry where enabled</li>
        <li>Stack Auth session cookies for login and access control</li>
        <li>WordPress or CMS delivery cookies where the publishing layer requires them</li>
        <li>Affiliate network cookies or pixels for sponsored-link attribution</li>
      </ul>

      <h2>4. Managing Your Cookies</h2>
      <p>You can control cookies through your browser settings. Most browsers allow you to:</p>
      <ul>
        <li>Block all or specific cookies</li>
        <li>Delete cookies already stored</li>
        <li>Receive notifications when a cookie is set</li>
      </ul>
      <p>
        Disabling essential cookies may affect login, age-gate flow, or province-specific
        presentation.
      </p>

      <h2>5. Your Rights and Choices</h2>
      <p>
        Under PIPEDA and related laws, you can request information about our cookie practices or opt
        out of non-essential tracking. Contact
        <a href="mailto:privacy@247ibet.ca" class="text-slate-blue hover:underline"
          >privacy@247ibet.ca</a
        >
        if you want help with a request.
      </p>

      <h2>6. Updates to This Policy</h2>
      <p>
        We review this Cookie Policy regularly. If we change the way cookies are used or introduce a
        new third-party provider, we will update this page and the review date.
      </p>

      <p class="text-xs text-text-tertiary mt-12">
        This policy is part of our commitment to transparent data practices. See our full
        <a href="/privacy-policy" class="text-slate-blue hover:underline">Privacy Policy</a>
        and
        <a href="/terms-of-service" class="text-slate-blue hover:underline">Terms of Service</a>
        for additional context.
      </p>
    </div>
  </article>

  <section class="sr-only" aria-label="Related policy resources">
    <h2>Related Resources</h2>
    <ul>
      <li><a href="/privacy-policy">Privacy Policy</a></li>
      <li><a href="/terms-of-service">Terms of Service</a></li>
      <li><a href="/contact">Contact and Support</a></li>
      <li><a href="/responsible-gambling">Responsible Gambling Support</a></li>
    </ul>
  </section>
</div>
