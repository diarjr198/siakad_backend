import { model, Model, Schema } from "mongoose";
import ISchedules from "../interfaces/ISchedules";

const scheduleSchema = new Schema({
    kode_jadwal: { type: Number, required: true },
    tahun_akademik: { type: Schema.Types.ObjectId, ref: "academicYear" },
    kode_kelas: { type: Schema.Types.ObjectId, ref: "classes" },
    kode_pelajaran: { type: Schema.Types.ObjectId, ref: "lesson" },
    kode_ruangan: { type: Schema.Types.ObjectId, ref: "room" },
    nip: { type: Schema.Types.ObjectId, ref: "teacher" },
    jam_mulai: { type: String, required: true },
    jam_selesai: { type: String, required: true },
    hari: { type: String, required: true },
    aktif: { type: String, required: true },
});

const schedule: Model<ISchedules> = model<ISchedules>(
    "schedule",
    scheduleSchema
);
export default schedule;
