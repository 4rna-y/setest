// https://lets.postgresql.jp/documents/technical/text-processing/1
// https://orm.drizzle.team/docs

import { relations } from "drizzle-orm";
import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
	id: uuid("id").notNull().primaryKey(),
	name: text("name").notNull().unique(),
	createdAt: timestamp("created_at").notNull().defaultNow(),
	updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const userCredentials = pgTable("user_credentials", {
	id: uuid("id").notNull().primaryKey(),
	userId: uuid("user_id")
		.notNull()
		.references(() => users.id, { onDelete: "cascade" }),
	passwordHash: text("password_hash").notNull(),
	createdAt: timestamp("created_at").notNull().defaultNow(),
	updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const usersRelations = relations(users, ({ one }) => ({
	credentials: one(userCredentials, {
		fields: [users.id],
		references: [userCredentials.userId],
	}),
}));

export const userCredentialsRelations = relations(
	userCredentials,
	({ one }) => ({
		user: one(users, {
			fields: [userCredentials.userId],
			references: [users.id],
		}),
	}),
);

export type User = typeof users.$inferSelect;
export type UserCredential = typeof userCredentials.$inferSelect;
