import mongoose from 'mongoose';
import { RoverSchema } from '../models/roverModel.js';
import Joi from "joi"

const Rover = mongoose.model('Rovers', RoverSchema);

const schema = Joi.object({
    
    name: Joi.string().required(),
    launch_date: Joi.date().required(),
    construction_date: Joi.date().required(),
    constructor_name: Joi.string().required(),
    image: Joi.string().required()
})

// Add a new Rover 

export const createNewRover = (req, res) =>{

   const result = schema.validate(req.body);
   if (result.error) return res.status(400).send(result.error.details[0].message);

    let newRover = new Rover(req.body);

    newRover.save((err, rover) =>{
        if (err){
            res.send(err);
        }
        res.json(rover);
    });
};

// Get all Rovers
export const getRovers = (req, res) =>{

    let sortType = (req.params.sortType).toLowerCase();
    let sortOrder = {}; // No order specified

    // sort by construction_date
    if (req.params.sortBy == "constr_date"){

        sortOrder = { construction_date: -1 }; // DESC order default
        if (sortType == "asc") sortOrder = { construction_date: 1 };

    }
    else if (req.params.sortBy == "name"){

        sortOrder = { name: -1 }; // DESC order default
        if (sortType == "asc") sortOrder = { name: 1 };

    }

    let max = req.params.limit;

    Rover.find({}, (err, rover) =>{
        if (err){
            res.send(err);
        }
        res.json(rover);
    }).limit(max).sort(sortOrder);
};

// Get a rover by id
export const getRoverById = (req, res) =>{

    Rover.findById(req.params.roverId, (err, rover) =>{
        if (err){
            res.send(err);
        }
        res.json(rover);
    });
};

// Update a Rover
export const updateRover = (req, res) =>{

    Rover.findOneAndUpdate({_id: req.params.roverId}, req.body, { new: true }, (err, rover) =>{
        if (err){
            res.send(err);
        }
        res.json(rover);
    });
};

// Delete a Rover
export const deleteRover = (req, res) =>{

    Rover.remove({_id: req.params.roverId}, (err, rover) =>{
        if (err){
            res.send(err);
        }
        res.json({ message: 'rover deleted successfully'});
    });
};


