import { pgTable, foreignKey, pgEnum, varchar, serial, date, bigint, text } from "drizzle-orm/pg-core"

import { sql } from "drizzle-orm"
export const keyStatus = pgEnum("key_status", ['default', 'valid', 'invalid', 'expired'])
export const keyType = pgEnum("key_type", ['aead-ietf', 'aead-det', 'hmacsha512', 'hmacsha256', 'auth', 'shorthash', 'generichash', 'kdf', 'secretbox', 'secretstream', 'stream_xchacha20'])
export const aalLevel = pgEnum("aal_level", ['aal1', 'aal2', 'aal3'])
export const codeChallengeMethod = pgEnum("code_challenge_method", ['s256', 'plain'])
export const factorStatus = pgEnum("factor_status", ['unverified', 'verified'])
export const factorType = pgEnum("factor_type", ['totp', 'webauthn'])


export const userKey = pgTable("user_key", {
	id: varchar("id", { length: 255 }).primaryKey().notNull(),
	userId: varchar("user_id", { length: 15 }).notNull().references(() => authUser.id),
	hashedPassword: varchar("hashed_password", { length: 255 }),
});

export const meta = pgTable("meta", {
	id: serial("id").primaryKey().notNull(),
	userId: varchar("user_id", { length: 200 }),
	createdAt: date("created_at").defaultNow(),
	name: varchar("name", { length: 200 }),
	metaimage: varchar("metaimage", { length: 200 }),
	metatitle: varchar("metatitle", { length: 200 }),
	metadesc: varchar("metadesc", { length: 200 }),
	userUrl: varchar("user_url", { length: 200 }),
});

export const userSession = pgTable("user_session", {
	id: varchar("id", { length: 128 }).primaryKey().notNull(),
	userId: varchar("user_id", { length: 15 }).notNull().references(() => authUser.id),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	activeExpires: bigint("active_expires", { mode: "number" }).notNull(),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	idleExpires: bigint("idle_expires", { mode: "number" }).notNull(),
});

export const authUser = pgTable("auth_user", {
	id: varchar("id", { length: 15 }).primaryKey().notNull(),
	email: varchar("email", { length: 30 }).notNull(),
});

export const exp = pgTable("exp", {
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	id: bigint("id", { mode: "number" }).primaryKey().notNull(),
	position: text("position"),
	desc: text("desc"),
	name: text("name"),
	expe: text("expe"),
	userUrl: text("user_url"),
});

export const coding = pgTable("coding", {
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	id: bigint("id", { mode: "number" }).primaryKey().notNull(),
	lang: text("lang"),
	framework: text("framework"),
	database: text("database"),
	others: text("others"),
	userId: text("user_id"),
});

export const projects = pgTable("projects", {
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	id: bigint("id", { mode: "number" }).primaryKey().notNull(),
	name: text("name"),
	tech: text("tech"),
	desc: text("desc"),
	githubLink: text("github_link"),
	hostedLink: text("hosted_link"),
	userUrl: text("user_url"),
});