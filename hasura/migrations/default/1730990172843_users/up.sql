
CREATE TABLE "public"."tickets" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), "status" text NOT NULL, "project_id" uuid NOT NULL, "code" text NOT NULL, "description" text NOT NULL, "reporter_id" uuid NOT NULL, "assignee_id" uuid, PRIMARY KEY ("id") , UNIQUE ("code"));
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
CREATE TRIGGER "set_public_tickets_updated_at"
BEFORE UPDATE ON "public"."tickets"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_tickets_updated_at" ON "public"."tickets"
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE EXTENSION IF NOT EXISTS pgcrypto;

alter table "public"."tickets"
  add constraint "tickets_status_fkey"
  foreign key ("status")
  references "public"."ticket_statuses"
  ("value") on update restrict on delete restrict;

alter table "public"."tickets"
  add constraint "tickets_project_id_fkey"
  foreign key ("project_id")
  references "public"."projects"
  ("id") on update restrict on delete restrict;

alter table "public"."tickets"
  add constraint "tickets_reporter_id_fkey"
  foreign key ("reporter_id")
  references "public"."users"
  ("id") on update restrict on delete restrict;

alter table "public"."tickets"
  add constraint "tickets_assignee_id_fkey"
  foreign key ("assignee_id")
  references "public"."users"
  ("id") on update restrict on delete restrict;

CREATE TABLE "public"."ticket_logs" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), "deleted" boolean NOT NULL DEFAULT false, "ticket_id" uuid NOT NULL, "user_id" uuid NOT NULL, "description" text NOT NULL, PRIMARY KEY ("id") );
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
CREATE TRIGGER "set_public_ticket_logs_updated_at"
BEFORE UPDATE ON "public"."ticket_logs"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_ticket_logs_updated_at" ON "public"."ticket_logs"
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE EXTENSION IF NOT EXISTS pgcrypto;

alter table "public"."ticket_logs"
  add constraint "ticket_logs_ticket_id_fkey"
  foreign key ("ticket_id")
  references "public"."tickets"
  ("id") on update restrict on delete restrict;

alter table "public"."ticket_logs"
  add constraint "ticket_logs_user_id_fkey"
  foreign key ("user_id")
  references "public"."users"
  ("id") on update restrict on delete restrict;
