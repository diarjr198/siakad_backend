import { model, Model, Schema } from "mongoose";
import IAcademicYears from "../interfaces/IAcademicYears";

const academicYearsSchema = new Schema({
    tahun_akademik: { type: Number, required: true },
    nama_tahun: { type: String, required: true },
    keterangan: { type: String, required: true },
    aktif: { type: String, required: true },
});

const AcademicYear: Model<IAcademicYears> = model<IAcademicYears>(
    "academicYear",
    academicYearsSchema
);
export default AcademicYear;
