alter table "public"."tickets" add constraint "tickets_code_key" unique (code);
alter table "public"."tickets" alter column "code" drop not null;
alter table "public"."tickets" add column "code" text;
