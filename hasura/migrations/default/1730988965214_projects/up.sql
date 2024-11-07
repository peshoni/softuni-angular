
CREATE TABLE "public"."projects" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), "code" text NOT NULL, "label" text NOT NULL, "description" text NOT NULL, "owner_id" uuid NOT NULL, "status_id" uuid NOT NULL, PRIMARY KEY ("id") , UNIQUE ("code"));
CREATE OR REPLACE FUNCTION "public"."set_current_timestamp_updated_at"()
RETURNS TRIGGER AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER "set_public_projects_updated_at"
BEFORE UPDATE ON "public"."projects"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_projects_updated_at" ON "public"."projects"
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE EXTENSION IF NOT EXISTS pgcrypto;

alter table "public"."projects"
  add constraint "projects_owner_id_fkey"
  foreign key ("owner_id")
  references "public"."users"
  ("id") on update restrict on delete restrict;

ALTER TABLE "public"."projects" ALTER COLUMN "status_id" TYPE text;

alter table "public"."projects" rename column "status_id" to "status";

alter table "public"."projects"
  add constraint "projects_status_fkey"
  foreign key ("status")
  references "public"."project_statuses"
  ("value") on update restrict on delete restrict;
