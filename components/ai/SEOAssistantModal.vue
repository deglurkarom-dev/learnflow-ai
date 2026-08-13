<template>
  <BaseModal :is-open="isOpen" title="AI SEO & GEO Metadata Assistant" @close="$emit('close')">
    <div class="space-y-4">
      <p class="text-xs text-zinc-400">
        Automatically generate technical SEO titles, meta descriptions, target keyword arrays, OpenGraph cards, and Schema.org FAQ JSON-LD snippet tags.
      </p>

      <div class="space-y-3">
        <div>
          <label class="block text-xs font-medium text-zinc-300 mb-1">Page or Course Title</label>
          <input
            v-model="form.topicOrTitle"
            type="text"
            placeholder="e.g. Modern JavaScript Fundamentals"
            class="ui-input w-full px-3.5 py-2 text-xs"
          />
        </div>

        <div>
          <label class="block text-xs font-medium text-zinc-300 mb-1">Content Type</label>
          <select
            v-model="form.contentType"
            class="ui-input w-full px-3.5 py-2 text-xs"
          >
            <option value="Course">Course</option>
            <option value="Blog">Blog Article</option>
            <option value="Landing Page">Landing Page</option>
          </select>
        </div>
      </div>

      <!-- Result View -->
      <div v-if="result" class="mt-5 pt-4 border-t border-zinc-800 space-y-3">
        <div class="p-4 bg-zinc-900/80 border border-zinc-800 rounded-xl space-y-3">
          <div>
            <span class="text-[10px] font-bold uppercase text-brand-400 tracking-wider">Generated SEO Title (&lt;title&gt;)</span>
            <input 
              v-model="result.seoTitle" 
              class="ui-input w-full mt-1 px-3 py-1.5 text-xs" 
            />
          </div>

          <div>
            <span class="text-[10px] font-bold uppercase text-brand-400 tracking-wider">Meta Description</span>
            <textarea 
              v-model="result.metaDescription" 
              rows="2"
              class="ui-input w-full mt-1 px-3 py-1.5 text-xs"
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
                class="px-2 py-0.5 bg-amber-950/60 text-amber-300 border border-amber-800/60 text-[11px] rounded-md"
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
