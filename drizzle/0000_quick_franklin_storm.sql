CREATE TABLE IF NOT EXISTS "about" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text,
	"email" text,
	"pos" text,
	"resume_link" text,
	"github_link" text,
	"linked_link" text,
	"user_url" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "coding" (
	"id" bigint PRIMARY KEY NOT NULL,
	"lang" text,
	"framework" text,
	"database" text,
	"others" text,
	"user_id" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "exp" (
	"id" bigint PRIMARY KEY NOT NULL,
	"position" text,
	"desc" text,
	"name" text,
	"expe" text,
	"user_url" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user_key" (
	"id" varchar(255) PRIMARY KEY NOT NULL,
	"user_id" varchar(15) NOT NULL,
	"hashed_password" varchar(255)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "meta" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" varchar(200),
	"created_at" date DEFAULT now(),
	"name" varchar(200),
	"metaimage" varchar(200),
	"metatitle" varchar(200),
	"metadesc" varchar(200),
	"user_url" varchar(200)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "projects" (
	"id" bigint PRIMARY KEY NOT NULL,
	"name" text,
	"tech" text,
	"desc" text,
	"github_link" text,
	"hosted_link" text,
	"user_url" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "random" (
	"id" bigint PRIMARY KEY NOT NULL,
	"digit" bigint
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user_session" (
	"id" varchar(128) PRIMARY KEY NOT NULL,
	"user_id" varchar(15) NOT NULL,
	"active_expires" bigint NOT NULL,
	"idle_expires" bigint NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "auth_user" (
	"id" varchar(15) PRIMARY KEY NOT NULL,
	"email" varchar(30) NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_key" ADD CONSTRAINT "user_key_user_id_auth_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "auth_user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_session" ADD CONSTRAINT "user_session_user_id_auth_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "auth_user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
