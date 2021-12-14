import { GraphQLObjectType, GraphQLNonNull, GraphQLString } from "graphql";
import { insertOne } from "../../../helpers/_mongodb";
import { modelDescription, modelName } from "../_config";
import { queryObjectType } from "./_query";
import { model as userModel } from "../_mongodb";
import User from "../_interface";

const mutateObjectType = new GraphQLObjectType({
  name: modelName + "MutateObject",
  description: modelDescription + "(Mutate Object)",
  fields: () => ({
    insertOne: {
      type: queryObjectType,
      description: "Insert one " + modelName + " object",
      args: {
        name: { type: GraphQLString },
      },
      resolve: async (parent, args) => {
        const newObj: User = {
          name: args.name,
        };
        return await insertOne(userModel, newObj);
      },
    },
  }),
});

const field = {
  type: mutateObjectType,
  description: modelDescription + "(Mutate Field)",
  resolve: () => ({
      insertOne: null,
    }),
};

export default field;
