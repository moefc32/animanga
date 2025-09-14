import { VITE_APP_NAME } from '$env/static/private';
import { json } from '@sveltejs/kit';
import getUrlSegments from '$lib/getUrlSegments';
import trimText from '$lib/trimText';
import model from '$lib/server/model/animanga';
import parseAnimangaRow from '$lib/parseAnimangaRow.js';

async function fetchAnimangaData(url) {
    const result = {};

    try {
        const data = await getUrlSegments(url);
        const { media, mal_id } = data || {};
        const response = await fetch(`https://api.jikan.moe/v4/${media}/${mal_id}`);

        if (!response.ok) throw new Error();

        const payload = await response.json();
        const info = payload.data;

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


        if (info.authors) {
            const authors = [];

            info.authors.forEach((item) => {
                authors.push({
                    name: item.name,
                    url: item.url,
                });
            });

            result.authors = JSON.stringify(authors);
        }

        if (info.studios) {
            const studios = [];

            info.studios.forEach((item) => {
                studios.push({
                    name: item.name,
                    url: item.url,
                });
            });

            result.studios = JSON.stringify(studios);
        }

        if (info.genres) {
            const genres = [];

            info.genres.forEach((item) => {
                genres.push({
                    name: item.name,
                    url: item.url,
                });
            });

            result.genres = JSON.stringify(genres);
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
        const data = await fetchAnimangaData(animangaUrl);
        await model.createData(data);
        const response = await model.getData();
        const animanga = response.map(parseAnimangaRow);

        return json({
            application: VITE_APP_NAME,
            message: 'Create new animanga success.',
            data: animanga,
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

export async function PATCH({ url }) {
    const id = url.searchParams.get('id');

    if (!id) {
        return json({
            application: VITE_APP_NAME,
            message: 'Id must be given, please try again!',
        }, {
            status: 400,
        });
    }

    try {
        const entry = await model.getData({ id });

        if (!entry.length) {
            return json({
                application: VITE_APP_NAME,
                message: 'Invalid animanga id, please try again!',
            }, {
                status: 400,
            });
        }

        const data = await fetchAnimangaData(entry[0].url);
        await model.editData(data, id);
        const response = await model.getData({ id });
        const animanga = response.map(parseAnimangaRow);

        return json({
            application: VITE_APP_NAME,
            message: 'Update animanga success.',
            data: animanga[0],
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
        const animanga = response.map(parseAnimangaRow);

        return json({
            application: VITE_APP_NAME,
            message: 'Delete animanga success.',
            data: animanga,
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
