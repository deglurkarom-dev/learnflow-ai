<template>
  <div class="space-y-6">
    <div class="flex items-center justify-between">
      <div>
        <span class="text-xs font-semibold uppercase tracking-wider text-emerald-400">Prismic Headless CMS Studio</span>
        <h1 class="text-xl font-bold text-white mt-0.5">Content & Page Builder</h1>
      </div>
      <BaseButton variant="emerald" size="sm" @click="openCopyModal = true">
        ✍️ Generate Marketing Copy
      </BaseButton>
    </div>

    <!-- Prismic Slice Machine Custom Types View -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="ui-card p-6 border-zinc-800 space-y-2.5">
        <span class="text-[11px] font-mono text-emerald-400">custom_type: course</span>
        <h3 class="text-base font-bold text-white">Course Document Type</h3>
        <p class="text-xs text-zinc-400">Title, Description, Instructor, Lessons slice-zone, and SEO metadata fields.</p>
        <div class="pt-2 text-xs text-brand-400 font-mono">Prismic API Connected ✓</div>
      </div>

      <div class="ui-card p-6 border-zinc-800 space-y-2.5">
        <span class="text-[11px] font-mono text-brand-400">custom_type: blog_post</span>
        <h3 class="text-base font-bold text-white">Blog Article Type</h3>
        <p class="text-xs text-zinc-400">Title, Author relationship, RichText markdown content, Featured Image, Category.</p>
        <div class="pt-2 text-xs text-brand-400 font-mono">Prismic API Connected ✓</div>
      </div>

      <div class="ui-card p-6 border-zinc-800 space-y-2.5">
        <span class="text-[11px] font-mono text-amber-400">custom_type: landing_page</span>
        <h3 class="text-base font-bold text-white">Landing Page Slices</h3>
        <p class="text-xs text-zinc-400">Hero slice, Features grid slice, Testimonials slice, CTA slice, Images.</p>
        <div class="pt-2 text-xs text-brand-400 font-mono">Prismic API Connected ✓</div>
      </div>
    </div>

    <MarketingCopyModal :is-open="openCopyModal" @close="openCopyModal = false" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import BaseButton from '~/components/ui/BaseButton.vue';
import MarketingCopyModal from '~/components/ai/MarketingCopyModal.vue';

definePageMeta({ layout: 'admin' });

const openCopyModal = ref(false);
</script>
