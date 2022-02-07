import { Request, Response, Router } from "express";
import { groupLessonRouter } from "./groupLesson.routes";
import majorRoutes from "./major.routes";
import religionRoutes from "./religion.routes";

class Routes {
    public router: Router;

    constructor() {
        this.router = Router();
        this.routes();
        this.teacher();
        this.student();
        this.parent();
        this.religion();
        this.major();
        this.groupLesson();
    }

    protected routes = () => {
        this.router.get("/", (req: Request, res: Response) => {
            res.status(200).json({ message: "Success!" });
        });
        this.router.post("/login", (req: Request, res: Response) => {
            res.status(200).json({ message: "Login Berhasil!" });
        });
    };

    protected teacher = () => {
        this.router.get("/teacher", (req: Request, res: Response) => {
            res.status(200).json({
                message: "List Teacher Berhasil ditampilkan!",
            });
        });
        this.router.get("/teacher/:id", (req: Request, res: Response) => {
            res.status(200).json({
                message: "Teacher Specific Berhasil ditampilkan!",
            });
        });
        this.router.post("/teacher/create", (req: Request, res: Response) => {
            res.status(200).json({ message: "Teacher Berhasil di Created!" });
        });
        this.router.put(
            "/teacher/update/:id",
            (req: Request, res: Response) => {
                res.status(200).json({
                    message: "Teacher Berhasil di Update!",
                });
            }
        );
        this.router.delete(
            "/teacher/delete/:id",
            (req: Request, res: Response) => {
                res.status(200).json({
                    message: "Teacher Berhasil di Delete!",
                });
            }
        );
    };

    protected student = () => {
        this.router.get("/student", (req: Request, res: Response) => {
            res.status(200).json({
                message: "List Student Berhasil ditampilkan!",
            });
        });
        this.router.get("/student/:id", (req: Request, res: Response) => {
            res.status(200).json({
                message: "Student Specific Berhasil ditampilkan!",
            });
        });
        this.router.post("/student/create", (req: Request, res: Response) => {
            res.status(200).json({ message: "Student Berhasil di Created!" });
        });
        this.router.put(
            "/student/update/:id",
            (req: Request, res: Response) => {
                res.status(200).json({
                    message: "Student Berhasil di Update!",
                });
            }
        );
        this.router.delete(
            "/student/delete/:id",
            (req: Request, res: Response) => {
                res.status(200).json({
                    message: "Student Berhasil di Delete!",
                });
            }
        );
    };

    protected parent = () => {
        this.router.get("/parent", (req: Request, res: Response) => {
            res.status(200).json({
                message: "List Parent Berhasil ditampilkan!",
            });
        });
        this.router.get("/parent/:id", (req: Request, res: Response) => {
            res.status(200).json({
                message: "Parent Specific Berhasil ditampilkan!",
            });
        });
        this.router.post("/parent/create", (req: Request, res: Response) => {
            res.status(200).json({ message: "Parent Berhasil di Created!" });
        });
        this.router.put("/parent/update/:id", (req: Request, res: Response) => {
            res.status(200).json({ message: "Parent Berhasil di Updated!" });
        });
        this.router.delete(
            "/parent/delete/:id",
            (req: Request, res: Response) => {
                res.status(200).json({ message: "Parent Berhasil di Delete!" });
            }
        );
    };

    protected religion = () => {
        this.router.use("/religion", religionRoutes);
    };

    protected major = () => {
        this.router.use("/major", majorRoutes);
    };

    protected groupLesson = () => {
        this.router.use("/grouplesson", groupLessonRouter);
    };
}

export default new Routes().router;
