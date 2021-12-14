import express from "express";
import { graphqlHTTP } from "express-graphql";
import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { competitionGraphQLField as competition } from "./models/Competition";
import { userGraphQLField as user } from "./models/User";
import mongoose from "mongoose";

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

mongoose.connect("mongodb://localhost:27017/equinox-quiz").then(() => {
  console.log("Connected to DB");
});

app.listen(8000, () => {
  console.log("Server Running!");
});
