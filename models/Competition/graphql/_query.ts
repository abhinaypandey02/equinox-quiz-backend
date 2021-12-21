import {GraphQLList, GraphQLObjectType, GraphQLString} from "graphql";
import {modelDescription, modelName} from "../config";
import {getAllCompetitions} from "../mongodb";
import {participantQueryObjectType} from "../../Participant/external";
import {getParticipantsOfCompetition} from "../../Participant/mongodb";

export const queryObjectType = new GraphQLObjectType({
  name: modelName + "QueryObject",
  description: modelDescription + "(Query Object)",
  fields: () => ({
    name: {
      type: GraphQLString,
    },
    start: {
      type: GraphQLString
    },
    participants: {
      type: GraphQLList(participantQueryObjectType),
      resolve: async (parent) => await getParticipantsOfCompetition(parent._id)
    },
    id: {
      type: GraphQLString,
      resolve: (parent) => parent._id
    }

  }),
});
const field = {
  type: GraphQLList(queryObjectType),
  description: modelDescription + "(Query Field)",
  resolve: async () => await getAllCompetitions(),
};

export default field;
