module.exports = {
    schema: [
      {
        "http://127.0.0.1:8082/v1/graphql": {
          headers: {
            "X-Hasura-Admin-Secret":
              "softuniAngularAdminSecret",
          },
        },
      },
    ],
    documents: ["src/**/*.graphql"],
    overwrite: true,
    generates: {
      "./src/generated/graphql.ts": {
        plugins: [
          "typescript",
          "typescript-operations",
          "typescript-apollo-angular",
        ],
        config: { //https://the-guild.dev/graphql/codegen/plugins/typescript/typescript
          skipTypename: false,
          withHooks: true,
          withHOC: false,
          withComponent: false,
          constEnums: false, // removes const from enums when generates types
        },
      },
      "./graphql.schema.json": {
        plugins: ["introspection"],
      },
    },
  };