import { GraphQLObjectType, GraphQLSchema, GraphQLString } from "graphql";
import { modelDescription, modelName } from "./_config";

// Competiton GraphQL

const objectType = new GraphQLObjectType({
  name: modelName + "(Object)",
  description: modelDescription + "(Object)",
  fields: () => ({
    test: {
      type: GraphQLString,
      resolve: () => "HELLo",
    },
  }),
});

const field = {
  type: objectType,
  description: modelDescription + "(Field)",
  resolve: () => ({ test: "HELLO" }),
};

export default field;
