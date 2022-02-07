import { Application } from "express";
import app from "./app";

class Server {
    public app: Application;
    constructor() {
        this.app = app;
    }
}

const server = new Server().app;
const host = "localhost";
const port = process.env.PORT || 3000;
const status = `Server running on ${host}:${port}`;

server.listen(port, () => {
    console.log(status);
});
