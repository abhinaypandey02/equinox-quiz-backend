import mongoose from "mongoose";

export const getAll = async (model: mongoose.Model<any>) => model.find({});

export const getOne = async (model: mongoose.Model<any>, params: any) => model.findOne(params);

export const getMany = async (model: mongoose.Model<any>, params: any) => model.find(params);

export const getOneById = async (model: mongoose.Model<any>, id: string) => model.findById(id);

export const insertOne = async (model: mongoose.Model<any>, params: any) => await new model(params).save();

export const pushToOne = async (model: mongoose.Model<any>, params: any, toPush: any) =>
    model.findOneAndUpdate(params, {$push: toPush}, {new: true});