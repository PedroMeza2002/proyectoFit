import mongoose from "mongoose";

export const connectDB = async () => {
    try{
        await mongoose.connect('mongodb://localhost/merndb');
        console.log("esta conectado")
    }catch(error){
        console.log(error);
    }
};