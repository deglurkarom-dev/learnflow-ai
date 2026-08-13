<template>
  <button
    :type="type"
    :disabled="disabled || loading"
    :class="[
      'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#070A13] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer',
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
      return 'bg-gradient-to-r from-brand-600 to-indigo-500 hover:from-brand-500 hover:to-indigo-400 text-white shadow-lg shadow-brand-500/25 border border-indigo-400/30';
    case 'emerald':
      return 'bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white shadow-lg shadow-emerald-500/25 border border-emerald-400/30';
    case 'secondary':
      return 'bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-700';
    case 'outline':
      return 'bg-transparent border border-brand-500/50 hover:border-brand-400 text-brand-300 hover:text-white hover:bg-brand-500/10';
    case 'ghost':
      return 'bg-transparent hover:bg-slate-800/60 text-slate-300 hover:text-white';
    case 'danger':
      return 'bg-rose-600 hover:bg-rose-500 text-white shadow-lg shadow-rose-600/25';
    default:
      return 'bg-brand-600 text-white';
  }
});

const sizeClasses = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'px-3 py-1.5 text-xs rounded-lg gap-1.5';
    case 'lg':
      return 'px-6 py-3.5 text-base rounded-xl gap-2.5';
    case 'md':
    default:
      return 'px-4 py-2.5 text-sm rounded-xl gap-2';
  }
});
</script>
