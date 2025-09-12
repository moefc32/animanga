export default function parseAnimangaRow(row) {
    return {
        ...row,
        authors: row.authors ? JSON.parse(row.authors) : [],
        studios: row.studios ? JSON.parse(row.studios) : [],
        genres: row.genres ? JSON.parse(row.genres) : [],
    };
}
