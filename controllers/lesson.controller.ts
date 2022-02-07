import { Request, Response, NextFunction } from "express";
import Lesson from "../models/Lessons";

class lessonController {
    static async listLessons(req: Request, res: Response, next: NextFunction) {
        const { id } = req.query;
        try {
            let result;
            if (id) {
                result = await Lesson.findOne({ _id: id });
            } else {
                result = await Lesson.find();
            }
            if (!result) throw { name: "NOT_FOUND_LESSON" };
            res.status(200).json(result);
        } catch (error) {
            console.log((error as Error).message);
            next(error);
        }
    }

    static async createLessons(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        const {
            kode_pelajaran,
            kelompok_mata_pelajaran,
            kode_jurusan,
            nip,
            nama_mata_pelajaran,
            jumlah_jam,
        } = req.body;
        try {
            const result = await Lesson.create({
                kode_pelajaran,
                kelompok_mata_pelajaran,
                kode_jurusan,
                nip,
                nama_mata_pelajaran,
                jumlah_jam,
            });
            res.status(200).json(result);
        } catch (error) {
            console.log((error as Error).message);
            next(error);
        }
    }

    static async updateLessons(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        const { id } = req.query;
        const {
            kode_pelajaran,
            kelompok_mata_pelajaran,
            kode_jurusan,
            nip,
            nama_mata_pelajaran,
            jumlah_jam,
        } = req.body;
        try {
            const result = await Lesson.findByIdAndUpdate(
                id,
                {
                    kode_pelajaran,
                    kelompok_mata_pelajaran,
                    kode_jurusan,
                    nip,
                    nama_mata_pelajaran,
                    jumlah_jam,
                },
                {
                    new: true,
                }
            );
            res.status(200).json(result);
        } catch (error) {
            console.log((error as Error).message);
            next(error);
        }
    }

    static async deleteLessons(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        const { id } = req.query;
        try {
            const result = await Lesson.findByIdAndDelete(id);
            res.status(200).json(result);
        } catch (error) {
            console.log((error as Error).message);
            next(error);
        }
    }
}
