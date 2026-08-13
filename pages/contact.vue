<template>
  <div class="py-14 bg-[#09090B]">
    <div class="max-w-xl mx-auto px-4 sm:px-6 space-y-6">
      <div class="text-center space-y-1.5">
        <span class="text-xs font-semibold uppercase tracking-wider text-brand-400">Get in Touch</span>
        <h1 class="font-display text-2xl sm:text-3xl font-extrabold text-white">Contact LearnFlow Engineering</h1>
        <p class="text-zinc-400 text-xs">Have questions about our Nuxt 3 architecture, AI integrations, or Prismic CMS workflow?</p>
      </div>

      <form class="ui-card p-6 space-y-4" @submit.prevent="handleSubmit">
        <div v-if="submitted" class="p-3 bg-emerald-950/80 border border-emerald-800/60 text-emerald-300 text-xs rounded-lg text-center font-semibold">
          ✓ Message sent successfully! Our engineering squad will respond within 24 hours.
        </div>

        <div>
          <label class="block text-xs font-medium text-zinc-300 mb-1">Your Name</label>
          <input
            v-model="form.name"
            required
            type="text"
            placeholder="Alex Morgan"
            class="ui-input w-full px-3.5 py-2 text-xs"
          />
        </div>

        <div>
          <label class="block text-xs font-medium text-zinc-300 mb-1">Work Email</label>
          <input
            v-model="form.email"
            required
            type="email"
            placeholder="alex@company.com"
            class="ui-input w-full px-3.5 py-2 text-xs"
          />
        </div>

        <div>
          <label class="block text-xs font-medium text-zinc-300 mb-1">Message / Inquiry</label>
          <textarea
            v-model="form.message"
            required
            rows="4"
            placeholder="How can LearnFlow AI help your team?"
            class="ui-input w-full px-3.5 py-2 text-xs"
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
