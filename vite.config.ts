import {defineConfig} from 'vite'
import {resolve} from 'node:path';
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    devSourcemap: true,
    modules: {
      scopeBehaviour: 'global',
      localsConvention: 'camelCase',
      generateScopedName: "[name]__[local]___[hash:base64:5]",
      hashPrefix: 'prefix',
    }
  },
  server: {
    open: './example/index.html',
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'DateSchedule',
      fileName: 'date-schedule',
    },
    rollupOptions: {
      external: ['react'],
      output: {
        globals: {
          react: 'React',
        },
      },
    }
  }
})
