import Prompt from "@models/prompt";
import { connectToDatabase } from "@utils/database";

export const GET = async (req, res) => {

    // console.log("REQ >>", req?.params);
    // console.log("RES >>", res);
    try {
        await connectToDatabase();
        const prompts = await Prompt.find({
            creatorId: res.params.id
        }).populate("creatorId");
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