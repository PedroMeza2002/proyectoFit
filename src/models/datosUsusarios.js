import mongoose from "mongoose";

const datosUsusarios = new mongoose.Schema({
    weight: {
        type: Number,
        require: true,
    },
    height: {
        type: Number,
        require: true,
    },
},{
    timestamps: true
})

export default mongoose.model('datosUsusarios', datosUsusarios)