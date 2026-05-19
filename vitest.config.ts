import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,

    include: ['**/*.test.js'],
    exclude: ['node_modules', 'tests/e2e'], 

    coverage: {
      provider: 'v8',
      reporter: ['text', 'html']
    }
  }
})