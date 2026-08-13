<template>
  <div class="min-h-screen flex flex-col bg-[#070A13] text-slate-100 font-sans selection:bg-brand-500 selection:text-white">
    <Navbar />
    <main class="flex-1">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from '~/components/Navbar.vue';
import Footer from '~/components/Footer.vue';
</script>
