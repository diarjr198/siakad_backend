import { model, Model, Schema } from "mongoose";
import IReligions from "../interfaces/IReligions";

const religionSchema = new Schema(
    {
        nama_agama: { type: String, required: true },
    },
    {
        versionKey: false,
    }
);

const Religion: Model<IReligions> = model<IReligions>(
    "religion",
    religionSchema
);
export default Religion;
