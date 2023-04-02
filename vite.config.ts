import {defineConfig} from 'vite'
import {resolve} from 'node:path';
import react from '@vitejs/plugin-react'
import autoprefixer from 'autoprefixer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    devSourcemap: true,
    modules: {
      scopeBehaviour: 'global',
      localsConvention: 'dashes',
      generateScopedName: "[name]__[local]___[hash:base64:5]",
      hashPrefix: 'prefix',
    },
    postcss: {
      plugins: [
        autoprefixer(),
      ],
    },
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
