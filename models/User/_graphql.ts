import { GraphQLObjectType, GraphQLSchema, GraphQLString } from "graphql";
import { modelDescription, modelName } from "./_config";

// User GraphQL

const objectType = new GraphQLObjectType({
  name: modelName + "(Object)",
  description: modelDescription + "(Object)",
  fields: () => ({
    test: {
      type: GraphQLString,
    },
  }),
});

const field = {
  type: objectType,
  description: modelDescription + "(Object)",
  resolve: () => ({ test: "Userrr" }),
};

export default field;
