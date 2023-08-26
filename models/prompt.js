import { Schema, model, models } from "mongoose";

const PromptSchema = new Schema({
    creatorId: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    prompt: {
        type: String,
        required: [true, "Prompt is required"],
    },
    tag: {
        type: String,
        required: [true, "Tag is required"],
    },
});

//if already exists, use it, if not, create it
const Prompt = models.Prompt || model("Prompt", PromptSchema);
export default Prompt;