
CREATE TABLE "public"."user_roles" ("value" text NOT NULL, "content" text NOT NULL, PRIMARY KEY ("value") , UNIQUE ("value"));

INSERT INTO "public"."user_roles"("value", "content") VALUES (E'administrator', E'administrator');

INSERT INTO "public"."user_roles"("value", "content") VALUES (E'reporter', E'reporter');

INSERT INTO "public"."user_roles"("value", "content") VALUES (E'assignee', E'assignee');

CREATE TABLE "public"."ticket_statuses" ("value" text NOT NULL, "content" text NOT NULL, PRIMARY KEY ("value") , UNIQUE ("value"));

INSERT INTO "public"."ticket_statuses"("value", "content") VALUES (E'new', E'ticket-new');

INSERT INTO "public"."ticket_statuses"("value", "content") VALUES (E'in_progress', E'ticket-in-progress');

INSERT INTO "public"."ticket_statuses"("value", "content") VALUES (E'in_test', E'ticket-in-test');

INSERT INTO "public"."ticket_statuses"("value", "content") VALUES (E'done', E'ticket-done');

CREATE TABLE "public"."project_statuses" ("value" text NOT NULL, "content" text NOT NULL, PRIMARY KEY ("value") , UNIQUE ("value"));

INSERT INTO "public"."project_statuses"("value", "content") VALUES (E'open', E'project-open');

INSERT INTO "public"."project_statuses"("value", "content") VALUES (E'in_progress', E'project-in-progress');

INSERT INTO "public"."project_statuses"("value", "content") VALUES (E'done', E'project-done');

CREATE TABLE "public"."genders" ("value" text NOT NULL, "content" text NOT NULL, PRIMARY KEY ("value") , UNIQUE ("value"));

INSERT INTO "public"."genders"("value", "content") VALUES (E'male', E'gender-male');

INSERT INTO "public"."genders"("value", "content") VALUES (E'female', E'gender-female');

INSERT INTO "public"."genders"("value", "content") VALUES (E'other', E'gender-other');
