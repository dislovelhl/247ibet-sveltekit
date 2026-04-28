<script lang="ts">
  // Permanent redirect to /contact
  import { redirect } from '@sveltejs/kit';
  throw redirect(308, '/contact');
</script>
