
alter table "public"."projects" drop constraint "projects_status_fkey";

alter table "public"."projects" rename column "status" to "status_id";

ALTER TABLE "public"."projects" ALTER COLUMN "status_id" TYPE uuid;

alter table "public"."projects" drop constraint "projects_owner_id_fkey";

DROP TABLE "public"."projects";
