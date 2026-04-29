<script lang="ts">
  import { canonicalUrl } from '$lib/site';
  import JsonLd from '$lib/components/JsonLd.svelte';
  // page
import AuthorByline from '$lib/components/AuthorByline.svelte';

const LAST_UPDATED = '2026-04-29';
</script>

<svelte:head>
  <title>Contact 247iBET: Editorial &amp; Partnership Inquiries | 2026</title>
  <meta
    name="description"
    content="Contact the 247iBET editorial team for press inquiries, partnerships, or questions about our independent Canadian iGaming guides."
  />
  <link rel="canonical" href={canonicalUrl('/contact')} />
  <JsonLd
    schema={[
      {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: 'Contact 247iBET Editorial & Partnerships',
        description:
          'Contact the 247iBET editorial team for press inquiries, partnerships, or questions about our independent Canadian iGaming guides.',
        url: 'https://247ibet.ca/contact',
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://247ibet.ca' },
          { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://247ibet.ca/contact' },
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
      <li class="text-white font-medium">Contact Us</li>
    </ol>
  </nav>

  <article class="navy-card rounded-3xl p-8 md:p-12">
    <header class="mb-12 border-b border-white/10 pb-8">
      <h1 class="text-4xl md:text-5xl font-black tracking-tight uppercase mb-4">
        Contact <span class="text-slate-blue">Us</span>
      </h1>
      <p class="text-gray-400 font-sans">
        Get in touch with the 247iBET editorial and partnerships team.
      </p>
    </header>

    <div
      class="prose prose-invert max-w-none prose-headings:text-white prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-10 prose-h2:mb-6 prose-h3:text-xl prose-h3:text-slate-blue prose-p:text-gray-300 prose-li:text-gray-300 prose-strong:text-prestige-gold marker:text-slate-blue"
    >
      <div class="bg-slate-blue/10 border-l-4 border-slate-blue p-4 mb-8 rounded-r-lg">
        <p class="m-0 font-medium text-white">
          <strong>Important Notice:</strong> 247iBET is an independent publisher and comparison service,
          not a gambling operator. We do not accept wagers, hold player funds, or manage casino accounts.
          If you have an issue with a specific operator, deposit, or withdrawal, please contact that operator
          directly.
        </p>
      </div>

      <h2>Editorial Inquiries</h2>
      <p>
        Our team is dedicated to providing accurate, up-to-date, and independent information on the
        regulated Canadian iGaming market. If you spot an error, have a question about our
        methodology, or wish to suggest a correction regarding our regulatory coverage (AGCO, AGLC,
        etc.), please reach out to our editorial desk.
      </p>
      <p>
        Email: <a href="mailto:editorial@247ibet.ca" class="text-slate-blue hover:underline"
          >editorial@247ibet.ca</a
        >
      </p>

      <h2>Partnerships &amp; Commercial</h2>
      <p>
        For operators licensed in Ontario (AGCO/iGO) or other regulated Canadian jurisdictions
        looking to discuss listing, compliance verification, or commercial partnerships, please
        contact our commercial team. We only work with fully licensed and regulated entities.
      </p>
      <p>
        Email: <a href="mailto:partners@247ibet.ca" class="text-slate-blue hover:underline"
          >partners@247ibet.ca</a
        >
      </p>

      <h2>Press &amp; Media</h2>
      <p>
        Our analysts regularly monitor the evolving Canadian sports betting and casino landscape.
        For quotes, data requests, or expert commentary on the Alberta launch, Ontario market
        performance, or Canadian iGaming trends, please contact our media desk.
      </p>
      <p>
        Email: <a href="mailto:press@247ibet.ca" class="text-slate-blue hover:underline"
          >press@247ibet.ca</a
        >
      </p>

      <h2>General Questions</h2>
      <p>
        For all other non-support inquiries, you can reach our general inbox. Please allow 24-48
        hours for a response from our team.
      </p>
      <p>
        Email: <a href="mailto:info@247ibet.ca" class="text-slate-blue hover:underline"
          >info@247ibet.ca</a
        >
      </p>

      <h2 class="pt-8 border-t border-white/10 mt-12">Responsible Gambling Help</h2>
      <p>
        If you or someone you know is struggling with problem gambling, there are free, confidential
        resources available across Canada. You do not need to struggle alone.
      </p>
      <ul>
        <li><strong>ConnexOntario:</strong> 1-866-531-2600 (Ontario)</li>
        <li><strong>Alberta Health Services:</strong> 1-866-332-2322 (Alberta)</li>
        <li><strong>Kids Help Phone:</strong> 1-800-668-6868 (Canada-wide)</li>
      </ul>
      <p>
        Visit our <a href="/responsible-gambling" class="text-slate-blue hover:underline"
          >Responsible Gambling</a
        > section for more provincial resources and self-exclusion tools.
      </p>
    </div>
  </article>

  <section class="sr-only" aria-label="Related publisher resources">
    <h2>Related Resources</h2>
    <ul>
      <li><a href="/about">About Us</a></li>
      <li><a href="/editorial-policy">Editorial Standards</a></li>
      <li><a href="/how-we-work">How We Work</a></li>
      <li><a href="/responsible-gambling">Responsible Gambling</a></li>
    </ul>
  </section>

<AuthorByline authorId="editorial" date={LAST_UPDATED} />
</div>
