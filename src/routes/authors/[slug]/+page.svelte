<script lang="ts">
  import { canonicalUrl, SITE } from '$lib/site';
  import type { PageData } from './$types';

  let { data }: { data: PageData } = $props();

  const author = $derived(data.author);
  const description = $derived(`${author.name} is ${author.title} at ${SITE.name}. ${author.bio}`);
</script>

<svelte:head>
  <title>{author.name} | {SITE.name} Canada</title>
  <meta name="description" content={description} />
  <link rel="canonical" href={canonicalUrl(`/authors/${author.id}`)} />
</svelte:head>

<div class="container mx-auto px-4 sm:px-6 lg:px-8 pb-20 max-w-4xl">
  <nav aria-label="Breadcrumb" class="mb-6">
    <ol class="flex items-center gap-2 text-xs text-text-tertiary">
      <li><a href="/" class="hover:text-white">Home</a></li>
      <li>/</li>
      <li class="text-white font-medium">{author.name}</li>
    </ol>
  </nav>

  <div class="navy-card rounded-2xl p-8">
    <p class="page-hero-kicker mb-4">Author Profile</p>
    <h1 class="page-hero-title mb-4">{author.name}</h1>
    <p class="mb-6 text-base font-semibold text-prestige-gold">{author.title}</p>
    <p class="text-[#94A3B8] text-base leading-relaxed max-w-3xl">
      {author.bio}
    </p>

    {#if author.credentials.length > 0}
      <section class="mt-8 rounded-xl border border-white/10 bg-white/[0.03] p-6">
        <h2 class="mb-4 text-sm font-black uppercase tracking-widest text-white">Credentials</h2>
        <ul class="space-y-3 text-sm text-text-body">
          {#each author.credentials as credential}
            <li class="flex gap-3">
              <span aria-hidden="true" class="text-prestige-gold">/</span>
              <span>{credential}</span>
            </li>
          {/each}
        </ul>
      </section>
    {/if}

    {#if author.social?.email || author.social?.linkedin || author.social?.x}
      <section class="mt-8 flex flex-wrap gap-3 text-xs font-black uppercase tracking-widest">
        {#if author.social.email}
          <a
            class="rounded-full border border-white/10 px-4 py-2 text-text-tertiary hover:text-white"
            href={`mailto:${author.social.email}`}
          >
            Email
          </a>
        {/if}
        {#if author.social.linkedin}
          <a
            class="rounded-full border border-white/10 px-4 py-2 text-text-tertiary hover:text-white"
            href={author.social.linkedin}
            rel="noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>
        {/if}
        {#if author.social.x}
          <a
            class="rounded-full border border-white/10 px-4 py-2 text-text-tertiary hover:text-white"
            href={`https://x.com/${author.social.x.replace('@', '')}`}
            rel="noreferrer"
            target="_blank"
          >
            X
          </a>
        {/if}
      </section>
    {/if}
  </div>
</div>
