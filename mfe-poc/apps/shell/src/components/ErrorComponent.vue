<template>
  <div class="error-container">
    <h3>Service Unavailable</h3>
    <p>We're having trouble loading this section.</p>
    <button @click="retry">Retry</button>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['retry']);
const retry = () => {
  // In a real app we might emit a retry event or reload the page/module
  window.location.reload();
};
</script>

<style scoped>
.error-container {
  padding: 2rem;
  border: 1px solid #ffcccc;
  background-color: #fff0f0;
  border-radius: 8px;
  text-align: center;
}
</style>
