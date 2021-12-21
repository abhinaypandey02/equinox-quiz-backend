import mongoose from "mongoose";
import {getAll, getOneById, insertOne, pushToOne,} from "../../helpers/mongodb";
import {modelName} from "./config";
import ModelInterface from "./interface";

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    start: {
        type: String,
        required: true,
    },
});

const model = mongoose.model(modelName, schema);

export const getAllCompetitions = async () => await getAll(model);

export const getOneCompetitionByID = async (id: string) => await getOneById(model, id);

export const insertOneCompetition = async (obj: ModelInterface) => await insertOne(model, obj);

export const addParticipantToCompetition =
    async (compID: string, userID: string): Promise<ModelInterface> =>
        await pushToOne(model, {_id: compID}, {participants: userID});
