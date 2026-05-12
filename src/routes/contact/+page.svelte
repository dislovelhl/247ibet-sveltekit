<!-- regulatory-claim:context: AGCO and iGaming Ontario references describe regulators or third-party operators, not 247iBET's own licensing posture. -->
<script lang="ts">
  import { canonicalUrl } from '$lib/site';
  import { articleSchema } from '$lib/json-ld';
  import JsonLd from '$lib/components/JsonLd.svelte';
  import BackgroundAtmosphere from '$lib/components/BackgroundAtmosphere.svelte';
  import { globalParallax } from '$lib/runes.svelte';
  import { ArrowRight, Mail } from 'lucide-svelte';

</script>

<svelte:head>
  <title>Contact 247iBET: Editorial &amp; Partnership Inquiries | 2026</title>
  <meta
    name="description"
    content="Contact the 247iBET editorial team for press inquiries, partnerships, or questions about our independent Canadian iGaming guides."
  />
  <link rel="canonical" href={canonicalUrl('/contact')} />
  <JsonLd
    schema={articleSchema({
      headline: 'Contact 247iBET: Editorial &amp; Partnership Inquiries | 2026',
      description:
        'Contact the 247iBET editorial team for press inquiries, partnerships, or questions about our independent Canadian iGaming guides.',
      url: canonicalUrl('/contact'),
      datePublished: '2026-04-27',
    })}
  />
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

