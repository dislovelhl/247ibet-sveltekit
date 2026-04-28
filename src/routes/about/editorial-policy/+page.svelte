<script lang="ts">
  // Permanent redirect to /editorial-policy
  import { redirect } from '@sveltejs/kit';
  throw redirect(308, '/editorial-policy');
</script>
