import { Router } from "express";
import religionController from "../controllers/religion.controller";

class religionRoutes {
    public religionRoute: Router;

    constructor() {
        this.religionRoute = Router();
        this.religion();
    }

    protected religion = () => {
        this.religionRoute.get("/", religionController.listReligions);
        // this.religionRoute.get("/:id", religionController.listReligionSpecific);
        this.religionRoute.post("/create", religionController.createReligion);
        this.religionRoute.put("/update", religionController.updateReligion);
        this.religionRoute.delete("/delete", religionController.deleteReligion);
    };
}

export default new religionRoutes().religionRoute;
