
alter table "public"."ticket_logs" drop constraint "ticket_logs_user_id_fkey";

alter table "public"."ticket_logs" drop constraint "ticket_logs_ticket_id_fkey";

DROP TABLE "public"."ticket_logs";

alter table "public"."tickets" drop constraint "tickets_assignee_id_fkey";

alter table "public"."tickets" drop constraint "tickets_reporter_id_fkey";

alter table "public"."tickets" drop constraint "tickets_project_id_fkey";

alter table "public"."tickets" drop constraint "tickets_status_fkey";

DROP TABLE "public"."tickets";
