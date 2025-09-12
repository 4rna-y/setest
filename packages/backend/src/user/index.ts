import Elysia from "elysia";
import { setup } from "../setup";

export const userController = new Elysia()
    .use(setup)
    .post("/user/signup", async ({ body, userRepository, set }) => {
        const res = await userRepository.create(body);
        set.status = res.statusCode;
        return res.response;
    });