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
        config: {
          skipTypename: false,
          withHooks: true,
          withHOC: false,
          withComponent: false,
          constEnums: true
        },
      },
      "./graphql.schema.json": {
        plugins: ["introspection"],
      },
    },
  };