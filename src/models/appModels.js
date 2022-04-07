import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const UserSchema = new Schema({

    id:{
        type: Number,
        required: "a user must have an id"
    },
    pseudo:{
        type: String,
        required: "a user must have a pseudo"
    },
    email:{
        type: String,
        required: "a user must have an email address"
    },
    password:{
        type: String,
        required: "a user must have a password"
    },
    isAdmin:{
        type: Boolean,
        required: "user role must be defined"
    },
    created_at:{
        type: Date,
        default: Date.now
    }
})