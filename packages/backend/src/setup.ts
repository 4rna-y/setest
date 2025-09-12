import Elysia from "elysia";
import { UserRepository } from "./user/userRepository";

export const setup = new Elysia({ name: "setup" })
    .decorate({ userRepository: new UserRepository() });