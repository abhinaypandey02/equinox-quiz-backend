import mongoose from "mongoose";
import { modelName } from "./_config";

const schema = new mongoose.Schema({
  name: {
    type: String,
    required:true
  },
});

export const model = mongoose.model(modelName, schema);