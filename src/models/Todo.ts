import { Schema, model } from "mongoose";

const TodoSchema = new Schema({
    text: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

export default model("Todo", TodoSchema);
