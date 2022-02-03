import mongoose from "mongoose";
import {modelName} from "./config";
import {getAll, getMany, insertOne, pushToOne} from "../../helpers/mongodb";
import ModelInterface from "./interface";

const schema = new mongoose.Schema({
    questionID: {
        type: String,
        required: true
    },
    questionText: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    },
    imageURL: {
        type: String,
        required: true
    }

});

const model = mongoose.model(modelName, schema);


export const getAllQuestions = async () => await getAll(model);

export const getQuestionsOfCompetition = async (competition: string) => await getMany(model, {competition});

export const insertOneQuestion = async (obj: ModelInterface) => await insertOne(model, obj);