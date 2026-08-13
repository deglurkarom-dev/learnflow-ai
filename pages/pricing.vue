<template>
  <div class="py-16 bg-[#070A13]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <!-- Header -->
      <div class="text-center space-y-3 max-w-2xl mx-auto">
        <span class="text-xs font-semibold uppercase tracking-wider text-emerald-400">Simple Transparent Pricing</span>
        <h1 class="font-display text-4xl font-extrabold text-white">Choose the Plan for Your Squad</h1>
        <p class="text-slate-400 text-sm">
          Scale course generation, marketing copy creation, and SEO optimization seamlessly.
        </p>

        <!-- Toggle -->
        <div class="flex items-center justify-center gap-3 pt-4">
          <span :class="!isAnnual ? 'text-white font-semibold' : 'text-slate-400'" class="text-xs">Monthly Billing</span>
          <button 
            class="w-12 h-6 rounded-full bg-slate-800 p-1 border border-slate-700 relative transition cursor-pointer"
            @click="isAnnual = !isAnnual"
          >
            <div 
              class="w-4 h-4 rounded-full bg-brand-500 transition-transform"
              :class="isAnnual ? 'translate-x-6' : 'translate-x-0'"
            ></div>
          </button>
          <span :class="isAnnual ? 'text-white font-semibold' : 'text-slate-400'" class="text-xs flex items-center gap-1.5">
            Annual Billing 
            <span class="px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 text-[10px] font-bold">Save 20%</span>
          </span>
        </div>
      </div>

      <!-- Pricing Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Starter Tier -->
        <div class="glass-card p-8 rounded-3xl border border-slate-800 flex flex-col justify-between space-y-6">
          <div class="space-y-4">
            <h3 class="text-xl font-bold text-white">Starter Learner</h3>
            <p class="text-xs text-slate-400">Ideal for individual developers mastering Vue 3 & AI skills.</p>
            <div class="text-3xl font-black text-white">
              ${{ isAnnual ? '19' : '25' }} <span class="text-xs text-slate-400 font-normal">/ month</span>
            </div>

            <ul class="space-y-2.5 text-xs text-slate-300 pt-4 border-t border-slate-800">
              <li class="flex items-center gap-2">✓ Access to all public course modules</li>
              <li class="flex items-center gap-2">✓ Interactive quizzes & instant scoring</li>
              <li class="flex items-center gap-2">✓ Learner progress dashboard</li>
            </ul>
          </div>
          <BaseButton variant="outline" size="md" full-width>Start 14-Day Free Trial</BaseButton>
        </div>

        <!-- Pro Squad Tier (Featured) -->
        <div class="glass-card p-8 rounded-3xl border-2 border-brand-500 shadow-glow relative flex flex-col justify-between space-y-6">
          <div class="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-brand-600 text-white font-bold text-[10px] uppercase rounded-full tracking-wider">
            Most Popular
          </div>

          <div class="space-y-4">
            <h3 class="text-xl font-bold text-white">Pro SaaS Squad</h3>
            <p class="text-xs text-slate-400">For engineering & marketing teams building CMS learning platforms.</p>
            <div class="text-3xl font-black text-white">
              ${{ isAnnual ? '79' : '99' }} <span class="text-xs text-slate-400 font-normal">/ month</span>
            </div>

            <ul class="space-y-2.5 text-xs text-slate-300 pt-4 border-t border-slate-800">
              <li class="flex items-center gap-2">✓ Everything in Starter</li>
              <li class="flex items-center gap-2 text-brand-300 font-semibold">✓ Unlimited AI Course Generation</li>
              <li class="flex items-center gap-2 text-emerald-400 font-semibold">✓ AI Marketing Copywriter & SEO Assistant</li>
              <li class="flex items-center gap-2">✓ Prismic CMS integration pipeline</li>
            </ul>
          </div>
          <BaseButton variant="primary" size="md" full-width>Upgrade to Pro Squad</BaseButton>
        </div>

        <!-- Enterprise Tier -->
        <div class="glass-card p-8 rounded-3xl border border-slate-800 flex flex-col justify-between space-y-6">
          <div class="space-y-4">
            <h3 class="text-xl font-bold text-white">Enterprise Scale</h3>
            <p class="text-xs text-slate-400">Custom SLA, dedicated Prismic studio instances & SSO role management.</p>
            <div class="text-3xl font-black text-white">
              ${{ isAnnual ? '299' : '349' }} <span class="text-xs text-slate-400 font-normal">/ month</span>
            </div>

            <ul class="space-y-2.5 text-xs text-slate-300 pt-4 border-t border-slate-800">
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
