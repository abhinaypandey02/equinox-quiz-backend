import express from "express";
import { graphqlHTTP } from "express-graphql";
import { GraphQLObjectType, GraphQLSchema, GraphQLString } from "graphql";
import { competitionGraphQLField as competition } from "./models/Competition";
import { userGraphQLField as user } from "./models/User";
const app = express();

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "QuizDB",
    description: "GraphQL api for the quiz",
    fields: () => ({
      competition,
      user,
    }),
  }),
});

app.use(
  "/api",
  graphqlHTTP({
    graphiql: true,
    schema,
  })
);

app.listen(8000, () => {
  console.log("Server Running!");
});
