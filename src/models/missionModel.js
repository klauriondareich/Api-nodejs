import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const MissionSchema = new Schema({

    name:{
        type: String,
        required: "a mission must have a name"
    },
    country:{
        type: String,
        required: "a mission must have a country"
    },
    start_date:{
        type: Date,
        required: "a mission must have a start_date"
    },
    end_date:{
        type: Date,
        required: "a mission must have an end date"
    },
    rovers:{
        type: Array,
        required: "a mission must have rovers"
    },
    created_at:{
        type: Date,
        default: Date.now
    }
})