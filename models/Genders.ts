import { model, Model, Schema } from "mongoose";
import IGenders from "../interfaces/IGenders";

const genderSchema = new Schema({
    jenis_kelamin: { type: String, required: true },
});

const Gender: Model<IGenders> = model<IGenders>("gender", genderSchema);
export default Gender;
