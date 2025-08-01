<script setup>
import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
  <div id="app">
    <nav class="nav">
      <div class="nav-content">
        <!-- <RouterLink to="/about">Ehe</RouterLink> -->
        <RouterLink to="/languages">Languages</RouterLink>
      </div>
    </nav>

    <main class="main-content">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
/* Make navbar fixed at the top */
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #222;
  padding: 0.75rem 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

/* Nav link container */
.nav-content {
  display: flex;
  gap: 2rem;
  align-items: center;
}

/* Nav links */
.nav a {
  color: #fff;
  font-weight: 500;
  font-size: 1.1rem;
  text-decoration: none;
  transition: color 0.2s;
}

.nav a.router-link-exact-active {
  text-decoration: underline;
  color: #42b983;
}

/* Push main content down so it doesn't hide behind fixed nav */
.main-content {
  margin-top: 80px; /* match nav height */
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
</style>
