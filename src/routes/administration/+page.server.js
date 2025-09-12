import model from '$lib/server/model/animanga';
import parseAnimangaRow from '$lib/parseAnimangaRow';

export async function load() {
    const response = await model.getData();
    const animanga = response.map(parseAnimangaRow);

    return {
        animanga,
    };
}
