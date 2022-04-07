import mongoose from 'mongoose';
import { UsersSchema } from '../models/appModels.js';

const User = mongoose.model('Users', UsersSchema);

// Add a new user 
export const createNewUser = (req, res) =>{

    let newUser = new User(req.body);

    newUser.save((err, user) =>{
        if (err){
            res.send(err);
        }
        res.json(user);
    });
};

// Get all users
export const getUsers = (req, res) =>{

    User.find({}, (err, user) =>{
        if (err){
            res.send(err);
        }
        res.json(user);
    });
};

