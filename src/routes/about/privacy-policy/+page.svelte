<script lang="ts">
  // Permanent redirect to /privacy-policy
  import { redirect } from '@sveltejs/kit';
  throw redirect(308, '/privacy-policy');
</script>
