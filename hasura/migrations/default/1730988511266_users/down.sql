
alter table "public"."users" drop constraint "users_gender_fkey";

alter table "public"."users" drop constraint "users_role_fkey";

DROP TABLE "public"."users";
