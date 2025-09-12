import sqlite from '../sqlite';
import { TABLE_ANIMANGA } from './tables';

export default {
    getData: async (id) => {
        try {
            const result = sqlite(`
                SELECT
                    id,
                    mal_id,
                    url,
                    title,
                    title_english,
                    title_japanese,
                    score,
                    media,
                    synopsis,
                    image_thumb,
                    image_large,
                    year,
                    status,
                    season,
                    episodes,
                    chapters,
                    volumes,
                    authors,
                    studios,
                    genres
                FROM ${TABLE_ANIMANGA}
                ${id ? 'WHERE id = ?' : 'ORDER BY title COLLATE NOCASE ASC'};
            `, id ? [id] : undefined);

            return result;
        } catch (e) {
            console.error(e);
            throw new Error('Error when getting data!');
        }
    },
    createData: async (data) => {
        try {
            const result = sqlite(`
                INSERT INTO ${TABLE_ANIMANGA} (
                    mal_id,
                    url,
                    title,
                    title_english,
                    title_japanese,
                    score,
                    media,
                    synopsis,
                    image_thumb,
                    image_large,
                    year,
                    status,
                    season,
                    episodes,
                    chapters,
                    volumes,
                    authors,
                    studios,
                    genres
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
            `, [
                data.mal_id,
                data.url,
                data.title,
                data.title_english,
                data.title_japanese,
                data.score,
                data.media,
                data.synopsis,
                data.image_thumb,
                data.image_large,
                data.year,
                data.status,
                data.season,
                data.episodes,
                data.chapters,
                data.volumes,
                data.authors,
                data.studios,
                data.genres
            ]);

            return {
                column: {
                    mal_id: data.mal_id,
                    url: data.url,
                    title: data.title,
                    title_english: data.title_english,
                    title_japanese: data.title_japanese,
                    score: data.score,
                    media: data.media,
                    synopsis: data.synopsis,
                    image_thumb: data.image_thumb,
                    image_large: data.image_large,
                    year: data.year,
                    status: data.status,
                    season: data.season,
                    episodes: data.episodes,
                    chapters: data.chapters,
                    volumes: data.volumes,
                    authors: data.authors,
                    studios: data.studios,
                    genres: data.genres,
                },
                ...result,
            };
        } catch (e) {
            console.error(e);
            throw new Error('Error when creating data!');
        }
    },
    editData: async (data, id) => {
        try {
            const result = sqlite(`
                UPDATE ${TABLE_ANIMANGA} SET
                    mal_id = COALESCE(?, mal_id),
                    url = COALESCE(?, url),
                    title = COALESCE(?, title),
                    title_english = COALESCE(?, title_english),
                    title_japanese = COALESCE(?, title_japanese),
                    score = COALESCE(?, score),
                    media = COALESCE(?, media),
                    synopsis = COALESCE(?, synopsis),
                    image_thumb = COALESCE(?, image_thumb),
                    image_large = COALESCE(?, image_large),
                    year = COALESCE(?, year),
                    status = COALESCE(?, status),
                    season = COALESCE(?, season),
                    episodes = COALESCE(?, episodes),
                    chapters = COALESCE(?, chapters),
                    volumes = COALESCE(?, volumes),
                    authors = COALESCE(?, authors),
                    studios = COALESCE(?, studios),
                    genres = COALESCE(?, genres)
                WHERE id = ?;
            `, [
                data.mal_id || null,
                data.url || null,
                data.title || null,
                data.title_english || null,
                data.title_japanese || null,
                data.score || null,
                data.media || null,
                data.synopsis || null,
                data.image_thumb || null,
                data.image_large || null,
                data.year || null,
                data.status || null,
                data.season || null,
                data.episodes || null,
                data.chapters || null,
                data.volumes || null,
                data.authors || null,
                data.studios || null,
                data.genres || null,
                id
            ]);

            return {
                column: {
                    id,
                    mal_id: data.mal_id,
                    url: data.url,
                    title: data.title,
                    title_english: data.title_english,
                    title_japanese: data.title_japanese,
                    score: data.score,
                    media: data.media,
                    synopsis: data.synopsis,
                    image_thumb: data.image_thumb,
                    image_large: data.image_large,
                    year: data.year,
                    status: data.status,
                    season: data.season,
                    episodes: data.episodes,
                    chapters: data.chapters,
                    volumes: data.volumes,
                    authors: data.authors,
                    studios: data.studios,
                    genres: data.genres,
                },
                ...result,
            };
        } catch (e) {
            console.error(e);
            throw new Error('Error when editing data!');
        }
    },
    deleteData: async (id) => {
        try {
            const result = sqlite(`
                DELETE FROM ${TABLE_ANIMANGA}
                WHERE id = ?;
            `, [id]);

            return result;
        } catch (e) {
            console.error(e);
            throw new Error('Error when deleting data!');
        }
    },
}
