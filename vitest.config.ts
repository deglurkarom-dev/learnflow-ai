import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  plugins: [vue() as any],
  test: {
    globals: true,
    environment: 'happy-dom',
    include: ['tests/unit/**/*.spec.ts'],
    alias: {
      '~': fileURLToPath(new URL('./', import.meta.url)),
      '#imports': fileURLToPath(new URL('./tests/mocks/imports.ts', import.meta.url))
    }
  }
});
