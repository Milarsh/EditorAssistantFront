import { resolve } from 'node:path'

import tailwindcss from '@tailwindcss/vite'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import viteReact from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import analyzer from 'vite-bundle-analyzer'
import vitePluginSvgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite({
      autoCodeSplitting: true,
      routesDirectory: './src/app/router/routes',
      generatedRouteTree: './src/app/router/routeTree.gen.ts',
    }),
    viteReact(),
    vitePluginSvgr(),
    tailwindcss(),
    analyzer({
      analyzerMode: 'static',
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
})
