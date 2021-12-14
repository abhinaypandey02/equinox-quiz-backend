import { GraphQLObjectType, GraphQLSchema, GraphQLString } from "graphql";

// Competiton GraphQL

const objectType = new GraphQLObjectType({
  name: "Competition",
  description: "",
  fields: () => ({
    test: {
      type: GraphQLString,
      resolve: () => "HELLo",
    },
  }),
});

const field = {
  type: objectType,
  description: "",
  resolve: () => ({ test: "HELLO" }),
};

export default field;
