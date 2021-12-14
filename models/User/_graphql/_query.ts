import { GraphQLObjectType, GraphQLList, GraphQLString } from "graphql";
import { getAll } from "../../../helpers/_mongodb";
import { modelDescription, modelName } from "../_config";
import { model as userModel } from "../_mongodb";

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
  resolve: async () => await getAll(userModel),
};

export default field;
