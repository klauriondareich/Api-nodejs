import mongoose from 'mongoose';
import { UsersSchema } from '../models/userModel.js';
import Joi from "joi"

const User = mongoose.model('Users', UsersSchema);

const schema = Joi.object({
    
    pseudo: Joi.string().required(),
    email: Joi.string().
        email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
    isAdmin:Joi.boolean().required()
})

// Add a new user 
export const createNewUser = (req, res) =>{

    const {result} = schema.validate(req.body);
    

    if (result) return res.status(400).send(result.error.details[0].message);

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


