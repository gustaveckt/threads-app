import { log } from "console";
import mongoose from "mongoose";


let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if (!process.env.MONGODB_URL) return console.log("Missing MONGODB_URL");
    if (isConnected) return console.log("Already connected to MongoDB");

    try {
        await mongoose.connect(process.env.MONGODB_URL);
        isConnected = true;
        log("Connected to MongoDB");
    } catch (error) {
        log("Error connecting to MongoDB", error);
    }
}