import { model, Model, Schema } from "mongoose";
import IGroupLessons from "../interfaces/IGroupLessons";

const groupLessonSchema = new Schema(
    {
        jenis_kelompok_mata_pelajaran: { type: String, required: true },
        nama_kelompok_mata_pelajaran: { type: String, required: true },
    },
    {
        versionKey: false,
    }
);

const GroupLesson: Model<IGroupLessons> = model<IGroupLessons>(
    "groupLesson",
    groupLessonSchema
);
export default GroupLesson;
