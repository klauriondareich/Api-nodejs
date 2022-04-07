import mongoose from 'mongoose';
import { UsersSchema } from '../models/userModel.js';

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

// Get a user by id
export const getUserById = (req, res) =>{

    User.findById(req.params.id, (err, user) =>{
        if (err){
            res.send(err);
        }
        res.json(user);
    });
};

// Update a user
export const updateUser = (req, res) =>{

    User.findOneAndUpdate({_id: req.params.id}, req.body, { new: true }, (err, user) =>{
        if (err){
            res.send(err);
        }
        res.json(user);
    });
};

// Delete a user
export const deleteUser = (req, res) =>{

    User.remove({_id: req.params.id}, (err, user) =>{
        if (err){
            res.send(err);
        }
        res.json({ message: 'User deleted successfully'});
    });
};


