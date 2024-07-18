import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
await payload.db.drizzle.execute(sql`
 CREATE TABLE IF NOT EXISTS "experiences" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar NOT NULL,
	"description" varchar NOT NULL,
	"company" varchar NOT NULL,
	"location" varchar NOT NULL,
	"time" varchar NOT NULL,
	"is_present" boolean,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

DROP INDEX IF EXISTS "projects_filename_idx";
CREATE INDEX IF NOT EXISTS "experiences_created_at_idx" ON "experiences" ("created_at");
ALTER TABLE "projects" DROP COLUMN IF EXISTS "url";
ALTER TABLE "projects" DROP COLUMN IF EXISTS "thumbnail_u_r_l";
ALTER TABLE "projects" DROP COLUMN IF EXISTS "filename";
ALTER TABLE "projects" DROP COLUMN IF EXISTS "mime_type";
ALTER TABLE "projects" DROP COLUMN IF EXISTS "filesize";
ALTER TABLE "projects" DROP COLUMN IF EXISTS "width";
ALTER TABLE "projects" DROP COLUMN IF EXISTS "height";
ALTER TABLE "projects" DROP COLUMN IF EXISTS "focal_x";
ALTER TABLE "projects" DROP COLUMN IF EXISTS "focal_y";`)
};

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
await payload.db.drizzle.execute(sql`
 DROP TABLE "experiences";
ALTER TABLE "projects" ADD COLUMN "url" varchar;
ALTER TABLE "projects" ADD COLUMN "thumbnail_u_r_l" varchar;
ALTER TABLE "projects" ADD COLUMN "filename" varchar;
ALTER TABLE "projects" ADD COLUMN "mime_type" varchar;
ALTER TABLE "projects" ADD COLUMN "filesize" numeric;
ALTER TABLE "projects" ADD COLUMN "width" numeric;
ALTER TABLE "projects" ADD COLUMN "height" numeric;
ALTER TABLE "projects" ADD COLUMN "focal_x" numeric;
ALTER TABLE "projects" ADD COLUMN "focal_y" numeric;
CREATE UNIQUE INDEX IF NOT EXISTS "projects_filename_idx" ON "projects" ("filename");`)
};
