ALTER TABLE "about" ADD COLUMN "twitter_link" text;--> statement-breakpoint
ALTER TABLE "about" ADD COLUMN "desc" text;--> statement-breakpoint
ALTER TABLE "meta" DROP COLUMN IF EXISTS "metadesc";