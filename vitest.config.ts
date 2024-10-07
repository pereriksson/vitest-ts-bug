import { defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(env => mergeConfig(
    viteConfig(env),
    {
      test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: ['./src/test/setupTests.ts'],
      },
      plugins: [tsconfigPaths()],
    },
  )
);
