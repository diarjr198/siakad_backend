import { Request, Response, NextFunction } from "express";
import Religion from "../models/Religions";

class religionController {
    static async listReligions(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        const { id } = req.query;
        try {
            let result;
            if (id) {
                result = await Religion.findOne({ _id: id });
            } else {
                result = await Religion.find();
            }
            if (!result) throw { name: "NOT_FOUND_RELIGION" };
            res.status(200).json(result);
        } catch (error) {
            console.log((error as Error).message);
            next(error);
        }
    }

    // static async listReligionSpecific(
    //     req: Request,
    //     res: Response,
    //     next: NextFunction
    // ) {
    //     const { id } = req.params;
    //     try {
    //         const result = await Religion.findOne({ _id: id });
    //         if (!result) throw { name: "NOT_FOUND_RELIGION" };
    //         res.status(200).json(result);
    //     } catch (error) {
    //         console.log((error as Error).message);
    //         next(error);
    //     }
    // }

    static async createReligion(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        const { nama_agama } = req.body;
        try {
            const result = await Religion.create({ nama_agama });
            res.status(200).json(result);
        } catch (error) {
            console.log((error as Error).message);
            next(error);
        }
    }

    static async updateReligion(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        const { id, nama_agama } = req.query;
        try {
            const result = await Religion.findByIdAndUpdate(
                id,
                {
                    nama_agama,
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

    static async deleteReligion(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        const { id } = req.query;
        try {
            const result = await Religion.findByIdAndDelete(id);
            res.status(200).json(result);
        } catch (error) {
            console.log((error as Error).message);
            next(error);
        }
    }
}

export default religionController;
