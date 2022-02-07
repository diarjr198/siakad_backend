import { Router } from "express";
import groupLessonController from "../controllers/groupLesson.controller";

class groupLessonRoutes {
    public groupLessonRoute: Router;

    constructor() {
        this.groupLessonRoute = Router();
        this.groupLesson();
    }

    protected groupLesson = () => {
        this.groupLessonRoute.get("/", groupLessonController.listGroupLessons);
        this.groupLessonRoute.post(
            "/create",
            groupLessonController.createGroupLesson
        );
        this.groupLessonRoute.put(
            "/update",
            groupLessonController.updateGroupLesson
        );
        this.groupLessonRoute.delete(
            "/delete",
            groupLessonController.deleteGroupLesson
        );
    };
}

const groupLessonRouter = new groupLessonRoutes().groupLessonRoute;
export { groupLessonRouter };
