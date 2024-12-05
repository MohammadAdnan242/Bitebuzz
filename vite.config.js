import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Inspect from 'vite-plugin-inspect';
// import ViteImagemin from 'vite-plugin-imagemin';
// import replace from '@rollup/plugin-replace';
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),Inspect(), 

  ],
  
  build: {
    minify: 'esbuild',
    rollupOptions: {
      external: ['lottie-web','axios'],
      output: {
        manualChunks: {
          // Split vendors into a separate file
          vendor: ['react', 'react-dom', 'axios', 'lottie-react'],
        },
      },
    },
    commonjsOptions: {
      transformMixedEsModules: true
    }
    
  },
  
  
})

