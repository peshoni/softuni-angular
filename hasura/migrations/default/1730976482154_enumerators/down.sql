
DELETE FROM "public"."genders" WHERE "value" = 'other';

DELETE FROM "public"."genders" WHERE "value" = 'female';

DELETE FROM "public"."genders" WHERE "value" = 'male';

DROP TABLE "public"."genders";

DELETE FROM "public"."project_statuses" WHERE "value" = 'done';

DELETE FROM "public"."project_statuses" WHERE "value" = 'in_progress';

DELETE FROM "public"."project_statuses" WHERE "value" = 'open';

DROP TABLE "public"."project_statuses";

DELETE FROM "public"."ticket_statuses" WHERE "value" = 'done';

DELETE FROM "public"."ticket_statuses" WHERE "value" = 'in_test';

DELETE FROM "public"."ticket_statuses" WHERE "value" = 'in_progress';

DELETE FROM "public"."ticket_statuses" WHERE "value" = 'new';

DROP TABLE "public"."ticket_statuses";

DELETE FROM "public"."user_roles" WHERE "value" = 'assignee';

DELETE FROM "public"."user_roles" WHERE "value" = 'reporter';

DELETE FROM "public"."user_roles" WHERE "value" = 'administrator';

DROP TABLE "public"."user_roles";
