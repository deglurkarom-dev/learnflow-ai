<template>
  <div class="py-14 bg-[#09090B]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      <!-- Header -->
      <div class="text-center space-y-2 max-w-2xl mx-auto">
        <span class="text-xs font-semibold uppercase tracking-wider text-emerald-400">Transparent SaaS Pricing</span>
        <h1 class="font-display text-3xl font-extrabold text-white">Choose the Plan for Your Squad</h1>
        <p class="text-zinc-400 text-xs">
          Scale course generation, marketing copy creation, and SEO optimization seamlessly.
        </p>

        <!-- Toggle -->
        <div class="flex items-center justify-center gap-3 pt-3">
          <span :class="!isAnnual ? 'text-white font-semibold' : 'text-zinc-400'" class="text-xs">Monthly</span>
          <button 
            class="w-11 h-6 rounded-full bg-zinc-800 p-0.5 border border-zinc-700 relative transition cursor-pointer interactive-press focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
            aria-label="Toggle annual billing"
            @click="isAnnual = !isAnnual"
          >
            <div 
              class="w-4 h-4 rounded-full bg-brand-500 transition-transform duration-150 ease-out"
              :class="isAnnual ? 'translate-x-5' : 'translate-x-0'"
            ></div>
          </button>
          <span :class="isAnnual ? 'text-white font-semibold' : 'text-zinc-400'" class="text-xs flex items-center gap-1.5">
            Annual 
            <span class="px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-300 text-[10px] font-bold border border-emerald-800/60">Save 20%</span>
          </span>
        </div>
      </div>

      <!-- Pricing Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Starter Tier -->
        <div class="ui-card p-7 flex flex-col justify-between space-y-6">
          <div class="space-y-3">
            <h3 class="text-lg font-bold text-white">Starter Learner</h3>
            <p class="text-xs text-zinc-400">Ideal for individual developers mastering Vue 3 & AI skills.</p>
            <div class="text-2xl font-extrabold text-white">
              ${{ isAnnual ? '19' : '25' }} <span class="text-xs text-zinc-400 font-normal">/ month</span>
            </div>

            <ul class="space-y-2 text-xs text-zinc-300 pt-3 border-t border-zinc-800">
              <li class="flex items-center gap-2">✓ Access to all public course modules</li>
              <li class="flex items-center gap-2">✓ Interactive quizzes & instant scoring</li>
              <li class="flex items-center gap-2">✓ Learner progress dashboard</li>
            </ul>
          </div>
          <BaseButton variant="outline" size="md" full-width>Start 14-Day Free Trial</BaseButton>
        </div>

        <!-- Pro Squad Tier (Featured) -->
        <div class="ui-card p-7 border-brand-500/80 relative flex flex-col justify-between space-y-6 bg-zinc-900">
          <div class="absolute -top-3 left-1/2 -translate-x-1/2 px-2.5 py-0.5 bg-brand-600 text-white font-bold text-[10px] uppercase rounded-full tracking-wider">
            Most Popular
          </div>

          <div class="space-y-3">
            <h3 class="text-lg font-bold text-white">Pro SaaS Squad</h3>
            <p class="text-xs text-zinc-400">For engineering & marketing teams building CMS learning platforms.</p>
            <div class="text-2xl font-extrabold text-white">
              ${{ isAnnual ? '79' : '99' }} <span class="text-xs text-zinc-400 font-normal">/ month</span>
            </div>

            <ul class="space-y-2 text-xs text-zinc-300 pt-3 border-t border-zinc-800">
              <li class="flex items-center gap-2">✓ Everything in Starter</li>
              <li class="flex items-center gap-2 text-brand-300 font-semibold">✓ Unlimited AI Course Generation</li>
              <li class="flex items-center gap-2 text-emerald-400 font-semibold">✓ AI Marketing Copywriter & SEO Assistant</li>
              <li class="flex items-center gap-2">✓ Prismic CMS integration pipeline</li>
            </ul>
          </div>
          <BaseButton variant="primary" size="md" full-width>Upgrade to Pro Squad</BaseButton>
        </div>

        <!-- Enterprise Tier -->
        <div class="ui-card p-7 flex flex-col justify-between space-y-6">
          <div class="space-y-3">
            <h3 class="text-lg font-bold text-white">Enterprise Scale</h3>
            <p class="text-xs text-zinc-400">Custom SLA, dedicated Prismic studio instances & SSO role management.</p>
            <div class="text-2xl font-extrabold text-white">
              ${{ isAnnual ? '299' : '349' }} <span class="text-xs text-zinc-400 font-normal">/ month</span>
            </div>

            <ul class="space-y-2 text-xs text-zinc-300 pt-3 border-t border-zinc-800">
              <li class="flex items-center gap-2">✓ Everything in Pro</li>
              <li class="flex items-center gap-2">✓ Dedicated Nitro server routing</li>
              <li class="flex items-center gap-2">✓ Playwright E2E testing webhooks</li>
              <li class="flex items-center gap-2">✓ 24/7 Priority Support</li>
            </ul>
          </div>
          <BaseButton variant="secondary" size="md" full-width>Contact Sales</BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useSEO } from '~/composables/useSEO';
import BaseButton from '~/components/ui/BaseButton.vue';

const isAnnual = ref(true);

useSEO({
  title: 'Pricing Plans & SaaS Tiers',
  description: 'Flexible pricing tiers for learners and SaaS engineering teams. Unlock AI course generators, marketing tools, and technical SEO.'
});
</script>
