import { Request, Response, NextFunction } from "express";
import GroupLesson from "../models/GroupLessons";

class groupLessonController {
    static async listGroupLessons(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        const { id } = req.query;
        try {
            let result;
            if (id) {
                result = await GroupLesson.findOne({ _id: id });
            } else {
                result = await GroupLesson.find();
            }
            if (!result) throw { name: "NOT_FOUND_GROUP" };
            res.status(200).json(result);
        } catch (error) {
            console.log((error as Error).message);
            next(error);
        }
    }

    static async createGroupLesson(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        const { jenis_kelompok_mata_pelajaran, nama_kelompok_mata_pelajaran } =
            req.body;
        try {
            const result = await GroupLesson.create({
                jenis_kelompok_mata_pelajaran,
                nama_kelompok_mata_pelajaran,
            });
            res.status(200).json(result);
        } catch (error) {
            console.log((error as Error).message);
            next(error);
        }
    }

    static async updateGroupLesson(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        const { id } = req.query;
        const { jenis_kelompok_mata_pelajaran, nama_kelompok_mata_pelajaran } =
            req.body;
        try {
            const result = await GroupLesson.findByIdAndUpdate(
                id,
                {
                    jenis_kelompok_mata_pelajaran,
                    nama_kelompok_mata_pelajaran,
                },
                { new: true }
            );
            res.status(200).json(result);
        } catch (error) {
            console.log((error as Error).message);
            next(error);
        }
    }

    static async deleteGroupLesson(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        const { id } = req.query;
        try {
            const result = await GroupLesson.findByIdAndDelete(id);
            res.status(200).json(result);
        } catch (error) {
            console.log((error as Error).message);
            next(error);
        }
    }
}

export default groupLessonController;