<div class="min-h-screen bg-navy-black pb-20" role="presentation">
  <div class="mx-auto max-w-[1720px] px-4 sm:px-6 lg:px-10 xl:px-16 ">
    <nav aria-label="Breadcrumb" class="mb-10">
      <ol class="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-text-tertiary">
        <li><a href="/" class="hover:text-white transition-colors">Home</a></li>
        <li aria-hidden="true" class="text-white/20">/</li>
        <li class="text-prestige-gold font-medium">Contact Us</li>
      </ol>
    </nav>

    <header class="material-panel relative mb-12 min-h-[400px] overflow-hidden rounded-[2.5rem] shadow-2xl">
      <BackgroundAtmosphere 
        src="/images/generated/contact-support-hero.webp" 
        parallaxMultiplier={0.4}
      />
      <div class="absolute inset-0 bg-gradient-to-r from-navy-black via-navy-black/80 to-transparent"></div>
      
      <div 
        class="material-panel relative z-10 mx-4 my-8 animate-float-3d rounded-3xl p-8 shadow-[0_32px_120px_-30px_rgba(0,0,0,0.9)] sm:mx-6 sm:my-10 md:p-14 md:max-w-2xl text-left"
        style="transform: translate3d({-globalParallax.x * 0.8}px, {-globalParallax.y * 0.8}px, 0);"
      >
        <div class="mb-5 flex items-center gap-2">
          <div class="rounded-full border border-prestige-gold/20 bg-prestige-gold/10 px-4 py-1.5 shadow-[0_0_15px_rgba(212,148,58,0.15)]">
            <p class="text-xs font-black uppercase tracking-[0.15em] text-prestige-gold">
              Get in Touch
            </p>
          </div>
        </div>

        <h1 class="page-hero-title !tracking-tighter">
          Contact <br />
          <span class="text-prestige-gold drop-shadow-[0_0_30px_rgba(212,148,58,0.4)]">247iBET</span>
        </h1>
        <p class="mt-8 text-lg leading-relaxed text-text-body md:text-xl font-light">
          Reach our editorial and partnership teams for inquiries regarding Canadian iGaming guides and press.
        </p>
      </div>
    </header>

    <div class="grid gap-8 lg:grid-cols-[1fr_400px]">
      <div class="material-panel rounded-3xl p-8 md:p-12">
        <div
          class="prose prose-invert max-w-none prose-headings:text-white prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-10 prose-h2:mb-6 prose-h3:text-xl prose-h3:text-slate-blue prose-p:text-text-body prose-li:text-text-body prose-strong:text-prestige-gold marker:text-slate-blue"
        >
          <div class="bg-slate-blue/10 border-l-4 border-slate-blue p-6 mb-8 rounded-r-2xl">
            <p class="m-0 font-bold text-white uppercase tracking-tight text-sm">
              Important Notice
            </p>
            <p class="mt-2 m-0 text-sm leading-relaxed">
              247iBET is an independent publisher and comparison service, not a gambling operator. We do not accept wagers or manage casino accounts. If you have an issue with a specific operator, please contact them directly.
            </p>
          </div>

          <h2>Editorial Inquiries</h2>
          <p>
            Our team is dedicated to providing accurate, up-to-date, and independent information on the
            regulated Canadian iGaming market. If you spot an error or wish to suggest a correction, please reach out to our editorial desk.
          </p>
          <p>
            Email: <a href="mailto:editorial@247ibet.ca" class="text-prestige-gold hover:underline"
              >editorial@247ibet.ca</a
            >
          </p>

          <h2>Partnerships &amp; Commercial</h2>
          <p>
            For operators licensed in Ontario (AGCO/iGO) or other regulated Canadian jurisdictions
            looking to discuss listing or compliance verification, please contact our commercial team.
          </p>
          <p>
            Email: <a href="mailto:partners@247ibet.ca" class="text-prestige-gold hover:underline"
              >partners@247ibet.ca</a
            >
          </p>

          <h2>Press &amp; Media</h2>
          <p>
            For quotes, data requests, or expert commentary on the Alberta launch, Ontario market
            performance, or Canadian iGaming trends, please contact our media desk.
          </p>
          <p>
            Email: <a href="mailto:press@247ibet.ca" class="text-prestige-gold hover:underline"
              >press@247ibet.ca</a
            >
          </p>

          <h2 class="pt-8 border-t border-white/10 mt-12">Responsible Gambling Help</h2>
          <p>
            If you or someone you know is struggling with problem gambling, there are free, confidential
            resources available across Canada.
          </p>
          <ul class="space-y-2">
            <li><strong>ConnexOntario:</strong> 1-866-531-2600 (Ontario)</li>
            <li><strong>Alberta Health Services:</strong> 1-866-332-2322 (Alberta)</li>
            <li><strong>Kids Help Phone:</strong> 1-800-668-6868 (Canada-wide)</li>
          </ul>
        </div>
      </div>

      <aside class="space-y-6">
        <div class="material-panel p-8 rounded-3xl">
          <h3 class="text-xs font-black uppercase tracking-[0.2em] text-text-tertiary mb-6">Quick Links</h3>
          <div class="space-y-3">
            <a href="/about" class="material-cell flex items-center justify-between p-4 rounded-2xl hover:bg-white/5 transition-all">
              <span class="text-sm font-bold text-white">About 247iBET</span>
              <ArrowRight class="h-4 w-4 text-text-tertiary" />
            </a>
            <a href="/how-we-work" class="material-cell flex items-center justify-between p-4 rounded-2xl hover:bg-white/5 transition-all">
              <span class="text-sm font-bold text-white">How We Work</span>
              <ArrowRight class="h-4 w-4 text-text-tertiary" />
            </a>
            <a href="/responsible-gambling" class="material-cell flex items-center justify-between p-4 rounded-2xl hover:bg-white/5 transition-all">
              <span class="text-sm font-bold text-white">Safe Play Protocols</span>
              <ArrowRight class="h-4 w-4 text-text-tertiary" />
            </a>
          </div>
        </div>

        <div class="material-panel p-8 rounded-3xl bg-prestige-gold/5 border border-prestige-gold/10">
          <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-prestige-gold/10 text-prestige-gold mb-6">
            <Mail class="h-6 w-6" />
          </div>
          <h3 class="text-lg font-bold text-white mb-2">General Inbox</h3>
          <p class="text-sm text-text-body mb-4 leading-relaxed">For all other inquiries, please allow 24-48 hours for a response.</p>
          <a href="mailto:info@247ibet.ca" class="text-prestige-gold font-bold hover:underline text-sm">info@247ibet.ca</a>
        </div>
      </aside>
    </div>
  </div>
</div>
