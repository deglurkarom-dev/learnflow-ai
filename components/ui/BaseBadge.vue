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
      return 'bg-emerald-950/60 text-emerald-300 border-emerald-800/60';
    case 'amber':
      return 'bg-amber-950/60 text-amber-300 border-amber-800/60';
    case 'slate':
      return 'bg-zinc-800/80 text-zinc-300 border-zinc-700/80';
    case 'rose':
      return 'bg-rose-950/60 text-rose-300 border-rose-800/60';
    case 'brand':
    default:
      return 'bg-brand-950/80 text-brand-300 border-brand-800/60';
  }
});

const sizeClasses = computed(() => {
  return props.size === 'sm' ? 'px-2 py-0.5 text-[11px]' : 'px-2.5 py-1 text-xs';
});
</script>
