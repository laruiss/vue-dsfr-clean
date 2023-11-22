import { fileURLToPath } from 'node:url'
import { mergeConfig } from 'vite'
import { configDefaults, defineConfig } from 'vitest/config'
import viteConfig from './vite.config'

const getNormalizedDir = (relativeDir: string) => fileURLToPath(new URL(relativeDir, import.meta.url))

export default mergeConfig(
  viteConfig,
  defineConfig({
    resolve: {
      alias: {
        "@tests": fileURLToPath(new URL("./tests", import.meta.url)),
      },
    },
    test: {
      globals: true,
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/*'],
      root: fileURLToPath(new URL('./', import.meta.url)),
      setupFiles: [
        './tests/unit/vitest-setup.ts',
      ],
    },
  }),
)
