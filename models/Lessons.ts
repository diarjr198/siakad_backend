import { model, Model, Schema } from "mongoose";
import ILessons from "../interfaces/ILessons";

const lessonSchema = new Schema({
    kode_pelajaran: { type: String, required: true },
    kelompok_mata_pelajaran: { type: String, ref: "groupLesson" },
    kode_jurusan: { type: Schema.Types.ObjectId, ref: "major" },
    nip: { type: Schema.Types.ObjectId, ref: "teacher" },
    nama_mata_pelajaran: { type: String, required: true },
    jumlah_jam: { type: Number, required: true },
    aktif: { type: String, required: true },
});

const Lesson: Model<ILessons> = model<ILessons>("lesson", lessonSchema);
export default Lesson;
