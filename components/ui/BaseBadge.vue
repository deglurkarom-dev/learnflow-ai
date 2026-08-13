<template>
  <span
    :class="[
      'inline-flex items-center font-medium rounded-full border',
      variantClasses,
      sizeClasses
    ]"
  >
    <slot />
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(defineProps<{
  variant?: 'brand' | 'emerald' | 'amber' | 'slate' | 'rose';
  size?: 'sm' | 'md';
}>(), {
  variant: 'brand',
  size: 'md'
});

const variantClasses = computed(() => {
  switch (props.variant) {
    case 'emerald':
      return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
    case 'amber':
      return 'bg-amber-500/10 text-amber-400 border-amber-500/30';
    case 'slate':
      return 'bg-slate-800/80 text-slate-300 border-slate-700';
    case 'rose':
      return 'bg-rose-500/10 text-rose-400 border-rose-500/30';
    case 'brand':
    default:
      return 'bg-brand-500/10 text-brand-300 border-brand-500/30';
  }
});

const sizeClasses = computed(() => {
  return props.size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-3 py-1 text-xs';
});
</script>
