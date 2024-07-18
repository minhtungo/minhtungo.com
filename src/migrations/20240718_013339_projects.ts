import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
await payload.db.drizzle.execute(sql`
 CREATE TABLE IF NOT EXISTS "projects_links" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"href" varchar NOT NULL
);

CREATE TABLE IF NOT EXISTS "projects_tools" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"name" varchar NOT NULL
);

CREATE TABLE IF NOT EXISTS "projects" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar NOT NULL,
	"description" varchar NOT NULL,
	"preview_image_id" integer NOT NULL,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"url" varchar,
	"thumbnail_u_r_l" varchar,
	"filename" varchar,
	"mime_type" varchar,
	"filesize" numeric,
	"width" numeric,
	"height" numeric,
	"focal_x" numeric,
	"focal_y" numeric
);

CREATE INDEX IF NOT EXISTS "projects_links_order_idx" ON "projects_links" ("_order");
CREATE INDEX IF NOT EXISTS "projects_links_parent_id_idx" ON "projects_links" ("_parent_id");
CREATE INDEX IF NOT EXISTS "projects_tools_order_idx" ON "projects_tools" ("_order");
CREATE INDEX IF NOT EXISTS "projects_tools_parent_id_idx" ON "projects_tools" ("_parent_id");
CREATE INDEX IF NOT EXISTS "projects_created_at_idx" ON "projects" ("created_at");
CREATE UNIQUE INDEX IF NOT EXISTS "projects_filename_idx" ON "projects" ("filename");
DO $$ BEGIN
 ALTER TABLE "projects_links" ADD CONSTRAINT "projects_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "projects"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "projects_tools" ADD CONSTRAINT "projects_tools_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "projects"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "projects" ADD CONSTRAINT "projects_preview_image_id_media_id_fk" FOREIGN KEY ("preview_image_id") REFERENCES "media"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
`)
};

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
await payload.db.drizzle.execute(sql`
 DROP TABLE "projects_links";
DROP TABLE "projects_tools";
DROP TABLE "projects";`)
};
