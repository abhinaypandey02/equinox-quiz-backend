import { GraphQLObjectType, GraphQLSchema, GraphQLString } from "graphql";

// User GraphQL

const objectType = new GraphQLObjectType({
  name: "User",
  description: "User",
  fields: () => ({
    test: {
      type: GraphQLString,
    },
  }),
});

const field = {
  type: objectType,
  description: "User",
  resolve: () => ({ test: "Userrr" }),
};

export default field;
