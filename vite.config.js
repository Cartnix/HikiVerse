import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteBundleObfuscator from 'vite-plugin-bundle-obfuscator'

export default defineConfig({
  base: '/HikiVerse/',
  plugins: [
    react(),
    viteBundleObfuscator({
      enable: true,
      autoExcludeNodeModules: true,
      options: {
        compact: true,
        controlFlowFlattening: true,
        controlFlowFlatteningThreshold: 1,
        numbersToExpressions: true,
        simplify: true,
        stringArray: true,
        stringArrayEncoding: [],
        stringArrayThreshold: 0.75,
        selfDefending: true,
        identifierNamesGenerator: 'hexadecimal'
      }
    })
  ],
  build: {
    // Обфускация автоматически срабатывает и заменяет minify
    minify: false
  }
})
