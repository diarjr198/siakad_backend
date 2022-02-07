import { model, Model, Schema } from "mongoose";
import IMajors from "../interfaces/IMajors";

const majorSchema = new Schema(
    {
        kode_jurusan: { type: String, required: true },
        nama_jurusan: { type: String, required: true },
        bidang_keahlian: { type: String, required: true },
        aktif: { type: String, enum: ["Ya", "Tidak"], default: "Ya" },
    },
    {
        versionKey: false,
    }
);

const Major: Model<IMajors> = model<IMajors>("major", majorSchema);
export default Major;
