import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  timestamptz: { input: any; output: any; }
  uuid: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** columns and relationships of "genders" */
export type Genders = {
  __typename?: 'genders';
  content: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

/** aggregated selection of "genders" */
export type Genders_Aggregate = {
  __typename?: 'genders_aggregate';
  aggregate?: Maybe<Genders_Aggregate_Fields>;
  nodes: Array<Genders>;
};

/** aggregate fields of "genders" */
export type Genders_Aggregate_Fields = {
  __typename?: 'genders_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Genders_Max_Fields>;
  min?: Maybe<Genders_Min_Fields>;
};


/** aggregate fields of "genders" */
export type Genders_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Genders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "genders". All fields are combined with a logical 'AND'. */
export type Genders_Bool_Exp = {
  _and?: InputMaybe<Array<Genders_Bool_Exp>>;
  _not?: InputMaybe<Genders_Bool_Exp>;
  _or?: InputMaybe<Array<Genders_Bool_Exp>>;
  content?: InputMaybe<String_Comparison_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "genders" */
export enum Genders_Constraint {
  /** unique or primary key constraint on columns "value" */
  GendersPkey = 'genders_pkey'
}

export enum Genders_Enum {
  /** gender-female */
  Female = 'female',
  /** gender-male */
  Male = 'male',
  /** gender-other */
  Other = 'other'
}

/** Boolean expression to compare columns of type "genders_enum". All fields are combined with logical 'AND'. */
export type Genders_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Genders_Enum>;
  _in?: InputMaybe<Array<Genders_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Genders_Enum>;
  _nin?: InputMaybe<Array<Genders_Enum>>;
};

/** input type for inserting data into table "genders" */
export type Genders_Insert_Input = {
  content?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Genders_Max_Fields = {
  __typename?: 'genders_max_fields';
  content?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Genders_Min_Fields = {
  __typename?: 'genders_min_fields';
  content?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "genders" */
export type Genders_Mutation_Response = {
  __typename?: 'genders_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Genders>;
};

/** input type for inserting object relation for remote table "genders" */
export type Genders_Obj_Rel_Insert_Input = {
  data: Genders_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Genders_On_Conflict>;
};

/** on_conflict condition type for table "genders" */
export type Genders_On_Conflict = {
  constraint: Genders_Constraint;
  update_columns?: Array<Genders_Update_Column>;
  where?: InputMaybe<Genders_Bool_Exp>;
};

/** Ordering options when selecting data from "genders". */
export type Genders_Order_By = {
  content?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: genders */
export type Genders_Pk_Columns_Input = {
  value: Scalars['String']['input'];
};

/** select columns of table "genders" */
export enum Genders_Select_Column {
  /** column name */
  Content = 'content',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "genders" */
export type Genders_Set_Input = {
  content?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "genders" */
export type Genders_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Genders_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Genders_Stream_Cursor_Value_Input = {
  content?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "genders" */
export enum Genders_Update_Column {
  /** column name */
  Content = 'content',
  /** column name */
  Value = 'value'
}

export type Genders_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Genders_Set_Input>;
  /** filter the rows which have to be updated */
  where: Genders_Bool_Exp;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "genders" */
  delete_genders?: Maybe<Genders_Mutation_Response>;
  /** delete single row from the table: "genders" */
  delete_genders_by_pk?: Maybe<Genders>;
  /** delete data from the table: "project_statuses" */
  delete_project_statuses?: Maybe<Project_Statuses_Mutation_Response>;
  /** delete single row from the table: "project_statuses" */
  delete_project_statuses_by_pk?: Maybe<Project_Statuses>;
  /** delete data from the table: "projects" */
  delete_projects?: Maybe<Projects_Mutation_Response>;
  /** delete single row from the table: "projects" */
  delete_projects_by_pk?: Maybe<Projects>;
  /** delete data from the table: "ticket_logs" */
  delete_ticket_logs?: Maybe<Ticket_Logs_Mutation_Response>;
  /** delete single row from the table: "ticket_logs" */
  delete_ticket_logs_by_pk?: Maybe<Ticket_Logs>;
  /** delete data from the table: "ticket_statuses" */
  delete_ticket_statuses?: Maybe<Ticket_Statuses_Mutation_Response>;
  /** delete single row from the table: "ticket_statuses" */
  delete_ticket_statuses_by_pk?: Maybe<Ticket_Statuses>;
  /** delete data from the table: "tickets" */
  delete_tickets?: Maybe<Tickets_Mutation_Response>;
  /** delete single row from the table: "tickets" */
  delete_tickets_by_pk?: Maybe<Tickets>;
  /** delete data from the table: "user_roles" */
  delete_user_roles?: Maybe<User_Roles_Mutation_Response>;
  /** delete single row from the table: "user_roles" */
  delete_user_roles_by_pk?: Maybe<User_Roles>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "genders" */
  insert_genders?: Maybe<Genders_Mutation_Response>;
  /** insert a single row into the table: "genders" */
  insert_genders_one?: Maybe<Genders>;
  /** insert data into the table: "project_statuses" */
  insert_project_statuses?: Maybe<Project_Statuses_Mutation_Response>;
  /** insert a single row into the table: "project_statuses" */
  insert_project_statuses_one?: Maybe<Project_Statuses>;
  /** insert data into the table: "projects" */
  insert_projects?: Maybe<Projects_Mutation_Response>;
  /** insert a single row into the table: "projects" */
  insert_projects_one?: Maybe<Projects>;
  /** insert data into the table: "ticket_logs" */
  insert_ticket_logs?: Maybe<Ticket_Logs_Mutation_Response>;
  /** insert a single row into the table: "ticket_logs" */
  insert_ticket_logs_one?: Maybe<Ticket_Logs>;
  /** insert data into the table: "ticket_statuses" */
  insert_ticket_statuses?: Maybe<Ticket_Statuses_Mutation_Response>;
  /** insert a single row into the table: "ticket_statuses" */
  insert_ticket_statuses_one?: Maybe<Ticket_Statuses>;
  /** insert data into the table: "tickets" */
  insert_tickets?: Maybe<Tickets_Mutation_Response>;
  /** insert a single row into the table: "tickets" */
  insert_tickets_one?: Maybe<Tickets>;
  /** insert data into the table: "user_roles" */
  insert_user_roles?: Maybe<User_Roles_Mutation_Response>;
  /** insert a single row into the table: "user_roles" */
  insert_user_roles_one?: Maybe<User_Roles>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "genders" */
  update_genders?: Maybe<Genders_Mutation_Response>;
  /** update single row of the table: "genders" */
  update_genders_by_pk?: Maybe<Genders>;
  /** update multiples rows of table: "genders" */
  update_genders_many?: Maybe<Array<Maybe<Genders_Mutation_Response>>>;
  /** update data of the table: "project_statuses" */
  update_project_statuses?: Maybe<Project_Statuses_Mutation_Response>;
  /** update single row of the table: "project_statuses" */
  update_project_statuses_by_pk?: Maybe<Project_Statuses>;
  /** update multiples rows of table: "project_statuses" */
  update_project_statuses_many?: Maybe<Array<Maybe<Project_Statuses_Mutation_Response>>>;
  /** update data of the table: "projects" */
  update_projects?: Maybe<Projects_Mutation_Response>;
  /** update single row of the table: "projects" */
  update_projects_by_pk?: Maybe<Projects>;
  /** update multiples rows of table: "projects" */
  update_projects_many?: Maybe<Array<Maybe<Projects_Mutation_Response>>>;
  /** update data of the table: "ticket_logs" */
  update_ticket_logs?: Maybe<Ticket_Logs_Mutation_Response>;
  /** update single row of the table: "ticket_logs" */
  update_ticket_logs_by_pk?: Maybe<Ticket_Logs>;
  /** update multiples rows of table: "ticket_logs" */
  update_ticket_logs_many?: Maybe<Array<Maybe<Ticket_Logs_Mutation_Response>>>;
  /** update data of the table: "ticket_statuses" */
  update_ticket_statuses?: Maybe<Ticket_Statuses_Mutation_Response>;
  /** update single row of the table: "ticket_statuses" */
  update_ticket_statuses_by_pk?: Maybe<Ticket_Statuses>;
  /** update multiples rows of table: "ticket_statuses" */
  update_ticket_statuses_many?: Maybe<Array<Maybe<Ticket_Statuses_Mutation_Response>>>;
  /** update data of the table: "tickets" */
  update_tickets?: Maybe<Tickets_Mutation_Response>;
  /** update single row of the table: "tickets" */
  update_tickets_by_pk?: Maybe<Tickets>;
  /** update multiples rows of table: "tickets" */
  update_tickets_many?: Maybe<Array<Maybe<Tickets_Mutation_Response>>>;
  /** update data of the table: "user_roles" */
  update_user_roles?: Maybe<User_Roles_Mutation_Response>;
  /** update single row of the table: "user_roles" */
  update_user_roles_by_pk?: Maybe<User_Roles>;
  /** update multiples rows of table: "user_roles" */
  update_user_roles_many?: Maybe<Array<Maybe<User_Roles_Mutation_Response>>>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_GendersArgs = {
  where: Genders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Genders_By_PkArgs = {
  value: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Project_StatusesArgs = {
  where: Project_Statuses_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Project_Statuses_By_PkArgs = {
  value: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_ProjectsArgs = {
  where: Projects_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Projects_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Ticket_LogsArgs = {
  where: Ticket_Logs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Ticket_Logs_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Ticket_StatusesArgs = {
  where: Ticket_Statuses_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Ticket_Statuses_By_PkArgs = {
  value: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_TicketsArgs = {
  where: Tickets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Tickets_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_User_RolesArgs = {
  where: User_Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Roles_By_PkArgs = {
  value: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootInsert_GendersArgs = {
  objects: Array<Genders_Insert_Input>;
  on_conflict?: InputMaybe<Genders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Genders_OneArgs = {
  object: Genders_Insert_Input;
  on_conflict?: InputMaybe<Genders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Project_StatusesArgs = {
  objects: Array<Project_Statuses_Insert_Input>;
  on_conflict?: InputMaybe<Project_Statuses_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Project_Statuses_OneArgs = {
  object: Project_Statuses_Insert_Input;
  on_conflict?: InputMaybe<Project_Statuses_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ProjectsArgs = {
  objects: Array<Projects_Insert_Input>;
  on_conflict?: InputMaybe<Projects_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Projects_OneArgs = {
  object: Projects_Insert_Input;
  on_conflict?: InputMaybe<Projects_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Ticket_LogsArgs = {
  objects: Array<Ticket_Logs_Insert_Input>;
  on_conflict?: InputMaybe<Ticket_Logs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Ticket_Logs_OneArgs = {
  object: Ticket_Logs_Insert_Input;
  on_conflict?: InputMaybe<Ticket_Logs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Ticket_StatusesArgs = {
  objects: Array<Ticket_Statuses_Insert_Input>;
  on_conflict?: InputMaybe<Ticket_Statuses_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Ticket_Statuses_OneArgs = {
  object: Ticket_Statuses_Insert_Input;
  on_conflict?: InputMaybe<Ticket_Statuses_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TicketsArgs = {
  objects: Array<Tickets_Insert_Input>;
  on_conflict?: InputMaybe<Tickets_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tickets_OneArgs = {
  object: Tickets_Insert_Input;
  on_conflict?: InputMaybe<Tickets_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_RolesArgs = {
  objects: Array<User_Roles_Insert_Input>;
  on_conflict?: InputMaybe<User_Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Roles_OneArgs = {
  object: User_Roles_Insert_Input;
  on_conflict?: InputMaybe<User_Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_GendersArgs = {
  _set?: InputMaybe<Genders_Set_Input>;
  where: Genders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Genders_By_PkArgs = {
  _set?: InputMaybe<Genders_Set_Input>;
  pk_columns: Genders_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Genders_ManyArgs = {
  updates: Array<Genders_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Project_StatusesArgs = {
  _set?: InputMaybe<Project_Statuses_Set_Input>;
  where: Project_Statuses_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Project_Statuses_By_PkArgs = {
  _set?: InputMaybe<Project_Statuses_Set_Input>;
  pk_columns: Project_Statuses_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Project_Statuses_ManyArgs = {
  updates: Array<Project_Statuses_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ProjectsArgs = {
  _set?: InputMaybe<Projects_Set_Input>;
  where: Projects_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Projects_By_PkArgs = {
  _set?: InputMaybe<Projects_Set_Input>;
  pk_columns: Projects_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Projects_ManyArgs = {
  updates: Array<Projects_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Ticket_LogsArgs = {
  _set?: InputMaybe<Ticket_Logs_Set_Input>;
  where: Ticket_Logs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Ticket_Logs_By_PkArgs = {
  _set?: InputMaybe<Ticket_Logs_Set_Input>;
  pk_columns: Ticket_Logs_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Ticket_Logs_ManyArgs = {
  updates: Array<Ticket_Logs_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Ticket_StatusesArgs = {
  _set?: InputMaybe<Ticket_Statuses_Set_Input>;
  where: Ticket_Statuses_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Ticket_Statuses_By_PkArgs = {
  _set?: InputMaybe<Ticket_Statuses_Set_Input>;
  pk_columns: Ticket_Statuses_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Ticket_Statuses_ManyArgs = {
  updates: Array<Ticket_Statuses_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_TicketsArgs = {
  _set?: InputMaybe<Tickets_Set_Input>;
  where: Tickets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Tickets_By_PkArgs = {
  _set?: InputMaybe<Tickets_Set_Input>;
  pk_columns: Tickets_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Tickets_ManyArgs = {
  updates: Array<Tickets_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_User_RolesArgs = {
  _set?: InputMaybe<User_Roles_Set_Input>;
  where: User_Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Roles_By_PkArgs = {
  _set?: InputMaybe<User_Roles_Set_Input>;
  pk_columns: User_Roles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_Roles_ManyArgs = {
  updates: Array<User_Roles_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _inc?: InputMaybe<Users_Inc_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _inc?: InputMaybe<Users_Inc_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "project_statuses" */
export type Project_Statuses = {
  __typename?: 'project_statuses';
  content: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

/** aggregated selection of "project_statuses" */
export type Project_Statuses_Aggregate = {
  __typename?: 'project_statuses_aggregate';
  aggregate?: Maybe<Project_Statuses_Aggregate_Fields>;
  nodes: Array<Project_Statuses>;
};

/** aggregate fields of "project_statuses" */
export type Project_Statuses_Aggregate_Fields = {
  __typename?: 'project_statuses_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Project_Statuses_Max_Fields>;
  min?: Maybe<Project_Statuses_Min_Fields>;
};


/** aggregate fields of "project_statuses" */
export type Project_Statuses_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Project_Statuses_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "project_statuses". All fields are combined with a logical 'AND'. */
export type Project_Statuses_Bool_Exp = {
  _and?: InputMaybe<Array<Project_Statuses_Bool_Exp>>;
  _not?: InputMaybe<Project_Statuses_Bool_Exp>;
  _or?: InputMaybe<Array<Project_Statuses_Bool_Exp>>;
  content?: InputMaybe<String_Comparison_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "project_statuses" */
export enum Project_Statuses_Constraint {
  /** unique or primary key constraint on columns "value" */
  ProjectStatusesPkey = 'project_statuses_pkey'
}

export enum Project_Statuses_Enum {
  /** project-done */
  Done = 'done',
  /** project-in-progress */
  InProgress = 'in_progress',
  /** project-open */
  Open = 'open'
}

/** Boolean expression to compare columns of type "project_statuses_enum". All fields are combined with logical 'AND'. */
export type Project_Statuses_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Project_Statuses_Enum>;
  _in?: InputMaybe<Array<Project_Statuses_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Project_Statuses_Enum>;
  _nin?: InputMaybe<Array<Project_Statuses_Enum>>;
};

/** input type for inserting data into table "project_statuses" */
export type Project_Statuses_Insert_Input = {
  content?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Project_Statuses_Max_Fields = {
  __typename?: 'project_statuses_max_fields';
  content?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Project_Statuses_Min_Fields = {
  __typename?: 'project_statuses_min_fields';
  content?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "project_statuses" */
export type Project_Statuses_Mutation_Response = {
  __typename?: 'project_statuses_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Project_Statuses>;
};

/** on_conflict condition type for table "project_statuses" */
export type Project_Statuses_On_Conflict = {
  constraint: Project_Statuses_Constraint;
  update_columns?: Array<Project_Statuses_Update_Column>;
  where?: InputMaybe<Project_Statuses_Bool_Exp>;
};

/** Ordering options when selecting data from "project_statuses". */
export type Project_Statuses_Order_By = {
  content?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: project_statuses */
export type Project_Statuses_Pk_Columns_Input = {
  value: Scalars['String']['input'];
};

/** select columns of table "project_statuses" */
export enum Project_Statuses_Select_Column {
  /** column name */
  Content = 'content',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "project_statuses" */
export type Project_Statuses_Set_Input = {
  content?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "project_statuses" */
export type Project_Statuses_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Project_Statuses_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Project_Statuses_Stream_Cursor_Value_Input = {
  content?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "project_statuses" */
export enum Project_Statuses_Update_Column {
  /** column name */
  Content = 'content',
  /** column name */
  Value = 'value'
}

export type Project_Statuses_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Project_Statuses_Set_Input>;
  /** filter the rows which have to be updated */
  where: Project_Statuses_Bool_Exp;
};

/** columns and relationships of "projects" */
export type Projects = {
  __typename?: 'projects';
  created_at: Scalars['timestamptz']['output'];
  description: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  label: Scalars['String']['output'];
  owner_id: Scalars['uuid']['output'];
  status: Project_Statuses_Enum;
  /** fetch data from the table: "tickets" */
  tickets: Array<Tickets>;
  /** fetch aggregated fields from the table: "tickets" */
  tickets_aggregate: Tickets_Aggregate;
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  user: Users;
};


/** columns and relationships of "projects" */
export type ProjectsTicketsArgs = {
  distinct_on?: InputMaybe<Array<Tickets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tickets_Order_By>>;
  where?: InputMaybe<Tickets_Bool_Exp>;
};


/** columns and relationships of "projects" */
export type ProjectsTickets_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tickets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tickets_Order_By>>;
  where?: InputMaybe<Tickets_Bool_Exp>;
};

/** aggregated selection of "projects" */
export type Projects_Aggregate = {
  __typename?: 'projects_aggregate';
  aggregate?: Maybe<Projects_Aggregate_Fields>;
  nodes: Array<Projects>;
};

/** aggregate fields of "projects" */
export type Projects_Aggregate_Fields = {
  __typename?: 'projects_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Projects_Max_Fields>;
  min?: Maybe<Projects_Min_Fields>;
};


/** aggregate fields of "projects" */
export type Projects_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Projects_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "projects". All fields are combined with a logical 'AND'. */
export type Projects_Bool_Exp = {
  _and?: InputMaybe<Array<Projects_Bool_Exp>>;
  _not?: InputMaybe<Projects_Bool_Exp>;
  _or?: InputMaybe<Array<Projects_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  label?: InputMaybe<String_Comparison_Exp>;
  owner_id?: InputMaybe<Uuid_Comparison_Exp>;
  status?: InputMaybe<Project_Statuses_Enum_Comparison_Exp>;
  tickets?: InputMaybe<Tickets_Bool_Exp>;
  tickets_aggregate?: InputMaybe<Tickets_Aggregate_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "projects" */
export enum Projects_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProjectsPkey = 'projects_pkey'
}

/** input type for inserting data into table "projects" */
export type Projects_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  owner_id?: InputMaybe<Scalars['uuid']['input']>;
  status?: InputMaybe<Project_Statuses_Enum>;
  tickets?: InputMaybe<Tickets_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Projects_Max_Fields = {
  __typename?: 'projects_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  owner_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Projects_Min_Fields = {
  __typename?: 'projects_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  owner_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "projects" */
export type Projects_Mutation_Response = {
  __typename?: 'projects_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Projects>;
};

/** on_conflict condition type for table "projects" */
export type Projects_On_Conflict = {
  constraint: Projects_Constraint;
  update_columns?: Array<Projects_Update_Column>;
  where?: InputMaybe<Projects_Bool_Exp>;
};

/** Ordering options when selecting data from "projects". */
export type Projects_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  label?: InputMaybe<Order_By>;
  owner_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  tickets_aggregate?: InputMaybe<Tickets_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
};

/** primary key columns input for table: projects */
export type Projects_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "projects" */
export enum Projects_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Label = 'label',
  /** column name */
  OwnerId = 'owner_id',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "projects" */
export type Projects_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  owner_id?: InputMaybe<Scalars['uuid']['input']>;
  status?: InputMaybe<Project_Statuses_Enum>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "projects" */
export type Projects_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Projects_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Projects_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  owner_id?: InputMaybe<Scalars['uuid']['input']>;
  status?: InputMaybe<Project_Statuses_Enum>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "projects" */
export enum Projects_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Label = 'label',
  /** column name */
  OwnerId = 'owner_id',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Projects_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Projects_Set_Input>;
  /** filter the rows which have to be updated */
  where: Projects_Bool_Exp;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "genders" */
  genders: Array<Genders>;
  /** fetch aggregated fields from the table: "genders" */
  genders_aggregate: Genders_Aggregate;
  /** fetch data from the table: "genders" using primary key columns */
  genders_by_pk?: Maybe<Genders>;
  /** fetch data from the table: "project_statuses" */
  project_statuses: Array<Project_Statuses>;
  /** fetch aggregated fields from the table: "project_statuses" */
  project_statuses_aggregate: Project_Statuses_Aggregate;
  /** fetch data from the table: "project_statuses" using primary key columns */
  project_statuses_by_pk?: Maybe<Project_Statuses>;
  /** fetch data from the table: "projects" */
  projects: Array<Projects>;
  /** fetch aggregated fields from the table: "projects" */
  projects_aggregate: Projects_Aggregate;
  /** fetch data from the table: "projects" using primary key columns */
  projects_by_pk?: Maybe<Projects>;
  /** An array relationship */
  ticket_logs: Array<Ticket_Logs>;
  /** An aggregate relationship */
  ticket_logs_aggregate: Ticket_Logs_Aggregate;
  /** fetch data from the table: "ticket_logs" using primary key columns */
  ticket_logs_by_pk?: Maybe<Ticket_Logs>;
  /** fetch data from the table: "ticket_statuses" */
  ticket_statuses: Array<Ticket_Statuses>;
  /** fetch aggregated fields from the table: "ticket_statuses" */
  ticket_statuses_aggregate: Ticket_Statuses_Aggregate;
  /** fetch data from the table: "ticket_statuses" using primary key columns */
  ticket_statuses_by_pk?: Maybe<Ticket_Statuses>;
  /** fetch data from the table: "tickets" */
  tickets: Array<Tickets>;
  /** fetch aggregated fields from the table: "tickets" */
  tickets_aggregate: Tickets_Aggregate;
  /** fetch data from the table: "tickets" using primary key columns */
  tickets_by_pk?: Maybe<Tickets>;
  /** fetch data from the table: "user_roles" */
  user_roles: Array<User_Roles>;
  /** fetch aggregated fields from the table: "user_roles" */
  user_roles_aggregate: User_Roles_Aggregate;
  /** fetch data from the table: "user_roles" using primary key columns */
  user_roles_by_pk?: Maybe<User_Roles>;
  /** An array relationship */
  users: Array<Users>;
  /** An aggregate relationship */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Query_RootGendersArgs = {
  distinct_on?: InputMaybe<Array<Genders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Genders_Order_By>>;
  where?: InputMaybe<Genders_Bool_Exp>;
};


export type Query_RootGenders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Genders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Genders_Order_By>>;
  where?: InputMaybe<Genders_Bool_Exp>;
};


export type Query_RootGenders_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Query_RootProject_StatusesArgs = {
  distinct_on?: InputMaybe<Array<Project_Statuses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Project_Statuses_Order_By>>;
  where?: InputMaybe<Project_Statuses_Bool_Exp>;
};


export type Query_RootProject_Statuses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Project_Statuses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Project_Statuses_Order_By>>;
  where?: InputMaybe<Project_Statuses_Bool_Exp>;
};


export type Query_RootProject_Statuses_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Query_RootProjectsArgs = {
  distinct_on?: InputMaybe<Array<Projects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Projects_Order_By>>;
  where?: InputMaybe<Projects_Bool_Exp>;
};


export type Query_RootProjects_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Projects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Projects_Order_By>>;
  where?: InputMaybe<Projects_Bool_Exp>;
};


export type Query_RootProjects_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootTicket_LogsArgs = {
  distinct_on?: InputMaybe<Array<Ticket_Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ticket_Logs_Order_By>>;
  where?: InputMaybe<Ticket_Logs_Bool_Exp>;
};


export type Query_RootTicket_Logs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ticket_Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ticket_Logs_Order_By>>;
  where?: InputMaybe<Ticket_Logs_Bool_Exp>;
};


export type Query_RootTicket_Logs_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootTicket_StatusesArgs = {
  distinct_on?: InputMaybe<Array<Ticket_Statuses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ticket_Statuses_Order_By>>;
  where?: InputMaybe<Ticket_Statuses_Bool_Exp>;
};


export type Query_RootTicket_Statuses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ticket_Statuses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ticket_Statuses_Order_By>>;
  where?: InputMaybe<Ticket_Statuses_Bool_Exp>;
};


export type Query_RootTicket_Statuses_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Query_RootTicketsArgs = {
  distinct_on?: InputMaybe<Array<Tickets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tickets_Order_By>>;
  where?: InputMaybe<Tickets_Bool_Exp>;
};


export type Query_RootTickets_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tickets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tickets_Order_By>>;
  where?: InputMaybe<Tickets_Bool_Exp>;
};


export type Query_RootTickets_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootUser_RolesArgs = {
  distinct_on?: InputMaybe<Array<User_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Roles_Order_By>>;
  where?: InputMaybe<User_Roles_Bool_Exp>;
};


export type Query_RootUser_Roles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Roles_Order_By>>;
  where?: InputMaybe<User_Roles_Bool_Exp>;
};


export type Query_RootUser_Roles_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['uuid']['input'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "genders" */
  genders: Array<Genders>;
  /** fetch aggregated fields from the table: "genders" */
  genders_aggregate: Genders_Aggregate;
  /** fetch data from the table: "genders" using primary key columns */
  genders_by_pk?: Maybe<Genders>;
  /** fetch data from the table in a streaming manner: "genders" */
  genders_stream: Array<Genders>;
  /** fetch data from the table: "project_statuses" */
  project_statuses: Array<Project_Statuses>;
  /** fetch aggregated fields from the table: "project_statuses" */
  project_statuses_aggregate: Project_Statuses_Aggregate;
  /** fetch data from the table: "project_statuses" using primary key columns */
  project_statuses_by_pk?: Maybe<Project_Statuses>;
  /** fetch data from the table in a streaming manner: "project_statuses" */
  project_statuses_stream: Array<Project_Statuses>;
  /** fetch data from the table: "projects" */
  projects: Array<Projects>;
  /** fetch aggregated fields from the table: "projects" */
  projects_aggregate: Projects_Aggregate;
  /** fetch data from the table: "projects" using primary key columns */
  projects_by_pk?: Maybe<Projects>;
  /** fetch data from the table in a streaming manner: "projects" */
  projects_stream: Array<Projects>;
  /** An array relationship */
  ticket_logs: Array<Ticket_Logs>;
  /** An aggregate relationship */
  ticket_logs_aggregate: Ticket_Logs_Aggregate;
  /** fetch data from the table: "ticket_logs" using primary key columns */
  ticket_logs_by_pk?: Maybe<Ticket_Logs>;
  /** fetch data from the table in a streaming manner: "ticket_logs" */
  ticket_logs_stream: Array<Ticket_Logs>;
  /** fetch data from the table: "ticket_statuses" */
  ticket_statuses: Array<Ticket_Statuses>;
  /** fetch aggregated fields from the table: "ticket_statuses" */
  ticket_statuses_aggregate: Ticket_Statuses_Aggregate;
  /** fetch data from the table: "ticket_statuses" using primary key columns */
  ticket_statuses_by_pk?: Maybe<Ticket_Statuses>;
  /** fetch data from the table in a streaming manner: "ticket_statuses" */
  ticket_statuses_stream: Array<Ticket_Statuses>;
  /** fetch data from the table: "tickets" */
  tickets: Array<Tickets>;
  /** fetch aggregated fields from the table: "tickets" */
  tickets_aggregate: Tickets_Aggregate;
  /** fetch data from the table: "tickets" using primary key columns */
  tickets_by_pk?: Maybe<Tickets>;
  /** fetch data from the table in a streaming manner: "tickets" */
  tickets_stream: Array<Tickets>;
  /** fetch data from the table: "user_roles" */
  user_roles: Array<User_Roles>;
  /** fetch aggregated fields from the table: "user_roles" */
  user_roles_aggregate: User_Roles_Aggregate;
  /** fetch data from the table: "user_roles" using primary key columns */
  user_roles_by_pk?: Maybe<User_Roles>;
  /** fetch data from the table in a streaming manner: "user_roles" */
  user_roles_stream: Array<User_Roles>;
  /** An array relationship */
  users: Array<Users>;
  /** An aggregate relationship */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
};


export type Subscription_RootGendersArgs = {
  distinct_on?: InputMaybe<Array<Genders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Genders_Order_By>>;
  where?: InputMaybe<Genders_Bool_Exp>;
};


export type Subscription_RootGenders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Genders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Genders_Order_By>>;
  where?: InputMaybe<Genders_Bool_Exp>;
};


export type Subscription_RootGenders_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Subscription_RootGenders_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Genders_Stream_Cursor_Input>>;
  where?: InputMaybe<Genders_Bool_Exp>;
};


export type Subscription_RootProject_StatusesArgs = {
  distinct_on?: InputMaybe<Array<Project_Statuses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Project_Statuses_Order_By>>;
  where?: InputMaybe<Project_Statuses_Bool_Exp>;
};


export type Subscription_RootProject_Statuses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Project_Statuses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Project_Statuses_Order_By>>;
  where?: InputMaybe<Project_Statuses_Bool_Exp>;
};


export type Subscription_RootProject_Statuses_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Subscription_RootProject_Statuses_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Project_Statuses_Stream_Cursor_Input>>;
  where?: InputMaybe<Project_Statuses_Bool_Exp>;
};


export type Subscription_RootProjectsArgs = {
  distinct_on?: InputMaybe<Array<Projects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Projects_Order_By>>;
  where?: InputMaybe<Projects_Bool_Exp>;
};


export type Subscription_RootProjects_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Projects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Projects_Order_By>>;
  where?: InputMaybe<Projects_Bool_Exp>;
};


export type Subscription_RootProjects_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootProjects_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Projects_Stream_Cursor_Input>>;
  where?: InputMaybe<Projects_Bool_Exp>;
};


export type Subscription_RootTicket_LogsArgs = {
  distinct_on?: InputMaybe<Array<Ticket_Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ticket_Logs_Order_By>>;
  where?: InputMaybe<Ticket_Logs_Bool_Exp>;
};


export type Subscription_RootTicket_Logs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ticket_Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ticket_Logs_Order_By>>;
  where?: InputMaybe<Ticket_Logs_Bool_Exp>;
};


export type Subscription_RootTicket_Logs_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootTicket_Logs_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Ticket_Logs_Stream_Cursor_Input>>;
  where?: InputMaybe<Ticket_Logs_Bool_Exp>;
};


export type Subscription_RootTicket_StatusesArgs = {
  distinct_on?: InputMaybe<Array<Ticket_Statuses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ticket_Statuses_Order_By>>;
  where?: InputMaybe<Ticket_Statuses_Bool_Exp>;
};


export type Subscription_RootTicket_Statuses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ticket_Statuses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ticket_Statuses_Order_By>>;
  where?: InputMaybe<Ticket_Statuses_Bool_Exp>;
};


export type Subscription_RootTicket_Statuses_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Subscription_RootTicket_Statuses_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Ticket_Statuses_Stream_Cursor_Input>>;
  where?: InputMaybe<Ticket_Statuses_Bool_Exp>;
};


export type Subscription_RootTicketsArgs = {
  distinct_on?: InputMaybe<Array<Tickets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tickets_Order_By>>;
  where?: InputMaybe<Tickets_Bool_Exp>;
};


export type Subscription_RootTickets_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tickets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tickets_Order_By>>;
  where?: InputMaybe<Tickets_Bool_Exp>;
};


export type Subscription_RootTickets_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootTickets_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Tickets_Stream_Cursor_Input>>;
  where?: InputMaybe<Tickets_Bool_Exp>;
};


export type Subscription_RootUser_RolesArgs = {
  distinct_on?: InputMaybe<Array<User_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Roles_Order_By>>;
  where?: InputMaybe<User_Roles_Bool_Exp>;
};


export type Subscription_RootUser_Roles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Roles_Order_By>>;
  where?: InputMaybe<User_Roles_Bool_Exp>;
};


export type Subscription_RootUser_Roles_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Subscription_RootUser_Roles_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<User_Roles_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Roles_Bool_Exp>;
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** columns and relationships of "ticket_logs" */
export type Ticket_Logs = {
  __typename?: 'ticket_logs';
  created_at: Scalars['timestamptz']['output'];
  deleted: Scalars['Boolean']['output'];
  description: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  /** An object relationship */
  ticket: Tickets;
  ticket_id: Scalars['uuid']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid']['output'];
};

/** aggregated selection of "ticket_logs" */
export type Ticket_Logs_Aggregate = {
  __typename?: 'ticket_logs_aggregate';
  aggregate?: Maybe<Ticket_Logs_Aggregate_Fields>;
  nodes: Array<Ticket_Logs>;
};

export type Ticket_Logs_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Ticket_Logs_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Ticket_Logs_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Ticket_Logs_Aggregate_Bool_Exp_Count>;
};

export type Ticket_Logs_Aggregate_Bool_Exp_Bool_And = {
  arguments: Ticket_Logs_Select_Column_Ticket_Logs_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Ticket_Logs_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Ticket_Logs_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Ticket_Logs_Select_Column_Ticket_Logs_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Ticket_Logs_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Ticket_Logs_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Ticket_Logs_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Ticket_Logs_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "ticket_logs" */
export type Ticket_Logs_Aggregate_Fields = {
  __typename?: 'ticket_logs_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Ticket_Logs_Max_Fields>;
  min?: Maybe<Ticket_Logs_Min_Fields>;
};


/** aggregate fields of "ticket_logs" */
export type Ticket_Logs_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Ticket_Logs_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "ticket_logs" */
export type Ticket_Logs_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Ticket_Logs_Max_Order_By>;
  min?: InputMaybe<Ticket_Logs_Min_Order_By>;
};

/** input type for inserting array relation for remote table "ticket_logs" */
export type Ticket_Logs_Arr_Rel_Insert_Input = {
  data: Array<Ticket_Logs_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Ticket_Logs_On_Conflict>;
};

/** Boolean expression to filter rows from the table "ticket_logs". All fields are combined with a logical 'AND'. */
export type Ticket_Logs_Bool_Exp = {
  _and?: InputMaybe<Array<Ticket_Logs_Bool_Exp>>;
  _not?: InputMaybe<Ticket_Logs_Bool_Exp>;
  _or?: InputMaybe<Array<Ticket_Logs_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deleted?: InputMaybe<Boolean_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  ticket?: InputMaybe<Tickets_Bool_Exp>;
  ticket_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "ticket_logs" */
export enum Ticket_Logs_Constraint {
  /** unique or primary key constraint on columns "id" */
  TicketLogsPkey = 'ticket_logs_pkey'
}

/** input type for inserting data into table "ticket_logs" */
export type Ticket_Logs_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  ticket?: InputMaybe<Tickets_Obj_Rel_Insert_Input>;
  ticket_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Ticket_Logs_Max_Fields = {
  __typename?: 'ticket_logs_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  ticket_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "ticket_logs" */
export type Ticket_Logs_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  ticket_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Ticket_Logs_Min_Fields = {
  __typename?: 'ticket_logs_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  ticket_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "ticket_logs" */
export type Ticket_Logs_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  ticket_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "ticket_logs" */
export type Ticket_Logs_Mutation_Response = {
  __typename?: 'ticket_logs_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Ticket_Logs>;
};

/** on_conflict condition type for table "ticket_logs" */
export type Ticket_Logs_On_Conflict = {
  constraint: Ticket_Logs_Constraint;
  update_columns?: Array<Ticket_Logs_Update_Column>;
  where?: InputMaybe<Ticket_Logs_Bool_Exp>;
};

/** Ordering options when selecting data from "ticket_logs". */
export type Ticket_Logs_Order_By = {
  created_at?: InputMaybe<Order_By>;
  deleted?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  ticket?: InputMaybe<Tickets_Order_By>;
  ticket_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: ticket_logs */
export type Ticket_Logs_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "ticket_logs" */
export enum Ticket_Logs_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Deleted = 'deleted',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  TicketId = 'ticket_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** select "ticket_logs_aggregate_bool_exp_bool_and_arguments_columns" columns of table "ticket_logs" */
export enum Ticket_Logs_Select_Column_Ticket_Logs_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Deleted = 'deleted'
}

/** select "ticket_logs_aggregate_bool_exp_bool_or_arguments_columns" columns of table "ticket_logs" */
export enum Ticket_Logs_Select_Column_Ticket_Logs_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Deleted = 'deleted'
}

/** input type for updating data in table "ticket_logs" */
export type Ticket_Logs_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  ticket_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "ticket_logs" */
export type Ticket_Logs_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Ticket_Logs_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Ticket_Logs_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  ticket_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "ticket_logs" */
export enum Ticket_Logs_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Deleted = 'deleted',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  TicketId = 'ticket_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

export type Ticket_Logs_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Ticket_Logs_Set_Input>;
  /** filter the rows which have to be updated */
  where: Ticket_Logs_Bool_Exp;
};

/** columns and relationships of "ticket_statuses" */
export type Ticket_Statuses = {
  __typename?: 'ticket_statuses';
  content: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

/** aggregated selection of "ticket_statuses" */
export type Ticket_Statuses_Aggregate = {
  __typename?: 'ticket_statuses_aggregate';
  aggregate?: Maybe<Ticket_Statuses_Aggregate_Fields>;
  nodes: Array<Ticket_Statuses>;
};

/** aggregate fields of "ticket_statuses" */
export type Ticket_Statuses_Aggregate_Fields = {
  __typename?: 'ticket_statuses_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Ticket_Statuses_Max_Fields>;
  min?: Maybe<Ticket_Statuses_Min_Fields>;
};


/** aggregate fields of "ticket_statuses" */
export type Ticket_Statuses_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Ticket_Statuses_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "ticket_statuses". All fields are combined with a logical 'AND'. */
export type Ticket_Statuses_Bool_Exp = {
  _and?: InputMaybe<Array<Ticket_Statuses_Bool_Exp>>;
  _not?: InputMaybe<Ticket_Statuses_Bool_Exp>;
  _or?: InputMaybe<Array<Ticket_Statuses_Bool_Exp>>;
  content?: InputMaybe<String_Comparison_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "ticket_statuses" */
export enum Ticket_Statuses_Constraint {
  /** unique or primary key constraint on columns "value" */
  TicketStatusesPkey = 'ticket_statuses_pkey'
}

export enum Ticket_Statuses_Enum {
  /** ticket-done */
  Done = 'done',
  /** ticket-in-progress */
  InProgress = 'in_progress',
  /** ticket-in-test */
  InTest = 'in_test',
  /** ticket-new */
  New = 'new'
}

/** Boolean expression to compare columns of type "ticket_statuses_enum". All fields are combined with logical 'AND'. */
export type Ticket_Statuses_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Ticket_Statuses_Enum>;
  _in?: InputMaybe<Array<Ticket_Statuses_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Ticket_Statuses_Enum>;
  _nin?: InputMaybe<Array<Ticket_Statuses_Enum>>;
};

/** input type for inserting data into table "ticket_statuses" */
export type Ticket_Statuses_Insert_Input = {
  content?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Ticket_Statuses_Max_Fields = {
  __typename?: 'ticket_statuses_max_fields';
  content?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Ticket_Statuses_Min_Fields = {
  __typename?: 'ticket_statuses_min_fields';
  content?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "ticket_statuses" */
export type Ticket_Statuses_Mutation_Response = {
  __typename?: 'ticket_statuses_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Ticket_Statuses>;
};

/** on_conflict condition type for table "ticket_statuses" */
export type Ticket_Statuses_On_Conflict = {
  constraint: Ticket_Statuses_Constraint;
  update_columns?: Array<Ticket_Statuses_Update_Column>;
  where?: InputMaybe<Ticket_Statuses_Bool_Exp>;
};

/** Ordering options when selecting data from "ticket_statuses". */
export type Ticket_Statuses_Order_By = {
  content?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: ticket_statuses */
export type Ticket_Statuses_Pk_Columns_Input = {
  value: Scalars['String']['input'];
};

/** select columns of table "ticket_statuses" */
export enum Ticket_Statuses_Select_Column {
  /** column name */
  Content = 'content',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "ticket_statuses" */
export type Ticket_Statuses_Set_Input = {
  content?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "ticket_statuses" */
export type Ticket_Statuses_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Ticket_Statuses_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Ticket_Statuses_Stream_Cursor_Value_Input = {
  content?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "ticket_statuses" */
export enum Ticket_Statuses_Update_Column {
  /** column name */
  Content = 'content',
  /** column name */
  Value = 'value'
}

export type Ticket_Statuses_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Ticket_Statuses_Set_Input>;
  /** filter the rows which have to be updated */
  where: Ticket_Statuses_Bool_Exp;
};

/** columns and relationships of "tickets" */
export type Tickets = {
  __typename?: 'tickets';
  assignee_id?: Maybe<Scalars['uuid']['output']>;
  created_at: Scalars['timestamptz']['output'];
  description: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  project_id: Scalars['uuid']['output'];
  reporter_id: Scalars['uuid']['output'];
  status: Ticket_Statuses_Enum;
  /** An array relationship */
  ticket_logs: Array<Ticket_Logs>;
  /** An aggregate relationship */
  ticket_logs_aggregate: Ticket_Logs_Aggregate;
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  user?: Maybe<Users>;
  /** An object relationship */
  userByReporterId: Users;
};


/** columns and relationships of "tickets" */
export type TicketsTicket_LogsArgs = {
  distinct_on?: InputMaybe<Array<Ticket_Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ticket_Logs_Order_By>>;
  where?: InputMaybe<Ticket_Logs_Bool_Exp>;
};


/** columns and relationships of "tickets" */
export type TicketsTicket_Logs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ticket_Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ticket_Logs_Order_By>>;
  where?: InputMaybe<Ticket_Logs_Bool_Exp>;
};

/** aggregated selection of "tickets" */
export type Tickets_Aggregate = {
  __typename?: 'tickets_aggregate';
  aggregate?: Maybe<Tickets_Aggregate_Fields>;
  nodes: Array<Tickets>;
};

export type Tickets_Aggregate_Bool_Exp = {
  count?: InputMaybe<Tickets_Aggregate_Bool_Exp_Count>;
};

export type Tickets_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Tickets_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Tickets_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "tickets" */
export type Tickets_Aggregate_Fields = {
  __typename?: 'tickets_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Tickets_Max_Fields>;
  min?: Maybe<Tickets_Min_Fields>;
};


/** aggregate fields of "tickets" */
export type Tickets_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Tickets_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "tickets" */
export type Tickets_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Tickets_Max_Order_By>;
  min?: InputMaybe<Tickets_Min_Order_By>;
};

/** input type for inserting array relation for remote table "tickets" */
export type Tickets_Arr_Rel_Insert_Input = {
  data: Array<Tickets_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Tickets_On_Conflict>;
};

/** Boolean expression to filter rows from the table "tickets". All fields are combined with a logical 'AND'. */
export type Tickets_Bool_Exp = {
  _and?: InputMaybe<Array<Tickets_Bool_Exp>>;
  _not?: InputMaybe<Tickets_Bool_Exp>;
  _or?: InputMaybe<Array<Tickets_Bool_Exp>>;
  assignee_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  project_id?: InputMaybe<Uuid_Comparison_Exp>;
  reporter_id?: InputMaybe<Uuid_Comparison_Exp>;
  status?: InputMaybe<Ticket_Statuses_Enum_Comparison_Exp>;
  ticket_logs?: InputMaybe<Ticket_Logs_Bool_Exp>;
  ticket_logs_aggregate?: InputMaybe<Ticket_Logs_Aggregate_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userByReporterId?: InputMaybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "tickets" */
export enum Tickets_Constraint {
  /** unique or primary key constraint on columns "id" */
  TicketsPkey = 'tickets_pkey'
}

/** input type for inserting data into table "tickets" */
export type Tickets_Insert_Input = {
  assignee_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  project_id?: InputMaybe<Scalars['uuid']['input']>;
  reporter_id?: InputMaybe<Scalars['uuid']['input']>;
  status?: InputMaybe<Ticket_Statuses_Enum>;
  ticket_logs?: InputMaybe<Ticket_Logs_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userByReporterId?: InputMaybe<Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Tickets_Max_Fields = {
  __typename?: 'tickets_max_fields';
  assignee_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  project_id?: Maybe<Scalars['uuid']['output']>;
  reporter_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "tickets" */
export type Tickets_Max_Order_By = {
  assignee_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  project_id?: InputMaybe<Order_By>;
  reporter_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Tickets_Min_Fields = {
  __typename?: 'tickets_min_fields';
  assignee_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  project_id?: Maybe<Scalars['uuid']['output']>;
  reporter_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "tickets" */
export type Tickets_Min_Order_By = {
  assignee_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  project_id?: InputMaybe<Order_By>;
  reporter_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "tickets" */
export type Tickets_Mutation_Response = {
  __typename?: 'tickets_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Tickets>;
};

/** input type for inserting object relation for remote table "tickets" */
export type Tickets_Obj_Rel_Insert_Input = {
  data: Tickets_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Tickets_On_Conflict>;
};

/** on_conflict condition type for table "tickets" */
export type Tickets_On_Conflict = {
  constraint: Tickets_Constraint;
  update_columns?: Array<Tickets_Update_Column>;
  where?: InputMaybe<Tickets_Bool_Exp>;
};

/** Ordering options when selecting data from "tickets". */
export type Tickets_Order_By = {
  assignee_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  project_id?: InputMaybe<Order_By>;
  reporter_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  ticket_logs_aggregate?: InputMaybe<Ticket_Logs_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userByReporterId?: InputMaybe<Users_Order_By>;
};

/** primary key columns input for table: tickets */
export type Tickets_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "tickets" */
export enum Tickets_Select_Column {
  /** column name */
  AssigneeId = 'assignee_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  ProjectId = 'project_id',
  /** column name */
  ReporterId = 'reporter_id',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "tickets" */
export type Tickets_Set_Input = {
  assignee_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  project_id?: InputMaybe<Scalars['uuid']['input']>;
  reporter_id?: InputMaybe<Scalars['uuid']['input']>;
  status?: InputMaybe<Ticket_Statuses_Enum>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "tickets" */
export type Tickets_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Tickets_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Tickets_Stream_Cursor_Value_Input = {
  assignee_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  project_id?: InputMaybe<Scalars['uuid']['input']>;
  reporter_id?: InputMaybe<Scalars['uuid']['input']>;
  status?: InputMaybe<Ticket_Statuses_Enum>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "tickets" */
export enum Tickets_Update_Column {
  /** column name */
  AssigneeId = 'assignee_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  ProjectId = 'project_id',
  /** column name */
  ReporterId = 'reporter_id',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Tickets_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Tickets_Set_Input>;
  /** filter the rows which have to be updated */
  where: Tickets_Bool_Exp;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** columns and relationships of "user_roles" */
export type User_Roles = {
  __typename?: 'user_roles';
  content: Scalars['String']['output'];
  /** An array relationship */
  users: Array<Users>;
  /** An aggregate relationship */
  users_aggregate: Users_Aggregate;
  value: Scalars['String']['output'];
};


/** columns and relationships of "user_roles" */
export type User_RolesUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


/** columns and relationships of "user_roles" */
export type User_RolesUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** aggregated selection of "user_roles" */
export type User_Roles_Aggregate = {
  __typename?: 'user_roles_aggregate';
  aggregate?: Maybe<User_Roles_Aggregate_Fields>;
  nodes: Array<User_Roles>;
};

/** aggregate fields of "user_roles" */
export type User_Roles_Aggregate_Fields = {
  __typename?: 'user_roles_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<User_Roles_Max_Fields>;
  min?: Maybe<User_Roles_Min_Fields>;
};


/** aggregate fields of "user_roles" */
export type User_Roles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Roles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "user_roles". All fields are combined with a logical 'AND'. */
export type User_Roles_Bool_Exp = {
  _and?: InputMaybe<Array<User_Roles_Bool_Exp>>;
  _not?: InputMaybe<User_Roles_Bool_Exp>;
  _or?: InputMaybe<Array<User_Roles_Bool_Exp>>;
  content?: InputMaybe<String_Comparison_Exp>;
  users?: InputMaybe<Users_Bool_Exp>;
  users_aggregate?: InputMaybe<Users_Aggregate_Bool_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_roles" */
export enum User_Roles_Constraint {
  /** unique or primary key constraint on columns "value" */
  UserRolesPkey = 'user_roles_pkey'
}

export enum User_Roles_Enum {
  /** administrator */
  Administrator = 'administrator',
  /** assignee */
  Assignee = 'assignee',
  /** reporter */
  Reporter = 'reporter'
}

/** Boolean expression to compare columns of type "user_roles_enum". All fields are combined with logical 'AND'. */
export type User_Roles_Enum_Comparison_Exp = {
  _eq?: InputMaybe<User_Roles_Enum>;
  _in?: InputMaybe<Array<User_Roles_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<User_Roles_Enum>;
  _nin?: InputMaybe<Array<User_Roles_Enum>>;
};

/** input type for inserting data into table "user_roles" */
export type User_Roles_Insert_Input = {
  content?: InputMaybe<Scalars['String']['input']>;
  users?: InputMaybe<Users_Arr_Rel_Insert_Input>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type User_Roles_Max_Fields = {
  __typename?: 'user_roles_max_fields';
  content?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type User_Roles_Min_Fields = {
  __typename?: 'user_roles_min_fields';
  content?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "user_roles" */
export type User_Roles_Mutation_Response = {
  __typename?: 'user_roles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Roles>;
};

/** input type for inserting object relation for remote table "user_roles" */
export type User_Roles_Obj_Rel_Insert_Input = {
  data: User_Roles_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<User_Roles_On_Conflict>;
};

/** on_conflict condition type for table "user_roles" */
export type User_Roles_On_Conflict = {
  constraint: User_Roles_Constraint;
  update_columns?: Array<User_Roles_Update_Column>;
  where?: InputMaybe<User_Roles_Bool_Exp>;
};

/** Ordering options when selecting data from "user_roles". */
export type User_Roles_Order_By = {
  content?: InputMaybe<Order_By>;
  users_aggregate?: InputMaybe<Users_Aggregate_Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_roles */
export type User_Roles_Pk_Columns_Input = {
  value: Scalars['String']['input'];
};

/** select columns of table "user_roles" */
export enum User_Roles_Select_Column {
  /** column name */
  Content = 'content',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "user_roles" */
export type User_Roles_Set_Input = {
  content?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "user_roles" */
export type User_Roles_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Roles_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Roles_Stream_Cursor_Value_Input = {
  content?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "user_roles" */
export enum User_Roles_Update_Column {
  /** column name */
  Content = 'content',
  /** column name */
  Value = 'value'
}

export type User_Roles_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Roles_Set_Input>;
  /** filter the rows which have to be updated */
  where: User_Roles_Bool_Exp;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  age: Scalars['Int']['output'];
  created_at: Scalars['timestamptz']['output'];
  email: Scalars['String']['output'];
  family: Scalars['String']['output'];
  gender: Genders_Enum;
  /** An object relationship */
  genderByGender: Genders;
  id: Scalars['uuid']['output'];
  name: Scalars['String']['output'];
  password: Scalars['String']['output'];
  role: User_Roles_Enum;
  surname: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  user_role: User_Roles;
  username: Scalars['String']['output'];
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

export type Users_Aggregate_Bool_Exp = {
  count?: InputMaybe<Users_Aggregate_Bool_Exp_Count>;
};

export type Users_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Users_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  avg?: Maybe<Users_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
  stddev?: Maybe<Users_Stddev_Fields>;
  stddev_pop?: Maybe<Users_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Users_Stddev_Samp_Fields>;
  sum?: Maybe<Users_Sum_Fields>;
  var_pop?: Maybe<Users_Var_Pop_Fields>;
  var_samp?: Maybe<Users_Var_Samp_Fields>;
  variance?: Maybe<Users_Variance_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "users" */
export type Users_Aggregate_Order_By = {
  avg?: InputMaybe<Users_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Users_Max_Order_By>;
  min?: InputMaybe<Users_Min_Order_By>;
  stddev?: InputMaybe<Users_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Users_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Users_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Users_Sum_Order_By>;
  var_pop?: InputMaybe<Users_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Users_Var_Samp_Order_By>;
  variance?: InputMaybe<Users_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** aggregate avg on columns */
export type Users_Avg_Fields = {
  __typename?: 'users_avg_fields';
  age?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "users" */
export type Users_Avg_Order_By = {
  age?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  age?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  family?: InputMaybe<String_Comparison_Exp>;
  gender?: InputMaybe<Genders_Enum_Comparison_Exp>;
  genderByGender?: InputMaybe<Genders_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  password?: InputMaybe<String_Comparison_Exp>;
  role?: InputMaybe<User_Roles_Enum_Comparison_Exp>;
  surname?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_role?: InputMaybe<User_Roles_Bool_Exp>;
  username?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey'
}

/** input type for incrementing numeric columns in table "users" */
export type Users_Inc_Input = {
  age?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  age?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  family?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Genders_Enum>;
  genderByGender?: InputMaybe<Genders_Obj_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<User_Roles_Enum>;
  surname?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_role?: InputMaybe<User_Roles_Obj_Rel_Insert_Input>;
  username?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  age?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  family?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  surname?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "users" */
export type Users_Max_Order_By = {
  age?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  family?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  surname?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  username?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  age?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  family?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  surname?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "users" */
export type Users_Min_Order_By = {
  age?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  family?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  surname?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  username?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  age?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  family?: InputMaybe<Order_By>;
  gender?: InputMaybe<Order_By>;
  genderByGender?: InputMaybe<Genders_Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  surname?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_role?: InputMaybe<User_Roles_Order_By>;
  username?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  Age = 'age',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Family = 'family',
  /** column name */
  Gender = 'gender',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Password = 'password',
  /** column name */
  Role = 'role',
  /** column name */
  Surname = 'surname',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Username = 'username'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  age?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  family?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Genders_Enum>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<User_Roles_Enum>;
  surname?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Users_Stddev_Fields = {
  __typename?: 'users_stddev_fields';
  age?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "users" */
export type Users_Stddev_Order_By = {
  age?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Users_Stddev_Pop_Fields = {
  __typename?: 'users_stddev_pop_fields';
  age?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "users" */
export type Users_Stddev_Pop_Order_By = {
  age?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Users_Stddev_Samp_Fields = {
  __typename?: 'users_stddev_samp_fields';
  age?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "users" */
export type Users_Stddev_Samp_Order_By = {
  age?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  age?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  family?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Genders_Enum>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<User_Roles_Enum>;
  surname?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Users_Sum_Fields = {
  __typename?: 'users_sum_fields';
  age?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "users" */
export type Users_Sum_Order_By = {
  age?: InputMaybe<Order_By>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  Age = 'age',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Family = 'family',
  /** column name */
  Gender = 'gender',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Password = 'password',
  /** column name */
  Role = 'role',
  /** column name */
  Surname = 'surname',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Username = 'username'
}

export type Users_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Users_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Users_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Users_Var_Pop_Fields = {
  __typename?: 'users_var_pop_fields';
  age?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "users" */
export type Users_Var_Pop_Order_By = {
  age?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Users_Var_Samp_Fields = {
  __typename?: 'users_var_samp_fields';
  age?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "users" */
export type Users_Var_Samp_Order_By = {
  age?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Users_Variance_Fields = {
  __typename?: 'users_variance_fields';
  age?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "users" */
export type Users_Variance_Order_By = {
  age?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};

export type GetProjectsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  condition?: Projects_Bool_Exp;
  orderBy?: InputMaybe<Array<Projects_Order_By> | Projects_Order_By>;
}>;


export type GetProjectsQuery = { __typename?: 'query_root', projects: Array<{ __typename?: 'projects', id: any, created_at: any, updated_at: any, status: Project_Statuses_Enum, description: string, label: string, owner: { __typename?: 'users', id: any, name: string, family: string, user_role: { __typename?: 'user_roles', value: string, content: string } }, tickets_aggregate: { __typename?: 'tickets_aggregate', aggregate?: { __typename?: 'tickets_aggregate_fields', count: number } | null } }>, projects_aggregate: { __typename?: 'projects_aggregate', aggregate?: { __typename?: 'projects_aggregate_fields', count: number } | null } };

export type GetProjectsOwnedByQueryVariables = Exact<{
  ownerId: Scalars['uuid']['input'];
}>;


export type GetProjectsOwnedByQuery = { __typename?: 'query_root', projects: Array<{ __typename?: 'projects', id: any, created_at: any, updated_at: any, status: Project_Statuses_Enum, description: string, label: string, owner: { __typename?: 'users', id: any, name: string, family: string, user_role: { __typename?: 'user_roles', value: string, content: string } }, tickets_aggregate: { __typename?: 'tickets_aggregate', aggregate?: { __typename?: 'tickets_aggregate_fields', count: number } | null } }> };

export type InsertProjectMutationVariables = Exact<{
  input: Projects_Insert_Input;
}>;


export type InsertProjectMutation = { __typename?: 'mutation_root', insert_projects_one?: { __typename?: 'projects', id: any, created_at: any, updated_at: any, status: Project_Statuses_Enum, description: string, label: string, owner: { __typename?: 'users', id: any, name: string, family: string, user_role: { __typename?: 'user_roles', value: string, content: string } }, tickets_aggregate: { __typename?: 'tickets_aggregate', aggregate?: { __typename?: 'tickets_aggregate_fields', count: number } | null } } | null };

export type UpdateProjectByIdMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
  input: Projects_Set_Input;
}>;


export type UpdateProjectByIdMutation = { __typename?: 'mutation_root', update_projects_by_pk?: { __typename?: 'projects', id: any, created_at: any, updated_at: any, status: Project_Statuses_Enum, description: string, label: string, owner: { __typename?: 'users', id: any, name: string, family: string, user_role: { __typename?: 'user_roles', value: string, content: string } }, tickets_aggregate: { __typename?: 'tickets_aggregate', aggregate?: { __typename?: 'tickets_aggregate_fields', count: number } | null } } | null };

export type GetProjectByIdQueryVariables = Exact<{
  id?: InputMaybe<Scalars['uuid']['input']>;
}>;


export type GetProjectByIdQuery = { __typename?: 'query_root', projects: Array<{ __typename?: 'projects', id: any, created_at: any, updated_at: any, status: Project_Statuses_Enum, description: string, label: string, owner: { __typename?: 'users', id: any, name: string, family: string, user_role: { __typename?: 'user_roles', value: string, content: string } }, tickets_aggregate: { __typename?: 'tickets_aggregate', aggregate?: { __typename?: 'tickets_aggregate_fields', count: number } | null } }> };

export type ProjectFieldsFragment = { __typename?: 'projects', id: any, created_at: any, updated_at: any, status: Project_Statuses_Enum, description: string, label: string, owner: { __typename?: 'users', id: any, name: string, family: string, user_role: { __typename?: 'user_roles', value: string, content: string } }, tickets_aggregate: { __typename?: 'tickets_aggregate', aggregate?: { __typename?: 'tickets_aggregate_fields', count: number } | null } };

export type GetTicketsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  condition?: Tickets_Bool_Exp;
  orderBy?: InputMaybe<Array<Tickets_Order_By> | Tickets_Order_By>;
}>;


export type GetTicketsQuery = { __typename?: 'query_root', tickets: Array<{ __typename?: 'tickets', id: any, created_at: any, updated_at: any, project_id: any, status: Ticket_Statuses_Enum, description: string, reporter: { __typename?: 'users', id: any, name: string, family: string, user_role: { __typename?: 'user_roles', value: string, content: string } }, assignee?: { __typename?: 'users', id: any, name: string, family: string, user_role: { __typename?: 'user_roles', value: string, content: string } } | null, logs: Array<{ __typename?: 'ticket_logs', id: any, created_at: any, updated_at: any, deleted: boolean, description: string, ticket_id: any, user: { __typename?: 'users', id: any, name: string, family: string, user_role: { __typename?: 'user_roles', value: string, content: string } } }> }>, tickets_aggregate: { __typename?: 'tickets_aggregate', aggregate?: { __typename?: 'tickets_aggregate_fields', count: number } | null } };

export type InsertTicketMutationVariables = Exact<{
  input: Tickets_Insert_Input;
}>;


export type InsertTicketMutation = { __typename?: 'mutation_root', insert_tickets_one?: { __typename?: 'tickets', id: any, created_at: any, updated_at: any, project_id: any, status: Ticket_Statuses_Enum, description: string, reporter: { __typename?: 'users', id: any, name: string, family: string, user_role: { __typename?: 'user_roles', value: string, content: string } }, assignee?: { __typename?: 'users', id: any, name: string, family: string, user_role: { __typename?: 'user_roles', value: string, content: string } } | null, logs: Array<{ __typename?: 'ticket_logs', id: any, created_at: any, updated_at: any, deleted: boolean, description: string, ticket_id: any, user: { __typename?: 'users', id: any, name: string, family: string, user_role: { __typename?: 'user_roles', value: string, content: string } } }> } | null };

export type UpdateTicketMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
  input: Tickets_Set_Input;
}>;


export type UpdateTicketMutation = { __typename?: 'mutation_root', update_tickets_by_pk?: { __typename?: 'tickets', id: any, created_at: any, updated_at: any, project_id: any, status: Ticket_Statuses_Enum, description: string, reporter: { __typename?: 'users', id: any, name: string, family: string, user_role: { __typename?: 'user_roles', value: string, content: string } }, assignee?: { __typename?: 'users', id: any, name: string, family: string, user_role: { __typename?: 'user_roles', value: string, content: string } } | null, logs: Array<{ __typename?: 'ticket_logs', id: any, created_at: any, updated_at: any, deleted: boolean, description: string, ticket_id: any, user: { __typename?: 'users', id: any, name: string, family: string, user_role: { __typename?: 'user_roles', value: string, content: string } } }> } | null };

export type GetTicketByIdQueryVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type GetTicketByIdQuery = { __typename?: 'query_root', tickets: Array<{ __typename?: 'tickets', id: any, created_at: any, updated_at: any, project_id: any, status: Ticket_Statuses_Enum, description: string, reporter: { __typename?: 'users', id: any, name: string, family: string, user_role: { __typename?: 'user_roles', value: string, content: string } }, assignee?: { __typename?: 'users', id: any, name: string, family: string, user_role: { __typename?: 'user_roles', value: string, content: string } } | null, logs: Array<{ __typename?: 'ticket_logs', id: any, created_at: any, updated_at: any, deleted: boolean, description: string, ticket_id: any, user: { __typename?: 'users', id: any, name: string, family: string, user_role: { __typename?: 'user_roles', value: string, content: string } } }> }> };

export type TicketFieldsFragment = { __typename?: 'tickets', id: any, created_at: any, updated_at: any, project_id: any, status: Ticket_Statuses_Enum, description: string, reporter: { __typename?: 'users', id: any, name: string, family: string, user_role: { __typename?: 'user_roles', value: string, content: string } }, assignee?: { __typename?: 'users', id: any, name: string, family: string, user_role: { __typename?: 'user_roles', value: string, content: string } } | null, logs: Array<{ __typename?: 'ticket_logs', id: any, created_at: any, updated_at: any, deleted: boolean, description: string, ticket_id: any, user: { __typename?: 'users', id: any, name: string, family: string, user_role: { __typename?: 'user_roles', value: string, content: string } } }> };

export type TicketLogFragment = { __typename?: 'ticket_logs', id: any, created_at: any, updated_at: any, deleted: boolean, description: string, ticket_id: any, user: { __typename?: 'users', id: any, name: string, family: string, user_role: { __typename?: 'user_roles', value: string, content: string } } };

export type GetUsersQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  condition?: Users_Bool_Exp;
  orderBy?: InputMaybe<Array<Users_Order_By> | Users_Order_By>;
}>;


export type GetUsersQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', id: any, created_at: any, updated_at: any, username: string, name: string, surname: string, family: string, email: string, age: number, gender: Genders_Enum, role: User_Roles_Enum, user_gender: { __typename?: 'genders', value: string, content: string }, user_role: { __typename?: 'user_roles', value: string, content: string } }>, users_aggregate: { __typename?: 'users_aggregate', aggregate?: { __typename?: 'users_aggregate_fields', count: number } | null } };

export type InsertUserMutationVariables = Exact<{
  input: Users_Insert_Input;
}>;


export type InsertUserMutation = { __typename?: 'mutation_root', insert_users_one?: { __typename?: 'users', id: any, created_at: any, updated_at: any, username: string, name: string, surname: string, family: string, email: string, age: number, gender: Genders_Enum, role: User_Roles_Enum, user_gender: { __typename?: 'genders', value: string, content: string }, user_role: { __typename?: 'user_roles', value: string, content: string } } | null };

export type UpdateUserMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
  input: Users_Set_Input;
}>;


export type UpdateUserMutation = { __typename?: 'mutation_root', update_users_by_pk?: { __typename?: 'users', id: any, created_at: any, updated_at: any, username: string, name: string, surname: string, family: string, email: string, age: number, gender: Genders_Enum, role: User_Roles_Enum, user_gender: { __typename?: 'genders', value: string, content: string }, user_role: { __typename?: 'user_roles', value: string, content: string } } | null };

export type GetUserByIdQueryVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type GetUserByIdQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', id: any, created_at: any, updated_at: any, username: string, name: string, surname: string, family: string, email: string, age: number, gender: Genders_Enum, role: User_Roles_Enum, user_gender: { __typename?: 'genders', value: string, content: string }, user_role: { __typename?: 'user_roles', value: string, content: string } }> };

export type LoginQueryVariables = Exact<{
  username: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', id: any, created_at: any, updated_at: any, username: string, name: string, surname: string, family: string, email: string, age: number, gender: Genders_Enum, role: User_Roles_Enum, user_gender: { __typename?: 'genders', value: string, content: string }, user_role: { __typename?: 'user_roles', value: string, content: string } }> };

export type UserFieldsFragment = { __typename?: 'users', id: any, created_at: any, updated_at: any, username: string, name: string, surname: string, family: string, email: string, age: number, gender: Genders_Enum, role: User_Roles_Enum, user_gender: { __typename?: 'genders', value: string, content: string }, user_role: { __typename?: 'user_roles', value: string, content: string } };

export type UserShortFieldsFragment = { __typename?: 'users', id: any, name: string, family: string, user_role: { __typename?: 'user_roles', value: string, content: string } };

export const UserShortFieldsFragmentDoc = gql`
    fragment UserShortFields on users {
  id
  name
  family
  user_role {
    value
    content
  }
}
    `;
export const ProjectFieldsFragmentDoc = gql`
    fragment ProjectFields on projects {
  id
  created_at
  updated_at
  status
  description
  label
  owner: user {
    ...UserShortFields
  }
  tickets_aggregate {
    aggregate {
      count
    }
  }
}
    ${UserShortFieldsFragmentDoc}`;
export const TicketLogFragmentDoc = gql`
    fragment TicketLog on ticket_logs {
  id
  created_at
  updated_at
  deleted
  description
  ticket_id
  user {
    ...UserShortFields
  }
}
    ${UserShortFieldsFragmentDoc}`;
export const TicketFieldsFragmentDoc = gql`
    fragment TicketFields on tickets {
  id
  created_at
  updated_at
  project_id
  status
  description
  reporter: userByReporterId {
    ...UserShortFields
  }
  assignee: user {
    ...UserShortFields
  }
  logs: ticket_logs {
    ...TicketLog
  }
}
    ${UserShortFieldsFragmentDoc}
${TicketLogFragmentDoc}`;
export const UserFieldsFragmentDoc = gql`
    fragment UserFields on users {
  id
  created_at
  updated_at
  username
  name
  surname
  family
  email
  age
  gender
  user_gender: genderByGender {
    value
    content
  }
  role
  user_role {
    value
    content
  }
}
    `;
export const GetProjectsDocument = gql`
    query GetProjects($limit: Int, $offset: Int, $condition: projects_bool_exp! = {}, $orderBy: [projects_order_by!] = {created_at: desc}) {
  projects(where: $condition, limit: $limit, offset: $offset, order_by: $orderBy) {
    ...ProjectFields
  }
  projects_aggregate(where: $condition) {
    aggregate {
      count
    }
  }
}
    ${ProjectFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetProjectsGQL extends Apollo.Query<GetProjectsQuery, GetProjectsQueryVariables> {
    document = GetProjectsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetProjectsOwnedByDocument = gql`
    query GetProjectsOwnedBy($ownerId: uuid!) {
  projects(where: {owner_id: {_eq: $ownerId}}) {
    ...ProjectFields
  }
}
    ${ProjectFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetProjectsOwnedByGQL extends Apollo.Query<GetProjectsOwnedByQuery, GetProjectsOwnedByQueryVariables> {
    document = GetProjectsOwnedByDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const InsertProjectDocument = gql`
    mutation InsertProject($input: projects_insert_input!) {
  insert_projects_one(object: $input) {
    ...ProjectFields
  }
}
    ${ProjectFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class InsertProjectGQL extends Apollo.Mutation<InsertProjectMutation, InsertProjectMutationVariables> {
    document = InsertProjectDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateProjectByIdDocument = gql`
    mutation UpdateProjectById($id: uuid!, $input: projects_set_input!) {
  update_projects_by_pk(pk_columns: {id: $id}, _set: $input) {
    ...ProjectFields
  }
}
    ${ProjectFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateProjectByIdGQL extends Apollo.Mutation<UpdateProjectByIdMutation, UpdateProjectByIdMutationVariables> {
    document = UpdateProjectByIdDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetProjectByIdDocument = gql`
    query GetProjectById($id: uuid) {
  projects(where: {id: {_eq: $id}}) {
    ...ProjectFields
  }
}
    ${ProjectFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetProjectByIdGQL extends Apollo.Query<GetProjectByIdQuery, GetProjectByIdQueryVariables> {
    document = GetProjectByIdDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetTicketsDocument = gql`
    query GetTickets($limit: Int, $offset: Int, $condition: tickets_bool_exp! = {}, $orderBy: [tickets_order_by!] = {created_at: desc}) {
  tickets(where: $condition, limit: $limit, offset: $offset, order_by: $orderBy) {
    ...TicketFields
  }
  tickets_aggregate(where: $condition) {
    aggregate {
      count
    }
  }
}
    ${TicketFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetTicketsGQL extends Apollo.Query<GetTicketsQuery, GetTicketsQueryVariables> {
    document = GetTicketsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const InsertTicketDocument = gql`
    mutation InsertTicket($input: tickets_insert_input!) {
  insert_tickets_one(object: $input) {
    ...TicketFields
  }
}
    ${TicketFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class InsertTicketGQL extends Apollo.Mutation<InsertTicketMutation, InsertTicketMutationVariables> {
    document = InsertTicketDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateTicketDocument = gql`
    mutation UpdateTicket($id: uuid!, $input: tickets_set_input!) {
  update_tickets_by_pk(pk_columns: {id: $id}, _set: $input) {
    ...TicketFields
  }
}
    ${TicketFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateTicketGQL extends Apollo.Mutation<UpdateTicketMutation, UpdateTicketMutationVariables> {
    document = UpdateTicketDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetTicketByIdDocument = gql`
    query GetTicketById($id: uuid!) {
  tickets(where: {id: {_eq: $id}}) {
    ...TicketFields
  }
}
    ${TicketFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetTicketByIdGQL extends Apollo.Query<GetTicketByIdQuery, GetTicketByIdQueryVariables> {
    document = GetTicketByIdDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetUsersDocument = gql`
    query GetUsers($limit: Int, $offset: Int, $condition: users_bool_exp! = {}, $orderBy: [users_order_by!] = {created_at: desc}) {
  users(where: $condition, limit: $limit, offset: $offset, order_by: $orderBy) {
    ...UserFields
  }
  users_aggregate(where: $condition) {
    aggregate {
      count
    }
  }
}
    ${UserFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetUsersGQL extends Apollo.Query<GetUsersQuery, GetUsersQueryVariables> {
    document = GetUsersDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const InsertUserDocument = gql`
    mutation InsertUser($input: users_insert_input!) {
  insert_users_one(object: $input) {
    ...UserFields
  }
}
    ${UserFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class InsertUserGQL extends Apollo.Mutation<InsertUserMutation, InsertUserMutationVariables> {
    document = InsertUserDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateUserDocument = gql`
    mutation UpdateUser($id: uuid!, $input: users_set_input!) {
  update_users_by_pk(pk_columns: {id: $id}, _set: $input) {
    ...UserFields
  }
}
    ${UserFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateUserGQL extends Apollo.Mutation<UpdateUserMutation, UpdateUserMutationVariables> {
    document = UpdateUserDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetUserByIdDocument = gql`
    query GetUserById($id: uuid!) {
  users(where: {id: {_eq: $id}}) {
    ...UserFields
  }
}
    ${UserFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetUserByIdGQL extends Apollo.Query<GetUserByIdQuery, GetUserByIdQueryVariables> {
    document = GetUserByIdDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const LoginDocument = gql`
    query Login($username: String!, $password: String!) {
  users(
    where: {_and: [{username: {_eq: $username}}, {password: {_eq: $password}}]}
  ) {
    ...UserFields
  }
}
    ${UserFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class LoginGQL extends Apollo.Query<LoginQuery, LoginQueryVariables> {
    document = LoginDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }