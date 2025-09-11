import { defineConfig } from "drizzle-kit";
import { env } from "./src/env";

export default defineConfig({
	schema: "./src/db/schema.ts",
	out: "./src/db/migrations",
	dialect: "postgresql",

	dbCredentials: {
		ssl: false,
		host: "db",
		user: env.POSTGRES_USER,
		password: env.POSTGRES_PASSWORD,
		port: env.DATABASE_PORT,
		database: env.POSTGRES_DB,
	},
});
