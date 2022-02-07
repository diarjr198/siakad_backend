import { ErrorRequestHandler, Request, Response, NextFunction } from "express";

class errorHandler {
    static errHandler(
        err: ErrorRequestHandler,
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        let name: string = err.name;
        let code: number = 0;
        let message: string = "";

        switch (name) {
            case "NOT_FOUND_CLASS":
                code = 404;
                message = "Class not found!";
                break;
            default:
                code = 500;
                message = "Internal Server Error!";
                break;
        }
        res.status(code).json({ Success: false, Message: message });
    }
}

export { errorHandler };
