import { Router } from "express";
import majorController from "../controllers/major.controller";

class majorRoutes {
    public majorRoute: Router;

    constructor() {
        this.majorRoute = Router();
        this.major();
    }

    protected major = () => {
        this.majorRoute.get("/", majorController.listMajors);
        this.majorRoute.post("/create", majorController.createMajor);
        this.majorRoute.put("/update", majorController.updateMajor);
        this.majorRoute.delete("/delete", majorController.deleteMajor);
    };
}

export default new majorRoutes().majorRoute;
