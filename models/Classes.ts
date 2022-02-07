import { model, Model, Schema } from "mongoose";
import IClasses from "../interfaces/IClasses";

const classesSchema = new Schema({
    nip: { type: Schema.Types.ObjectId, ref: "teacher" },
    jurusan: { type: Schema.Types.ObjectId, ref: "major" },
    ruangan: { type: Schema.Types.ObjectId, ref: "room" },
    nama_kelas: { type: String, required: true },
    aktif: { type: String, required: true },
});

const Classes: Model<IClasses> = model<IClasses>("classes", classesSchema);
export default Classes;
