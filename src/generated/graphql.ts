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
export const enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
};

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
export const enum Genders_Constraint {
  /** unique or primary key constraint on columns "value" */
  GendersPkey = 'genders_pkey'
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
export const enum Genders_Select_Column {
  /** column name */
  Content = 'content',
  /** column name */
  Value = 'value'
};

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
export const enum Genders_Update_Column {
  /** column name */
  Content = 'content',
  /** column name */
  Value = 'value'
};

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
  /** delete data from the table: "ticket_statuses" */
  delete_ticket_statuses?: Maybe<Ticket_Statuses_Mutation_Response>;
  /** delete single row from the table: "ticket_statuses" */
  delete_ticket_statuses_by_pk?: Maybe<Ticket_Statuses>;
  /** delete data from the table: "user_roles" */
  delete_user_roles?: Maybe<User_Roles_Mutation_Response>;
  /** delete single row from the table: "user_roles" */
  delete_user_roles_by_pk?: Maybe<User_Roles>;
  /** insert data into the table: "genders" */
  insert_genders?: Maybe<Genders_Mutation_Response>;
  /** insert a single row into the table: "genders" */
  insert_genders_one?: Maybe<Genders>;
  /** insert data into the table: "project_statuses" */
  insert_project_statuses?: Maybe<Project_Statuses_Mutation_Response>;
  /** insert a single row into the table: "project_statuses" */
  insert_project_statuses_one?: Maybe<Project_Statuses>;
  /** insert data into the table: "ticket_statuses" */
  insert_ticket_statuses?: Maybe<Ticket_Statuses_Mutation_Response>;
  /** insert a single row into the table: "ticket_statuses" */
  insert_ticket_statuses_one?: Maybe<Ticket_Statuses>;
  /** insert data into the table: "user_roles" */
  insert_user_roles?: Maybe<User_Roles_Mutation_Response>;
  /** insert a single row into the table: "user_roles" */
  insert_user_roles_one?: Maybe<User_Roles>;
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
  /** update data of the table: "ticket_statuses" */
  update_ticket_statuses?: Maybe<Ticket_Statuses_Mutation_Response>;
  /** update single row of the table: "ticket_statuses" */
  update_ticket_statuses_by_pk?: Maybe<Ticket_Statuses>;
  /** update multiples rows of table: "ticket_statuses" */
  update_ticket_statuses_many?: Maybe<Array<Maybe<Ticket_Statuses_Mutation_Response>>>;
  /** update data of the table: "user_roles" */
  update_user_roles?: Maybe<User_Roles_Mutation_Response>;
  /** update single row of the table: "user_roles" */
  update_user_roles_by_pk?: Maybe<User_Roles>;
  /** update multiples rows of table: "user_roles" */
  update_user_roles_many?: Maybe<Array<Maybe<User_Roles_Mutation_Response>>>;
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
export type Mutation_RootDelete_Ticket_StatusesArgs = {
  where: Ticket_Statuses_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Ticket_Statuses_By_PkArgs = {
  value: Scalars['String']['input'];
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

/** column ordering options */
export const enum Order_By {
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
};

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
export const enum Project_Statuses_Constraint {
  /** unique or primary key constraint on columns "value" */
  ProjectStatusesPkey = 'project_statuses_pkey'
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
export const enum Project_Statuses_Select_Column {
  /** column name */
  Content = 'content',
  /** column name */
  Value = 'value'
};

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
export const enum Project_Statuses_Update_Column {
  /** column name */
  Content = 'content',
  /** column name */
  Value = 'value'
};

export type Project_Statuses_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Project_Statuses_Set_Input>;
  /** filter the rows which have to be updated */
  where: Project_Statuses_Bool_Exp;
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
  /** fetch data from the table: "ticket_statuses" */
  ticket_statuses: Array<Ticket_Statuses>;
  /** fetch aggregated fields from the table: "ticket_statuses" */
  ticket_statuses_aggregate: Ticket_Statuses_Aggregate;
  /** fetch data from the table: "ticket_statuses" using primary key columns */
  ticket_statuses_by_pk?: Maybe<Ticket_Statuses>;
  /** fetch data from the table: "user_roles" */
  user_roles: Array<User_Roles>;
  /** fetch aggregated fields from the table: "user_roles" */
  user_roles_aggregate: User_Roles_Aggregate;
  /** fetch data from the table: "user_roles" using primary key columns */
  user_roles_by_pk?: Maybe<User_Roles>;
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
  /** fetch data from the table: "ticket_statuses" */
  ticket_statuses: Array<Ticket_Statuses>;
  /** fetch aggregated fields from the table: "ticket_statuses" */
  ticket_statuses_aggregate: Ticket_Statuses_Aggregate;
  /** fetch data from the table: "ticket_statuses" using primary key columns */
  ticket_statuses_by_pk?: Maybe<Ticket_Statuses>;
  /** fetch data from the table in a streaming manner: "ticket_statuses" */
  ticket_statuses_stream: Array<Ticket_Statuses>;
  /** fetch data from the table: "user_roles" */
  user_roles: Array<User_Roles>;
  /** fetch aggregated fields from the table: "user_roles" */
  user_roles_aggregate: User_Roles_Aggregate;
  /** fetch data from the table: "user_roles" using primary key columns */
  user_roles_by_pk?: Maybe<User_Roles>;
  /** fetch data from the table in a streaming manner: "user_roles" */
  user_roles_stream: Array<User_Roles>;
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
export const enum Ticket_Statuses_Constraint {
  /** unique or primary key constraint on columns "value" */
  TicketStatusesPkey = 'ticket_statuses_pkey'
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
export const enum Ticket_Statuses_Select_Column {
  /** column name */
  Content = 'content',
  /** column name */
  Value = 'value'
};

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
export const enum Ticket_Statuses_Update_Column {
  /** column name */
  Content = 'content',
  /** column name */
  Value = 'value'
};

export type Ticket_Statuses_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Ticket_Statuses_Set_Input>;
  /** filter the rows which have to be updated */
  where: Ticket_Statuses_Bool_Exp;
};

/** columns and relationships of "user_roles" */
export type User_Roles = {
  __typename?: 'user_roles';
  content: Scalars['String']['output'];
  value: Scalars['String']['output'];
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
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_roles" */
export const enum User_Roles_Constraint {
  /** unique or primary key constraint on columns "value" */
  UserRolesPkey = 'user_roles_pkey'
};

/** input type for inserting data into table "user_roles" */
export type User_Roles_Insert_Input = {
  content?: InputMaybe<Scalars['String']['input']>;
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

/** on_conflict condition type for table "user_roles" */
export type User_Roles_On_Conflict = {
  constraint: User_Roles_Constraint;
  update_columns?: Array<User_Roles_Update_Column>;
  where?: InputMaybe<User_Roles_Bool_Exp>;
};

/** Ordering options when selecting data from "user_roles". */
export type User_Roles_Order_By = {
  content?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_roles */
export type User_Roles_Pk_Columns_Input = {
  value: Scalars['String']['input'];
};

/** select columns of table "user_roles" */
export const enum User_Roles_Select_Column {
  /** column name */
  Content = 'content',
  /** column name */
  Value = 'value'
};

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
export const enum User_Roles_Update_Column {
  /** column name */
  Content = 'content',
  /** column name */
  Value = 'value'
};

export type User_Roles_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Roles_Set_Input>;
  /** filter the rows which have to be updated */
  where: User_Roles_Bool_Exp;
};

export type EnumeratorsQueryVariables = Exact<{ [key: string]: never; }>;


export type EnumeratorsQuery = { __typename?: 'query_root', genders: Array<{ __typename?: 'genders', value: string, content: string }>, project_statuses: Array<{ __typename?: 'project_statuses', value: string, content: string }>, ticket_statuses: Array<{ __typename?: 'ticket_statuses', value: string, content: string }>, user_roles: Array<{ __typename?: 'user_roles', value: string, content: string }> };

export const EnumeratorsDocument = gql`
    query Enumerators {
  genders {
    value
    content
  }
  project_statuses {
    value
    content
  }
  ticket_statuses {
    value
    content
  }
  user_roles {
    value
    content
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class EnumeratorsGQL extends Apollo.Query<EnumeratorsQuery, EnumeratorsQueryVariables> {
    document = EnumeratorsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }