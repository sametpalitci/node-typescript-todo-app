import express from "express";
import { getTodo, addTodo, deleteTodo, updateTodo } from "../controllers";

export default class MainRouter {
    public router = express.Router();

    constructor() {
        this.initializeRouter();
    }
    public initializeRouter() {
        this.router
            .get("/get-todo", getTodo)
            .post("/add-todo", addTodo)
            .delete("/delete-todo/:todoId", deleteTodo)
            .put("/update-todo/:todoId", updateTodo);
    }
}
