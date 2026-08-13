<template>
  <Teleport to="body">
    <Transition name="modal-fade">
      <div 
        v-if="isOpen" 
        class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      >
        <!-- Backdrop -->
        <div 
          class="fixed inset-0 bg-black/75 backdrop-blur-xs transition-opacity duration-200" 
          @click="$emit('close')"
        />

        <!-- Modal Content Container -->
        <div 
          class="modal-panel relative w-full max-w-2xl bg-[#121216] border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden z-10 my-8"
        >
          <!-- Header -->
          <div class="flex items-center justify-between px-6 py-4 border-b border-zinc-800/80 bg-zinc-900/60">
            <h3 class="text-base font-bold text-zinc-100 flex items-center gap-2">
              <slot name="title">{{ title }}</slot>
            </h3>
            <button 
              class="text-zinc-400 hover:text-white p-1 rounded-md hover:bg-zinc-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              aria-label="Close dialog"
              @click="$emit('close')"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <!-- Body -->
          <div class="p-6 max-h-[75vh] overflow-y-auto">
            <slot />
          </div>

          <!-- Footer -->
          <div v-if="$slots.footer" class="px-6 py-3.5 border-t border-zinc-800/80 bg-zinc-900/40 flex justify-end gap-2.5">
            <slot name="footer" />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
defineProps<{
  isOpen: boolean;
  title?: string;
}>();

defineEmits<{
  (e: 'close'): void;
}>();
</script>

<style scoped>
.modal-fade-enter-active {
  transition: opacity 180ms cubic-bezier(0.23, 1, 0.32, 1);
}
.modal-fade-leave-active {
  transition: opacity 150ms cubic-bezier(0.77, 0, 0.175, 1);
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active .modal-panel {
  transition: transform 180ms cubic-bezier(0.23, 1, 0.32, 1), opacity 180ms cubic-bezier(0.23, 1, 0.32, 1);
}

.modal-fade-enter-from .modal-panel {
  opacity: 0;
  transform: scale(0.96);
}

.modal-fade-leave-to .modal-panel {
  opacity: 0;
  transform: scale(0.97);
}

@media (prefers-reduced-motion: reduce) {
  .modal-fade-enter-active .modal-panel,
  .modal-fade-enter-from .modal-panel,
  .modal-fade-leave-to .modal-panel {
    transform: none !important;
  }
}
</style>
