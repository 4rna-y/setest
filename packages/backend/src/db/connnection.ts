import { drizzle } from "drizzle-orm/node-postgres";
import { env } from "../env";

export const driver = drizzle({
	connection: {
		connectionString: env.DATABASE_URL,
		database: env.POSTGRES_DB,
		user: env.POSTGRES_USER ?? "postgres",
		password: env.POSTGRES_PASSWORD,
		port: env.DATABASE_PORT ?? "5432",
	},
});
