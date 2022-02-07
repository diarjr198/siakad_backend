import { Request, Response, NextFunction } from "express";
import Major from "../models/Majors";

class majorController {
    static async listMajors(req: Request, res: Response, next: NextFunction) {
        const { id } = req.query;
        try {
            let result;
            if (id) {
                result = await Major.findOne({ _id: id });
            } else {
                result = await Major.find();
            }
            if (!result) throw { name: "NOT_FOUNT_MAJOR" };
            res.status(200).json(result);
        } catch (error) {
            console.log((error as Error).message);
            next(error);
        }
    }

    // static async listMajorSpecific(
    //     req: Request,
    //     res: Response,
    //     next: NextFunction
    // ) {
    //     const { id } = req.params;
    //     try {
    //         const result = await Major.findOne({ _id: id });
    //         if (!result) throw { name: "NOT_FOUNT_MAJOR" };
    //         res.status(200).json(result);
    //     } catch (error) {
    //         console.log((error as Error).message);
    //         next(error);
    //     }
    // }

    static async createMajor(req: Request, res: Response, next: NextFunction) {
        const { kode_jurusan, nama_jurusan, bidang_keahlian } = req.body;
        try {
            const result = await Major.create({
                kode_jurusan,
                nama_jurusan,
                bidang_keahlian,
            });
            res.status(200).json(result);
        } catch (error) {
            console.log((error as Error).message);
            next(error);
        }
    }

    static async updateMajor(req: Request, res: Response, next: NextFunction) {
        const { id } = req.query;
        const { kode_jurusan, nama_jurusan, bidang_keahlian } = req.body;
        try {
            const find = await Major.findOne({ _id: id });
            if (!find) throw { name: "NOT_FOUNT_MAJOR" };
            const result = await Major.findByIdAndUpdate(
                id,
                {
                    kode_jurusan,
                    nama_jurusan,
                    bidang_keahlian,
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

    static async deleteMajor(req: Request, res: Response, next: NextFunction) {
        const { id } = req.query;
        try {
            const result = await Major.findByIdAndDelete(id);
            res.status(200).json(result);
        } catch (error) {
            console.log((error as Error).message);
            next(error);
        }
    }
}

export default majorController;
