// schema.js
import { pgTable, bigint, varchar, boolean, text, date, numeric, serial } from "drizzle-orm/pg-core";

export const user = pgTable("auth_user", {
    id: varchar("id", {
        length: 15 // change this when using custom user ids
    }).primaryKey(),
    email: varchar("email", {
        length: 30
    }).notNull()
    // other user attributes
});

export const session = pgTable("user_session", {
    id: varchar("id", {
        length: 128
    }).primaryKey(),
    userId: varchar("user_id", {
        length: 15
    })
        .notNull()
        .references(() => user.id),
    activeExpires: bigint("active_expires", {
        mode: "number"
    }).notNull(),
    idleExpires: bigint("idle_expires", {
        mode: "number"
    }).notNull()
});

export const key = pgTable("user_key", {
    id: varchar("id", {
        length: 255
    }).primaryKey(),
    userId: varchar("user_id", {
        length: 15
    })
        .notNull()
        .references(() => user.id),
    hashedPassword: varchar("hashed_password", {
        length: 255
    })
});

export const meta = pgTable("meta", {
    id: serial("id").primaryKey(),
    userId: varchar("user_id", {
        length: 200
    }),
    created_at: date("created_at").defaultNow(),
    name: varchar("name", { length: 200 }),
    metaimage: varchar("metaimage", { length: 200 }),
    metatitle: varchar("metatitle", { length: 200 }),
    userUrl: varchar("user_url", { length: 200 }),
})

export const exp = pgTable("exp", {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    id: serial("id").primaryKey(),
    position: text("position"),
    desc: text("desc"),
    name: text("name"),
    expe: text("expe"),
    userUrl: text("user_url"),
    cert: text("certificate")
});

export const coding = pgTable("coding", {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    id: serial("id").primaryKey(),
    lang: text("lang"),
    framework: text("framework"),
    database: text("database"),
    others: text("others"),
    userId: text("user_id"),
});

export const projects = pgTable("projects", {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    id: serial("id").primaryKey(),
    name: text("name"),
    tech: text("tech"),
    desc: text("desc"),
    githubLink: text("github_link"),
    hostedLink: text("hosted_link"),
    userUrl: text("user_url"),
});
export const about = pgTable("about", {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    id: serial("id").primaryKey(),
    name: text("name"),
    email: text("email"),
    pos: text("pos"),
    resumeLink: text("resume_link"),
    githubLink: text("github_link"),
    linkedLink: text("linked_link"),
    twitterLink: text("twitter_link"),
    desc: text("desc"),
    userUrl: text("user_url"),
});

export const random = pgTable("random", {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    id: bigint("id", { mode: "number" }).primaryKey().notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    digit: bigint("digit", { mode: "number" }),
});