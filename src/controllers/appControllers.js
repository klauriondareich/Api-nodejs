import mongoose from 'mongoose';
import { UserSchema } from '../models/appModels.js';

const User = mongoose.model('user', UserSchema);

export const createNewUser = (req, res) =>{

    let newUser = new UserSchema(req.body);

    newUser.save((err, user) =>{
        if (err){
            res.send(err)
        }
        res.json(user)
    });
}