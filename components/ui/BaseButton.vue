<template>
  <button
    :type="type"
    :disabled="disabled || loading"
    :class="[
      'inline-flex items-center justify-center font-medium transition-all duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090B] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer interactive-press select-none',
      variantClasses,
      sizeClasses,
      fullWidth ? 'w-full' : ''
    ]"
    @click="$emit('click', $event)"
  >
    <svg 
      v-if="loading" 
      class="animate-spin -ml-1 mr-2 h-4 w-4 text-current" 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24"
    >
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(defineProps<{
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'emerald' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
}>(), {
  type: 'button',
  variant: 'primary',
  size: 'md',
  disabled: false,
  loading: false,
  fullWidth: false
});

defineEmits<{
  (e: 'click', event: MouseEvent): void;
}>();

const variantClasses = computed(() => {
  switch (props.variant) {
    case 'primary':
      return 'bg-indigo-600 hover:bg-indigo-500 text-white border border-indigo-500/40 shadow-sm';
    case 'emerald':
      return 'bg-emerald-600 hover:bg-emerald-500 text-white border border-emerald-500/40 shadow-sm';
    case 'secondary':
      return 'bg-zinc-800 hover:bg-zinc-700 text-zinc-100 border border-zinc-700/80';
    case 'outline':
      return 'bg-zinc-900/80 border border-zinc-700 hover:border-zinc-500 text-zinc-200 hover:text-white';
    case 'ghost':
      return 'bg-transparent hover:bg-zinc-800/60 text-zinc-300 hover:text-white';
    case 'danger':
      return 'bg-rose-600 hover:bg-rose-500 text-white border border-rose-500/40';
    default:
      return 'bg-indigo-600 text-white';
  }
});

const sizeClasses = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'px-3 py-1.5 text-xs rounded-md gap-1.5 font-medium';
    case 'lg':
      return 'px-5 py-3 text-sm rounded-lg gap-2 font-semibold';
    case 'md':
    default:
      return 'px-4 py-2 text-xs font-semibold rounded-md gap-2';
  }
});
</script>
