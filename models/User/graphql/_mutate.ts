import {GraphQLNonNull, GraphQLObjectType, GraphQLString} from "graphql";
import {modelDescription, modelName} from "../config";
import {queryObjectType} from "./_query";
import {insertOneUser} from "../mongodb";

const mutateObjectType = new GraphQLObjectType({
    name: modelName + "MutateObject", description: modelDescription + "(Mutate Object)", fields: () => ({
        insertOne: {
            type: queryObjectType, description: "Insert one " + modelName + " object", args: {
                name: {type: GraphQLNonNull(GraphQLString)},
            }, resolve: async (parent, args) => await insertOneUser({
                name: args.name,
            })
        },
    }),
});

const field = {
    type: mutateObjectType, description: modelDescription + "(Mutate Field)", resolve: () => ({
        insertOne: null,
    }),
};

export default field;
