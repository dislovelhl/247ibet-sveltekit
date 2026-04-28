<script lang="ts">
  // Permanent redirect to /terms-of-service
  import { redirect } from '@sveltejs/kit';
  throw redirect(308, '/terms-of-service');
</script>
