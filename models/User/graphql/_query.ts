import {GraphQLList, GraphQLObjectType, GraphQLString} from "graphql";
import {modelDescription, modelName} from "../config";
import {getAllUsers} from "../mongodb";

export const queryObjectType = new GraphQLObjectType({
  name: modelName + "QueryObject",
  description: modelDescription + "(Query Object)",
  fields: () => ({
    name: {
      type: GraphQLString,
    },
  }),
});

const field = {
  type: GraphQLList(queryObjectType),
  description: modelDescription + "(Query Field)",
  resolve: async () => await getAllUsers(),
};

export default field;
