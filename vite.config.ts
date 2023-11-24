import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
	base: '/signature',
	build: {
		assetsInlineLimit: Number.MAX_SAFE_INTEGER.toString()
	}
})
