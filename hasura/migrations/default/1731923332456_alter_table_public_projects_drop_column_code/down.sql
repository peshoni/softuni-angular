alter table "public"."projects" add constraint "projects_code_key" unique (code);
alter table "public"."projects" alter column "code" drop not null;
alter table "public"."projects" add column "code" text;
