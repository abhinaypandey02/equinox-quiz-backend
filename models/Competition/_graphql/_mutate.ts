import { GraphQLObjectType, GraphQLNonNull, GraphQLString } from "graphql";
import { insertOne } from "../../../helpers/_mongodb";
import { modelDescription, modelName } from "../_config";
import Competition from "../_interface";
import { queryObjectType } from "./_query";
import { model as competitionModel } from "../_mongodb";

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
        const newObj: Competition = {
          name: args.name,
        };
        return await insertOne(competitionModel, newObj);
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
