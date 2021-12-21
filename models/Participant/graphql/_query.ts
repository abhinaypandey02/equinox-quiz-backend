import {GraphQLList, GraphQLObjectType, GraphQLString} from "graphql";
import {modelDescription, modelName} from "../config";
import {getAllParticipants} from "../mongodb";
// import { competitionQueryObjectType } from "../../Competition/external";
// import { getCompetition } from "../../Competition/external";
export const queryObjectType = new GraphQLObjectType({
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
    competition: {
      type: GraphQLString,
      // resolve: async (parent) => await getCompetition(parent.competition),
    },
  }),
});
const field = {
  type: GraphQLList(queryObjectType),
  description: modelDescription + "(Query Field)",
  resolve: async () => await getAllParticipants(),
};

export default field;
