import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  base: '/kwkxbwdc-project',    // right here! your repository name
  plugins: [svelte()],
})
