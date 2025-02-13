import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        sveltekit(),
    ],
    server: {
        host: process.env.VITE_IPBIND || 'localhost',
        port: parseInt(process.env.VITE_PORT),
    },
});
