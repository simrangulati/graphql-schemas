const { makeExecutableSchema } = require('@graphql-tools/schema');

module.exports = makeExecutableSchema({
  typeDefs: `
    type Query {
      foo: String
    }
  `,
  resolvers: {
    Query: {
      foo: () => 'FOO',
    },
  },
});
