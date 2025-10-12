import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/db/schema.ts",   // path to your Drizzle schema
  out: "./drizzle/migrations",    // where migrations will be written
  driver: "pg"                    // postgres
});
