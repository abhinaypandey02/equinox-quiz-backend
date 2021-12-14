import mongoose from "mongoose";

export async function getAll(model: mongoose.Model<any>) {
  return await model.find({});
}

export async function getOne(model: mongoose.Model<any>, params: any) {
  return await model.find(params);
}

export async function insertOne(model: mongoose.Model<any>, params: any) {
  return await new model(params).save();
}
