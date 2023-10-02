import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})


// export default defineConfig({
//   // ... other Vite config
//   base: process.env.NODE_ENV === 'testing' ? 'http://localhost:3000/' : '/'
// })