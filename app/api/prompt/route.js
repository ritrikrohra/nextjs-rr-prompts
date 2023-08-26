import Prompt from "@models/prompt";
import { connectToDatabase } from "@utils/database";

export const GET = async (req, res) => {
    try {
        await connectToDatabase();
        const prompts = await Prompt.find({}).populate("creatorId");
        console.log("Prompts >>>", prompts)
         return new Response(JSON.stringify(prompts), {
            status: 200
        })
    } catch (error) {
        return new Response("Failed to Fetch", {
            status: 500
        })
    }
}