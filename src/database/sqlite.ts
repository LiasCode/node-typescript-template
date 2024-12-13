import { createClient } from "@libsql/client";

export const sqliteClient = createClient({
  url: ":memory:",
});
