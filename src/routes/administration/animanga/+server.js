import { VITE_APP_NAME } from '$env/static/private';
import { json } from '@sveltejs/kit';
import getUrlSegments from '$lib/getUrlSegments';
import trimText from '$lib/trimText';
import model from '$lib/server/model/animanga';

async function fetchAnimangaData(url) {
    const result = {};

    try {
        const data = await getUrlSegments(url);
        const { media, mal_id } = data || {};
        const response = await fetch(`https://api.jikan.moe/v4/${media}/${mal_id}`);

        if (!response.ok) throw new Error();

        const info = await response.json();
        result.mal_id = info.mal_id;
        result.url = `https://myanimelist.net/${media}/${info.mal_id}`;

        result.title = info.title || null;
        result.title_english = info.title_english || null;
        result.title_japanese = info.title_japanese || null;
        result.score = info.score || null;
        result.media = media;
        result.synopsis = info.synopsis || null;
        result.image_thumb = info.images?.webp?.image_url || null;
        result.image_large = info.images?.webp?.large_image_url || null;
        result.year = info.year || null;
        result.status = info.status || null;

        if (media === 'anime') result.season = info.season || null;
        if (media === 'anime') result.episodes = info.episodes || null;
        if (media === 'manga') result.chapters = info.chapters || null;
        if (media === 'manga') result.volumes = info.volumes || null;

        result.authors = [];
        result.studios = [];
        result.genres = [];

        if (info.authors) {
            info.authors.forEach((item) => {
                result.authors.push({
                    name: item.name,
                    url: item.url,
                });
            });
        }

        if (info.studios) {
            info.studios.forEach((item) => {
                result.studios.push({
                    name: item.name,
                    url: item.url,
                });
            });
        }

        if (info.genres) {
            info.genres.forEach((item) => {
                result.genres.push({
                    name: item.name,
                    url: item.url,
                });
            });
        }

        return result;
    } catch (e) {
        throw new Error('Cannot fetch animanga info!');
    }
}

export async function POST({ request }) {
    const formData = await request.json();
    const animangaUrl = trimText(formData.url);

    if (!animangaUrl) {
        return json({
            application: VITE_APP_NAME,
            message: 'URL must be filled, please try again!',
        }, {
            status: 400,
        });
    }

    try {
        const animanga = await fetchAnimangaData(animangaUrl);

        await model.createData(animanga);

        const response = await model.getData();

        return json({
            application: VITE_APP_NAME,
            message: 'Create new animanga success.',
            data: response,
        });
    } catch (e) {
        console.error(e);

        return json({
            application: VITE_APP_NAME,
            message: e,
        }, {
            status: 500,
        });
    }
}

export async function PATCH({ request, url }) {
    const id = url.searchParams.get('id');
    const formData = await request.json();
    const animangaUrl = trimText(formData.url);

    if (!id || !animangaUrl) {
        return json({
            application: VITE_APP_NAME,
            message: 'All data must be filled, please try again!',
        }, {
            status: 400,
        });
    }

    try {
        const animanga = await fetchAnimangaData(animangaUrl);

        await model.editData(animanga, id);

        const response = await model.getData();

        return json({
            application: VITE_APP_NAME,
            message: 'Update animanga success.',
            data: response,
        });
    } catch (e) {
        console.error(e);

        return json({
            application: VITE_APP_NAME,
            message: e,
        }, {
            status: 500,
        });
    }
}

export async function DELETE({ url }) {
    const id = url.searchParams.get('id');

    if (!id) {
        return json({
            application: VITE_APP_NAME,
            message: 'Missing id, please try again!',
        }, {
            status: 400,
        });
    }

    try {
        await model.deleteData(id);

        const response = await model.getData();

        return json({
            application: VITE_APP_NAME,
            message: 'Delete animanga success.',
            data: response,
        });
    } catch (e) {
        console.error(e);

        return json({
            application: VITE_APP_NAME,
            message: e,
        }, {
            status: 500,
        });
    }
}
