// https://zenn.dev/hayato94087/articles/3e4128feddffb9
// ちょいふるい

import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
	server: {
		NODE_ENV: z
			.enum(["development", "production", "test"])
			.default("development"),

		DATABASE_URL: z.url(),
		POSTGRES_HOST: z.string(),
		POSTGRES_USER: z.string(),
		POSTGRES_PASSWORD: z.string(),
		POSTGRES_DB: z.string(),

		JWT_SECRET: z.string().min(1),

		FRONTEND_PORT: z.coerce.number().default(3000),
		BACKEND_PORT: z.coerce.number().default(3001),
		DATABASE_PORT: z.coerce.number().default(5432),
	},
	runtimeEnv: process.env,
});
