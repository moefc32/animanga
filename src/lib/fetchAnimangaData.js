import getUrlSegments from './getUrlSegments';

export default async function fetchAnimangaData(url) {
    const result = {};

    try {
        const data = await getUrlSegments(url);
        const { media, mal_id } = data || {};
        const info = await curl(`https://api.jikan.moe/v4/${media}/${mal_id}`);

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
        throw e;
    }
}
