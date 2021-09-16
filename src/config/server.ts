import express from "express";
import mongoose from "mongoose";
import RouterInterface from "../interfaces/RouterInterface";
import logger from "../utilities/logger";

export default class App {
    public app: express.Application;
    protected API_PORT: number = +(process.env.API_PORT || 5000);
    protected DATABASE_URI: string = process.env.DATABASE_URI || "MONGODB_URI";
    constructor(MainRouter: RouterInterface) {
        this.app = express();

        this.configuration(MainRouter);
    }
    private configuration(MainRouter: RouterInterface) {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use("/api/todo", MainRouter.router);
    }
    public connect() {
        mongoose
            .connect(this.DATABASE_URI)
            .then(async () => {
                this.app.listen(this.API_PORT, () =>
                    logger(
                        `APP IS CONNECT MONGODB AND LISTEN PORT:${this.API_PORT}`,
                        "log"
                    )
                );
            })
            .catch((err) => logger(err.message, "error"));
    }
}
