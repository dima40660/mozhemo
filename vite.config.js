import { fileURLToPath, URL } from "url";
import { resolve, dirname } from "node:path";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueI18n from "@intlify/vite-plugin-vue-i18n";

export default defineConfig({
    plugins: [
        vue(),
        vueI18n({
            include: resolve(
                dirname(fileURLToPath(import.meta.url)),
                "./src/i18n/locales/**"
            ),
        }),
    ],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
});