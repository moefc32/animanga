import { error } from '@sveltejs/kit';
import model from '$lib/server/model/animanga';
import parseAnimangaRow from '$lib/parseAnimangaRow';

export async function entries() {
    const animanga = await model.getData();

    return animanga.map(item => ({
        animanga: `${item.media}-${item.mal_id}`,
    }));
}

export async function load({ params }) {
    const { animanga } = params;
    const [media, mal_id] = animanga.split('-');
    const response = await model.getData({ media, mal_id });
    const content = response.map(parseAnimangaRow);

    if (!content.length) {
        throw error(404, 'Not Found');
    }

    return {
        content: content[0],
    };
}
