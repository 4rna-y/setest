import { describe, expect, test } from "bun:test";
import { driver } from "../src/db/connnection";
import { UserRepository } from "../src/user/userRepository";

const userRepository = new UserRepository();

describe("Database", () => {
    test("connection", () => {
        expect(driver).toBeDefined();
    });

    test("insert user", async () => {
        const res = await userRepository.create({ name: "wawawa", password: "mgmgmg" });
        expect(res.statusCode).toBe(200);
    });
});