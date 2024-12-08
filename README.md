# Application for the managing data for Users, Projects and Tickets with logs.

Repo for the exam task for the Angular course, Softuni October 2024

## Tech stack
![alt text](readme-images/stack.bmp)

## Data model : ERD
![alt text](readme-images/image.png)

## Environment requirements:
- Node: 22.9.0
- Angular CLI: 18.2.11
- Package Manager: npm 10.9.0
- Docker version: 27.3.1

## Installation
```bash
# clone repo
git clone https://github.com/peshoni/softuni-angular.git

# move to project directory
cd softuni-angular

### Install application
npm install

## Build the images and run as containers
docker-compose up --build -d

# Check containers:
docker container ls

# Applies metadata over Hasura and Postgres
npx hasura metadata apply

# Applies migrations over the Postgres
npx hasura migrate apply --database-name default

# Hydrates database with a mock data (.sql files from the /seeds/default/ folder)
npx hasura seeds apply --database-name default

# Done
```
## Exposed containers:
1. Angular application : localhost:4200
2. Hasura console:       localhost:8082
3. Postgres:             localhost:5433 
! If these ports are busy on your machine, you can edit them in the docker-compose file. Clear and Run containers again.

## NOTE!
In the application, WASN'T applied any security practices for the data and connections. 
All ports are exposed, and connection between containers isn't created in proper(jwt, roles, etc.) way. Please if someone decide to use this - take care of the security.
The goal of this course is working with the Angular toolkit - components, forms, tables etc.

 
-----------------------------------------------------------------------
## Development
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.5.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding
```bash
ng generate directive|pipe|service|class|guard|interface|enum|module
# Generate a table component with Angular Schematics
ng generate @angular/material:table path/component-name
# Generate an address form component with Angular Schematics:
ng generate @angular/material:address-form path/component-name
``` 
## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Hasura - GraphQl engine with DBMS and UI console
https://hasura.io/docs/2.0/hasura-cli/commands/hasura_init/
Run `npm i --save-dev hasura-cli@2.36.1`
RUN `npm run hasura`
## Add configuration, metadata and migrations folders
RUN `npm run hasura init graphql`

## Apollo-Angular
`ng add apollo-angular`
`npm install --save-dev @graphql-codegen/cli @graphql-codegen/typescript @graphql-codegen/typescript-apollo-angular @graphql-codegen/typescript-operations`
`npm i apollo-link-context` //for the connection settings

## Types scaffolding
Docs: https://the-guild.dev/graphql/codegen/plugins/typescript/typescript
RUN `npm run generate-types` for regeneration of types

## Hasura metadata
Run `npx hasura metadata export` to export current connected database metadata
Run `npx hasura hasura metadata apply` to apply state of metadata from the current git branch over connected database 
npx hasura metadata apply
npx hasura metadata reload
npx hasura hasura metadata apply  --database-name="default"

## Hasura migrations
Run `npx hasura console` to save all database mutations as migrations
For squash migrations use: 
Run `npx hasura migrate squash --skip-update-check --database-name="default" --delete-source --name "migration_name" --from 1730973747412` to..
 
For applying migrations:
Run `npx hasura migrate apply --database-name "default"`
