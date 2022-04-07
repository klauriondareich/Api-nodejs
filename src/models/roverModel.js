import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const RoverSchema = new Schema({

    name:{
        type: String,
        required: "a rover must have a name"
    },
    launch_date:{
        type: Date,
        required: "a rover must have a launch_date"
    },
    construction_date:{
        type: Date,
        required: "a rover must have a construction date"
    },
    constructor_name:{
        type: String,
        required: "a rover must have a constructor"
    },
    image:{
        type: String,
        required: "rover must have an image"
    },
    created_at:{
        type: Date,
        default: Date.now
    }
})