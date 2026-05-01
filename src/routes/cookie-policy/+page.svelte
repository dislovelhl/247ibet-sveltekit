<script lang="ts">
  import { SITE } from '$lib/site';
  import PolicyLayout from '$lib/components/PolicyLayout.svelte';

  const LAST_REVIEWED = '2026-04-08';
  
  const sections = [
    { id: 'what-are-cookies', title: '1. What Are Cookies' },
    { id: 'cookies-we-use', title: '2. Cookies We Use' },
    { id: 'third-party', title: '3. Third-Party Cookies' },
    { id: 'managing', title: '4. Managing Cookies' },
    { id: 'rights', title: '5. Your Rights' },
    { id: 'updates', title: '6. Updates' },
  ];
</script>

<PolicyLayout
  title="Cookie Policy"
  subtitle="Transparent disclosure of the tracking technologies used on {SITE.name} to enhance your experience."
  lastUpdated={LAST_REVIEWED}
  path="/cookie-policy"
  description="Transparent disclosure of the tracking technologies used on {SITE.name}. Understand what cookies we use and how to manage them."
  {sections}
>
  <h2 id="what-are-cookies">1. What Are Cookies</h2>
  <p>
    Cookies are small text files stored on your device when you visit a website. They help us
    keep the site functional, remember preferences, measure performance, and support audience
    and attribution analysis.
  </p>

  <h2 id="cookies-we-use">2. Cookies We Use</h2>
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

  <h2 id="third-party">3. Third-Party Cookies</h2>
  <p>Depending on configuration, we may use:</p>
  <ul>
    <li>Google Analytics or similar analytics tooling for aggregate usage reporting</li>
    <li>Vercel Analytics or equivalent platform telemetry where enabled</li>
    <li>Stack Auth session cookies for login and access control</li>
    <li>WordPress or CMS delivery cookies where the publishing layer requires them</li>
    <li>Affiliate network cookies or pixels for sponsored-link attribution</li>
  </ul>

  <h2 id="managing">4. Managing Your Cookies</h2>
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

  <h2 id="rights">5. Your Rights and Choices</h2>
  <p>
    Under PIPEDA and related laws, you can request information about our cookie practices or opt
    out of non-essential tracking. Contact
    <a href="mailto:privacy@247ibet.ca">privacy@247ibet.ca</a>
    if you want help with a request.
  </p>

  <h2 id="updates">6. Updates to This Policy</h2>
  <p>
    We review this Cookie Policy regularly. If we change the way cookies are used or introduce a
    new third-party provider, we will update this page and the review date.
  </p>
</PolicyLayout>

