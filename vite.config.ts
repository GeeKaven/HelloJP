import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // file alias
  resolve: {
    alias: {
      "@": resolve(__dirname, './src/'),
      "@components": resolve(__dirname, './src/components/'),
      "@constants": resolve(__dirname, './src/constants/'),
      "@utils": resolve(__dirname, './src/utils/'),
      "@db": resolve(__dirname, './src/db/')
    },
  }
})
