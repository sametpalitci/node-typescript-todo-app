import { Request, Response, NextFunction } from "express";
import Todo from "../models/Todo";
import controls from "../utilities/controls";

export async function getTodo(req: Request, res: Response) {
    const getAllTodo = await Todo.find({});
    res.send(getAllTodo);
}
export async function addTodo(req: Request, res: Response) {
    const { text } = req.body;
    const checkElement = controls(text);
    if (!checkElement) throw new Error("The fields can't be empty.");
    await Todo.create({ text });
    res.send(`${text} - Created!`);
}
export async function updateTodo(req: Request, res: Response) {
    const { todoId } = req.params;
    const { newText } = req.body;
    const checkId = controls(todoId, newText);
    if (!checkId) throw new Error("The fields can't be empty.");
    await Todo.findByIdAndUpdate(todoId, { text: newText });
    res.send(`${todoId} - Updated!`);
}
export async function deleteTodo(req: Request, res: Response) {
    const { todoId } = req.params;
    const checkId = controls(todoId);
    if (!checkId) throw new Error("The fields can't be empty.");
    await Todo.findByIdAndDelete(todoId);
    res.send(`${todoId} - Deleted!`);
}
