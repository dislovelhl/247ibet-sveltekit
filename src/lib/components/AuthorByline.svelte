<script lang="ts">
  import { getAuthor, type Author } from '$lib/authors';

  interface Props {
    authorId?: string;
    date?: string;
    reviewedBy?: string;
  }

  let { authorId = 'editorial', date, reviewedBy }: Props = $props();

  let author: Author = $derived(getAuthor(authorId));
</script>

<div class="flex items-center gap-3 border-t border-white/10 pt-4 mt-8">
  <div
    class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-prestige-gold/10 text-xs font-black text-prestige-gold"
  >
    {author.name.charAt(0)}
  </div>
  <div class="text-xs text-text-tertiary">
    <p class="font-black text-text-body">{author.name}</p>
    <p class="mt-0.5">
      {author.title}
      {#if date}
        · Last updated: {date}
      {/if}
      {#if reviewedBy}
        · Reviewed by: {reviewedBy}
      {/if}
    </p>
  </div>
</div>
