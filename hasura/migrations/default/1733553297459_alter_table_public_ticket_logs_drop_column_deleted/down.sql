alter table "public"."ticket_logs" alter column "deleted" set default false;
alter table "public"."ticket_logs" alter column "deleted" drop not null;
alter table "public"."ticket_logs" add column "deleted" bool;
