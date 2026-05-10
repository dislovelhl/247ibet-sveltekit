<template>
  <div class="shell-layout">
    <header class="topbar">
      <h1>247iBET Platform</h1>
      <nav>
        <router-link to="/">Dashboard</router-link>
        <router-link to="/kyc">Identity Verification</router-link>
      </nav>
      <div class="user-profile">
        <span>Welcome, User</span>
        <button @click="logout">Logout</button>
      </div>
    </header>
    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
const logout = () => {
  alert('Logging out...');
};
</script>

<style scoped>
.shell-layout {
  font-family: Arial, sans-serif;
  color: #333;
}
.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #070c18;
  color: white;
}
.topbar h1 {
  margin: 0;
  font-size: 1.5rem;
  color: #d4943a;
}
nav {
  display: flex;
  gap: 1rem;
}
nav a {
  color: white;
  text-decoration: none;
}
nav a.router-link-active {
  color: #4a9ebf;
  font-weight: bold;
}
.user-profile {
  display: flex;
  gap: 1rem;
  align-items: center;
}
.user-profile button {
  background: transparent;
  border: 1px solid #d4943a;
  color: #d4943a;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 4px;
}
.content {
  padding: 2rem;
}
</style>
