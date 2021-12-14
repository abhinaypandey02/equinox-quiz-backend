import mongoose from "mongoose";
import { modelName } from "./_config";

const schema = new mongoose.Schema({
  test: {
    type: String,
  },
});

const model = mongoose.model(modelName, schema);
