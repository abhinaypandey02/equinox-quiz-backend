import {GraphQLNonNull, GraphQLObjectType, GraphQLString} from "graphql";
import {modelDescription, modelName} from "../config";
import {queryObjectType} from "./_query";
import {addParticipantToCompetition} from "../../Competition/mongodb";
import {insertOneQuestion} from "../mongodb";

const mutateObjectType = new GraphQLObjectType({
    name: modelName + "MutateObject",
    description: modelDescription + "(Mutate Object)",
    fields: () => ({
        insertOne: {
            type: queryObjectType,
            description: "Insert one " + modelName + " object",
            args: {
                name: {type: GraphQLNonNull(GraphQLString)},
                competition: {type: GraphQLNonNull(GraphQLString)},
                userID: {type: GraphQLNonNull(GraphQLString)},
            },
            resolve: async (_parent, args) => {
                await addParticipantToCompetition(args.competition, args.userID);
                return await insertOneQuestion({
                    questionID: args.questionID,
                    answer: args.answer,
                    questionText: args.questionText,
                    imageURL: args.imageURL,
                });
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
