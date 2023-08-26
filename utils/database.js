import mongoose from "mongoose";

export const connectToDatabase = async () => {

    let isConnected = false;

    mongoose.set("strictQuery", true);

    if (isConnected) {
        console.log("ALREADY DB CONNECTED")
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "prompt_first_db",
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        isConnected = true;
        console.log("DB CONNECTED")
    } catch (error) {
        console.log("DB CONNECTION ERROR", error);

    }

    // const db = await mongoose.connect(process.env.MONGODB_URI, {
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true
    // });

    // isConnected = db.connections[0].readyState;
}