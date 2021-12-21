import mongoose from "mongoose";
import {modelName} from "./config";
import {getAll, insertOne} from "../../helpers/mongodb";
import ModelInterface from "./interface";

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
});

const model = mongoose.model(modelName, schema);
export const getAllUsers = async () => await getAll(model);
export const insertOneUser = async (obj: ModelInterface) => await insertOne(model, obj);
