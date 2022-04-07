import mongoose from 'mongoose';
import { UsersSchema } from '../models/appModels.js';

const User = mongoose.model('Users', UsersSchema);

export const createNewUser = (req, res) =>{

    let newUser = new User(req.body);

    newUser.save((err, user) =>{
        if (err){
            res.send(err);
        }
        res.json(user);
    });
}