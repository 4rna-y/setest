import { defineConfig } from "drizzle-kit"
import { env } from "./src/env";

export default defineConfig({
    schema: "./src/db/schema.ts",
    out: "./src/db/migrations",
    dialect: "postgresql",

    dbCredentials: {
        ssl: false,
        host: "db",
        user: env.DATABASE_USER,
        password: env.DATABASE_PASSWORD,
        port: env.DATABASE_PORT,
        database: env.DATABASE_NAME
    }
});