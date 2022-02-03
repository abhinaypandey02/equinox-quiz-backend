import {GraphQLList, GraphQLObjectType, GraphQLString} from "graphql";
import {modelDescription, modelName} from "../config";
import {getAllParticipants} from "../mongodb";
import {competitionQueryObjectType} from "../../Competition/external";
import {getOneCompetitionByID} from "../../Competition/mongodb";

export const queryObjectType:GraphQLObjectType = new GraphQLObjectType({
  name: modelName + "QueryObject",
  description: modelDescription + "(Query Object)",
  fields: () => ({
    userID: {
      type: GraphQLString,
    },
    name: {
      type: GraphQLString,
    },
    solved: {
      type: GraphQLList(
          new GraphQLObjectType({
            name: "Solved",
            description: "Solved Questions",
            fields: () => ({
              question: {
                type: GraphQLString,
              },
              timestamp: {
                type: GraphQLString,
              },
            }),
          })
      ),
    },
    // competition: {
    //   type: GraphQLString
    // },
    competition: {
      type: competitionQueryObjectType,
      resolve: async (parent) => await getOneCompetitionByID(parent.competition),
    },
  }),
});
const field = {
  type: GraphQLList(queryObjectType),
  description: modelDescription + "(Query Field)",
  resolve: async () => await getAllParticipants(),
};

export default field;
