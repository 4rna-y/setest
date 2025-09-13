import z from "zod";

export const CreateUserResponseSchema = z.object({
	id: z.uuid(),
	name: z.string(),
});

export type CreateUserResponse = z.infer<typeof CreateUserResponseSchema>;
