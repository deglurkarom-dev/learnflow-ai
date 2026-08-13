<template>
  <div class="py-16 bg-[#070A13]">
    <div class="max-w-2xl mx-auto px-4 sm:px-6 space-y-8">
      <div class="text-center space-y-2">
        <span class="text-xs font-semibold uppercase tracking-wider text-brand-400">Get in Touch</span>
        <h1 class="font-display text-3xl font-extrabold text-white">Contact LearnFlow Engineering</h1>
        <p class="text-slate-400 text-sm">Have questions about our Nuxt 3 architecture, AI integrations, or Prismic CMS workflow?</p>
      </div>

      <form class="glass-panel p-8 rounded-3xl border border-slate-800 space-y-5" @submit.prevent="handleSubmit">
        <div v-if="submitted" class="p-4 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs rounded-xl text-center font-semibold">
          ✓ Message sent successfully! Our engineering squad will respond within 24 hours.
        </div>

        <div>
          <label class="block text-xs font-semibold text-slate-300 mb-1">Your Name</label>
          <input
            v-model="form.name"
            required
            type="text"
            placeholder="Alex Morgan"
            class="w-full px-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-brand-500"
          />
        </div>

        <div>
          <label class="block text-xs font-semibold text-slate-300 mb-1">Work Email</label>
          <input
            v-model="form.email"
            required
            type="email"
            placeholder="alex@company.com"
            class="w-full px-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-brand-500"
          />
        </div>

        <div>
          <label class="block text-xs font-semibold text-slate-300 mb-1">Message / Inquiry</label>
          <textarea
            v-model="form.message"
            required
            rows="4"
            placeholder="How can LearnFlow AI help your team?"
            class="w-full px-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-brand-500"
          ></textarea>
        </div>

        <BaseButton type="submit" variant="primary" size="md" full-width>
          Send Inquiry
        </BaseButton>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useSEO } from '~/composables/useSEO';
import BaseButton from '~/components/ui/BaseButton.vue';

const form = ref({ name: '', email: '', message: '' });
const submitted = ref(false);

function handleSubmit() {
  submitted.value = true;
  form.value = { name: '', email: '', message: '' };
}

useSEO({
  title: 'Contact LearnFlow Engineering Squad',
  description: 'Reach out to the LearnFlow AI engineering team for enterprise inquiries or architecture consultations.'
});
</script>
