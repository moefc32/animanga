import adapter from '@sveltejs/adapter-cloudflare';

const config = {
    kit: {
        adapter: adapter({
            strict: false,
        }),
    },
};

export default config;
