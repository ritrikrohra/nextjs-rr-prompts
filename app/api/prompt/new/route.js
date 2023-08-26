import Prompt from "@models/prompt";
import { connectToDatabase } from "@utils/database";

export const POST = async (req, res) => {
    const {userId, prompt, tag} = await req.json();
    try {
        await connectToDatabase();
        const newPrompt = new Prompt({
            creatorId: userId,
            prompt,
            tag
        });
        await newPrompt.save();
        return new Response(JSON.stringify(newPrompt), {
            status: 201
        })
    } catch (error) {
        console.log("PROMPT POST ROUTE", error);
        return new Response("Failed to create a new prompt", {
            status: 500
        })
    }
}