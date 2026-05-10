<template>
  <div class="kyc-container">
    <h2>KYC Verification</h2>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <div v-else>
      <p>Welcome to the KYC flow.</p>
      <form @submit.prevent="submitForm">
        <div>
          <label>Document ID:</label>
          <input type="text" v-model="documentId" required />
        </div>
        <button type="submit">Verify</button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const loading = ref(false);
const error = ref('');
const documentId = ref('');

const submitForm = async () => {
  loading.value = true;
  error.value = '';
  try {
    // Simulated API call using typed API client (to be implemented)
    await new Promise(resolve => setTimeout(resolve, 1000));
    alert('KYC Verified successfully!');
  } catch (err: any) {
    error.value = err.message || 'Verification failed';
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
.kyc-container {
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 8px;
}
.error {
  color: red;
}
</style>
