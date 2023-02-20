import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Markdown from "vite-plugin-vue-markdown";

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        open: true
    },
    plugins: [vue({
        include: [/\.vue$/, /\.md$/],
    }), Markdown({
        // default options passed to markdown-it
        // see: https://markdown-it.github.io/markdown-it/
        markdownItOptions: {
            html: true,
            linkify: true,
            typographer: true,
        },
        // A function providing the Markdown It instance gets the ability to apply custom settings/plugins
        markdownItSetup(md) {
            // for example
            md.use(require('markdown-it-anchor'))
            md.use(require('markdown-it-prism'))
        },
        // Class names for the wrapper div
        wrapperClasses: 'markdown-body'
    }), vueJsx()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
})
