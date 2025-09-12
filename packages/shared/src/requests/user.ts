import z from "zod";

export const CreateUserRequestSchema = z.object({
	name: z.string(),
	password: z.string(),
});

export type CreateUserRequest = z.infer<typeof CreateUserRequestSchema>;
