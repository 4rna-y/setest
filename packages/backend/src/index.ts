import { Elysia } from "elysia";
import { env } from "./env";
import { userController } from "./user";

const app = new Elysia()
	.listen(env.BACKEND_PORT)
	.use(userController);

console.log(
	`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
