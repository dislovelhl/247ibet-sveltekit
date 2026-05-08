<script lang="ts">
  import Skeleton from './Skeleton.svelte';
</script>

<div class="glass-thin rounded-3xl p-6 flex flex-col gap-4">
  <Skeleton class="aspect-[4/5] w-full rounded-2xl" />
  <div class="space-y-2">
    <Skeleton class="h-6 w-3/4 rounded-md" />
    <Skeleton class="h-4 w-1/2 rounded-md" />
  </div>
  <Skeleton class="h-8 w-full mt-auto rounded-full" />
</div>
