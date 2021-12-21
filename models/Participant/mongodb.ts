import mongoose from "mongoose";
import {modelName} from "./config";
import {getAll, getMany, insertOne, pushToOne} from "../../helpers/mongodb";
import ModelInterface from "./interface";

const schema = new mongoose.Schema({
    userID: {
        type: String,
        required: true
    },
    solved: {
        type: [{
            question: {
                type: String,
                required: true
            },
            timestamp: {
                type: String,
                required: true
            }
        }],
        default: [],
    },
    competition: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }

});

const model = mongoose.model(modelName, schema);


export const getAllParticipants = async () => await getAll(model);

export const getParticipantsOfCompetition = async (competition: string) => await getMany(model, {competition});

export const insertOneParticipant = async (obj: ModelInterface) => await insertOne(model, obj);

export const pushSolvedQuestionsToParticipant =
    async (userID: string, questionID: string): Promise<ModelInterface> =>
        await pushToOne(
            model,
            {userID: userID},
            {
                solved: {
                    question: questionID,
                    timestamp: new Date().toISOString(),
                },
            }
        );