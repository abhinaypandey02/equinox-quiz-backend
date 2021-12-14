import express from "express";
import { graphqlHTTP } from "express-graphql";
import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { competitionQueryField, competitionMutateField } from "./models/Competition";
import { userQueryField, userMutateField } from "./models/User";
import mongoose from "mongoose";

const app = express();

const BaseQuery = new GraphQLObjectType({
  name: "Query",
  description: "GraphQL query api for the quiz",
  fields: () => ({
    competition: competitionQueryField,
    user:userQueryField,
  }),
});

const BaseMutation = new GraphQLObjectType({
  name: "Mutations",
  description: "GraphQL mutations api for the quiz",
  fields: () => ({
    competition:competitionMutateField,
    user:userMutateField,
  }),
});

const schema = new GraphQLSchema({
  query: BaseQuery,
  mutation: BaseMutation,
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
