import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import path from 'node:path'

export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            // Nuxt の ~/@ エイリアスもテストで使えるようにしておく
            '~': path.resolve(__dirname, 'app'),
            '@': path.resolve(__dirname, 'app'),
        },
    },
    test: {
        environment: 'happy-dom',
        globals: true,
        include: ['tests/unit/**/*.spec.ts'],
    },
})
