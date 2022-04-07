import mongoose from 'mongoose';
import { RoverSchema } from '../models/roverModel.js';

const Rover = mongoose.model('Rovers', RoverSchema);

// Add a new Rover 

export const createNewRover = (req, res) =>{

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

    let limit = req.params.limit;

    Rover.find({}, (err, rover) =>{
        if (err){
            res.send(err);
        }
        res.json(rover);
    }).sort(sortOrder);
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


