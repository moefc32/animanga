import sqlite from './sqlite';
import { TABLE_ANIMANGA } from './model/tables';

export default function setSchema() {
    const queries = [
        `CREATE TABLE IF NOT EXISTS ${TABLE_ANIMANGA} (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            mal_id INTEGER NOT NULL,
            url TEXT NOT NULL,
            title TEXT,
            title_english TEXT,
            title_japanese TEXT,
            score REAL,
            media TEXT,
            synopsis TEXT,
            image_thumb TEXT,
            image_large TEXT,
            year INTEGER,
            status TEXT,
            season INTEGER,
            episodes INTEGER,
            chapters INTEGER,
            volumes INTEGER,
            authors TEXT,
            studios TEXT,
            genres TEXT,
            UNIQUE(mal_id, media)
        );`,
    ];

    for (const query of queries) {
        sqlite(query);
    }
}
