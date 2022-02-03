import {GraphQLList, GraphQLObjectType, GraphQLString} from "graphql";
import {modelDescription, modelName} from "../config";
import {getAllQuestions} from "../mongodb";

export const queryObjectType:GraphQLObjectType = new GraphQLObjectType({
  name: modelName + "QueryObject",
  description: modelDescription + "(Query Object)",
  fields: () => ({
    questionID: {
      type: GraphQLString,
    },
    questionText: {
      type: GraphQLString,
    },
    answer: {
      type: GraphQLString
    },
    imageURL: {
      type: GraphQLString
    },
  }),
});
const field = {
  type: GraphQLList(queryObjectType),
  description: modelDescription + "(Query Field)",
  resolve: async () => await getAllQuestions(),
};

export default field;
