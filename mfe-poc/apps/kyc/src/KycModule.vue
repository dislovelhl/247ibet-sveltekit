<template>
  <div class="kyc-module">
    <h2>KYC Module</h2>
    <p>This is the KYC remote micro-frontend. It is isolated from the shell but loaded dynamically.</p>
    <button @click="verify">Run Verification</button>
  </div>
</template>

<script setup lang="ts">
const verify = () => {
  alert('Verification process started (simulated)!');
}
</script>

<style scoped>
.kyc-module {
  border: 2px solid #4A9EBF;
  padding: 1rem;
  border-radius: 8px;
}
</style>
