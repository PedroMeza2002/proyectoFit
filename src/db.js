import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost/merndb', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Conexión exitosa a la base de datos.");
    } catch (error) {
        console.error("Error de conexión a la base de datos:", error);
    }
};
