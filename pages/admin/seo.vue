<template>
  <div class="space-y-8">
    <div class="flex items-center justify-between">
      <div>
        <span class="text-xs font-semibold uppercase tracking-wider text-amber-400">Technical SEO Audit</span>
        <h1 class="text-2xl font-bold text-white mt-1">SEO & Schema.org Health Check</h1>
      </div>
      <BaseButton variant="outline" size="sm" @click="openSeoModal = true">
        🔍 Launch AI SEO Assistant
      </BaseButton>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="glass-panel p-6 rounded-2xl border border-slate-800 space-y-4">
        <h3 class="text-base font-bold text-white">Active Crawl & Schema Endpoints</h3>
        <ul class="space-y-3 text-xs">
          <li class="p-3 bg-slate-900/60 rounded-xl border border-slate-800 flex justify-between items-center">
            <span class="font-mono text-emerald-400">/sitemap.xml</span>
            <span class="text-emerald-400 font-bold">200 OK (XML Set)</span>
          </li>
          <li class="p-3 bg-slate-900/60 rounded-xl border border-slate-800 flex justify-between items-center">
            <span class="font-mono text-emerald-400">/robots.txt</span>
            <span class="text-emerald-400 font-bold">200 OK (Allowed)</span>
          </li>
          <li class="p-3 bg-slate-900/60 rounded-xl border border-slate-800 flex justify-between items-center">
            <span class="font-mono text-brand-400">Schema.org JSON-LD</span>
            <span class="text-emerald-400 font-bold">Valid (Course + FAQ)</span>
          </li>
        </ul>
      </div>

      <div class="glass-panel p-6 rounded-2xl border border-slate-800 space-y-4">
        <h3 class="text-base font-bold text-white">Lighthouse Performance Targets</h3>
        <div class="grid grid-cols-2 gap-4 text-center">
          <div class="p-4 bg-slate-900/80 rounded-xl border border-slate-800">
            <span class="text-xs text-slate-400">Performance</span>
            <strong class="text-2xl font-black text-emerald-400 block mt-1">98/100</strong>
          </div>
          <div class="p-4 bg-slate-900/80 rounded-xl border border-slate-800">
            <span class="text-xs text-slate-400">SEO Score</span>
            <strong class="text-2xl font-black text-brand-300 block mt-1">100/100</strong>
          </div>
        </div>
      </div>
    </div>

    <SEOAssistantModal :is-open="openSeoModal" @close="openSeoModal = false" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import BaseButton from '~/components/ui/BaseButton.vue';
import SEOAssistantModal from '~/components/ai/SEOAssistantModal.vue';

definePageMeta({ layout: 'admin' });

const openSeoModal = ref(false);
</script>
