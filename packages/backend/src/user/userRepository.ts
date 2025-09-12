import { CreateUserRequestSchema } from "@setest/shared/requests";
import {
	type CreateUserResponse,
	CreateUserResponseSchema,
	type ErrorResponse,
	ErrorResponseSchema,
} from "@setest/shared/responses";
import { eq } from "drizzle-orm";
import { driver } from "../db/connnection";
import { type User, userCredentials, users } from "../db/schema";
import type { ResponseData } from "../responseData";

export class UserRepository {
	async findByName(name: string): Promise<User[]> {
		return await driver.select().from(users).where(eq(users.name, name));
	}

	async create(
		body: unknown,
	): Promise<ResponseData<ErrorResponse> | ResponseData<CreateUserResponse>> {
		const parsed = CreateUserRequestSchema.safeParse(body);

		if (!parsed.success) {
			return {
				statusCode: 400,
				response: ErrorResponseSchema.parse({
					code: "INVALID_REQUEST",
					message: `Failed to parse body data.`,
				}),
			};
		}

		const dto = parsed.data;

		const existingUser = await this.findByName(dto.name);
		if (existingUser.length !== 0) {
			return {
				statusCode: 400,
				response: ErrorResponseSchema.parse({
					code: "USER_ALREADY_EXISTS",
					message: `name: ${dto.name} already exists.`,
				}),
			};
		}

		const userId = Bun.randomUUIDv7();

		//https://bun.com/docs/api/hashing
		const hash = await Bun.password.hash(dto.password, {
			algorithm: "bcrypt",
			cost: 4,
		});

		await driver.insert(users).values({
			id: userId,
			name: dto.name,
		});

		await driver.insert(userCredentials).values({
			id: Bun.randomUUIDv7(),
			userId: userId,
			passwordHash: hash,
		});

		return {
			statusCode: 200,
			response: CreateUserResponseSchema.parse({
				id: userId,
				name: dto.name,
			}),
		};
	}
}
