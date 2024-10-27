import Database from "better-sqlite3";

export const sqliteClient = new Database(":memory:", {});

sqliteClient.pragma("journal_mode = WAL");
