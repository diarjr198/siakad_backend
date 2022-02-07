import { model, Model, Schema } from "mongoose";
import IRooms from "../interfaces/IRooms";

const roomSchema = new Schema({
    kode_ruangan: { type: String, required: true },
    nama_ruangan: { type: String, required: true },
    kapasitas_belajar: { type: Number, required: true },
    kapasitas_ujian: { type: Number, required: true },
    aktif: { type: String, required: true },
});

const Room: Model<IRooms> = model<IRooms>("room", roomSchema);
export default Room;
