<template>
  <BaseModal :is-open="isOpen" title="AI SEO & GEO Metadata Assistant" @close="$emit('close')">
    <div class="space-y-5">
      <p class="text-xs text-slate-400">
        Automatically generate technical SEO titles, meta descriptions, target keyword arrays, OpenGraph cards, and Schema.org FAQ JSON-LD snippet tags.
      </p>

      <div class="space-y-4">
        <div>
          <label class="block text-xs font-semibold text-slate-300 mb-1">Page or Course Title</label>
          <input
            v-model="form.topicOrTitle"
            type="text"
            placeholder="e.g. Modern JavaScript Fundamentals"
            class="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-brand-500"
          />
        </div>

        <div>
          <label class="block text-xs font-semibold text-slate-300 mb-1">Content Type</label>
          <select
            v-model="form.contentType"
            class="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-brand-500"
          >
            <option value="Course">Course</option>
            <option value="Blog">Blog Article</option>
            <option value="Landing Page">Landing Page</option>
          </select>
        </div>
      </div>

      <!-- Result View -->
      <div v-if="result" class="mt-6 pt-4 border-t border-slate-800 space-y-4">
        <div class="p-4 bg-slate-950/90 border border-slate-800 rounded-xl space-y-3">
          <div>
            <span class="text-[10px] font-bold uppercase text-brand-400 tracking-wider">Generated SEO Title (&lt;title&gt;)</span>
            <input 
              v-model="result.seoTitle" 
              class="w-full mt-1 bg-slate-900 border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-white" 
            />
          </div>

          <div>
            <span class="text-[10px] font-bold uppercase text-brand-400 tracking-wider">Meta Description (155 chars)</span>
            <textarea 
              v-model="result.metaDescription" 
              rows="2"
              class="w-full mt-1 bg-slate-900 border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-slate-300"
            ></textarea>
          </div>

          <div>
            <span class="text-[10px] font-bold uppercase text-emerald-400 tracking-wider">URL Slug Suggestion</span>
            <p class="text-xs font-mono text-emerald-400 mt-0.5">/courses/{{ result.suggestedSlug }}</p>
          </div>

          <div>
            <span class="text-[10px] font-bold uppercase text-amber-400 tracking-wider">Target Keywords</span>
            <div class="flex flex-wrap gap-1.5 mt-1">
              <span 
                v-for="(kw, i) in result.keywords" 
                :key="i"
                class="px-2 py-0.5 bg-amber-500/10 text-amber-300 border border-amber-500/20 text-[11px] rounded-md"
              >
                {{ kw }}
              </span>
            </div>
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
        :disabled="!form.topicOrTitle" 
        @click="handleGenerate"
      >
        Generate SEO Metadata
      </BaseButton>
    </template>
  </BaseModal>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { AISEOGenResponse } from '~/types';
import { useAI } from '~/composables/useAI';
import BaseModal from '~/components/ui/BaseModal.vue';
import BaseButton from '~/components/ui/BaseButton.vue';

defineProps<{ isOpen: boolean }>();
defineEmits<{ (e: 'close'): void }>();

const { generateSEO, isGenerating } = useAI();

const form = ref({
  topicOrTitle: 'Modern JavaScript & Vue 3 Fundamentals',
  contentType: 'Course' as const
});

const result = ref<AISEOGenResponse | null>(null);

async function handleGenerate() {
  const data = await generateSEO(form.value);
  if (data) {
    result.value = data;
  }
}
</script>
