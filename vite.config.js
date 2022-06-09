import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: '3000',
    host: '192.168.100.8'
  }
})

//192.168.100.8

