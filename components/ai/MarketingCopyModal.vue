<template>
  <BaseModal :is-open="isOpen" title="AI Marketing Copy Generator" @close="$emit('close')">
    <div class="space-y-5">
      <p class="text-xs text-slate-400">
        Generate persona-targeted headlines, email teasers, social media announcements, and landing page bullet points for your marketing squad.
      </p>

      <div class="space-y-4">
        <div>
          <label class="block text-xs font-semibold text-slate-300 mb-1">Product or Course Name</label>
          <input
            v-model="form.product"
            type="text"
            placeholder="e.g. Modern Vue 3 & Nuxt 3 Masterclass"
            class="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-brand-500"
          />
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block text-xs font-semibold text-slate-300 mb-1">Brand Tone</label>
            <select
              v-model="form.tone"
              class="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-brand-500"
            >
              <option value="Professional">Professional</option>
              <option value="High Energy">High Energy</option>
              <option value="Persuasive">Persuasive</option>
              <option value="Casual">Casual</option>
            </select>
          </div>

          <div>
            <label class="block text-xs font-semibold text-slate-300 mb-1">Target Persona</label>
            <input
              v-model="form.audience"
              type="text"
              placeholder="e.g. Senior Frontend Engineers"
              class="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-brand-500"
            />
          </div>
        </div>
      </div>

      <!-- Result View -->
      <div v-if="result" class="mt-6 pt-4 border-t border-slate-800 space-y-4">
        <div class="p-4 bg-slate-950/90 border border-slate-800 rounded-xl space-y-3">
          <div>
            <span class="text-[10px] font-bold uppercase text-brand-400 tracking-wider">Generated Headline</span>
            <h4 class="text-base font-bold text-white mt-0.5">{{ result.headline }}</h4>
          </div>

          <div>
            <span class="text-[10px] font-bold uppercase text-brand-400 tracking-wider">Subheadline</span>
            <p class="text-xs text-slate-300 mt-0.5 leading-relaxed">{{ result.subheadline }}</p>
          </div>

          <div>
            <span class="text-[10px] font-bold uppercase text-brand-400 tracking-wider">Key Feature Bullets</span>
            <ul class="mt-1 space-y-1 text-xs text-slate-300">
              <li v-for="(b, i) in result.featureBullets" :key="i">{{ b }}</li>
            </ul>
          </div>

          <div class="pt-2 border-t border-slate-800/80">
            <span class="text-[10px] font-bold uppercase text-emerald-400 tracking-wider">Email Subject</span>
            <p class="text-xs font-mono text-emerald-300 mt-0.5">{{ result.emailSubject }}</p>
          </div>
        </div>
      </div>
    </div>

    <template #footer>
      <BaseButton variant="ghost" size="sm" @click="$emit('close')">Cancel</BaseButton>
      <BaseButton 
        variant="primary" 
        size="sm" 
        :loading="isGenerating" 
        :disabled="!form.product" 
        @click="handleGenerate"
      >
        Generate Marketing Copy
      </BaseButton>
    </template>
  </BaseModal>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { AIMarketingGenResponse } from '~/types';
import { useAI } from '~/composables/useAI';
import BaseModal from '~/components/ui/BaseModal.vue';
import BaseButton from '~/components/ui/BaseButton.vue';

defineProps<{ isOpen: boolean }>();
defineEmits<{ (e: 'close'): void }>();

const { generateMarketingCopy, isGenerating } = useAI();

const form = ref({
  product: 'Modern Vue 3 & Nuxt 3 Architecture Course',
  tone: 'Professional' as const,
  audience: 'Software Developers & Engineering Managers'
});

const result = ref<AIMarketingGenResponse | null>(null);

async function handleGenerate() {
  const data = await generateMarketingCopy(form.value);
  if (data) {
    result.value = data;
  }
}
</script>
