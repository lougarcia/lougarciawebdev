// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import mdx from '@astrojs/mdx';
import node from '@astrojs/node';
import cloudflare from '@astrojs/cloudflare';

const isCloudflare = process.env.CF_PAGES === 'true';

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
    },
    integrations: [mdx()],
    output: 'server', // Enable SSR
    adapter: isCloudflare
        ? cloudflare()
        : node({ mode: 'standalone' })
});
