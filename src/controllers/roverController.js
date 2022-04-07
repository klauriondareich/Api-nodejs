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

    Rover.find({}, (err, rover) =>{
        if (err){
            res.send(err);
        }
        res.json(rover);
    });
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


