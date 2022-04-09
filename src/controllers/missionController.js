import mongoose from 'mongoose';
import { MissionSchema } from '../models/missionModel.js';

const Mission = mongoose.model('Missions', MissionSchema);

// Add a new Mission 

export const createNewMission = (req, res) =>{

    let newMission = new Mission(req.body);

    newMission.save((err, mission) =>{
        if (err){
            res.send(err);
        }
        res.json(mission);
    });
};

// Get all Missions
export const getMissions = (req, res) =>{

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

// Get a mission by id
export const getMissionById = (req, res) =>{

    Mission.findById(req.params.missionId, (err, mission) =>{
        if (err){
            res.send(err);
        }
        res.json(mission);
    });
};

// Update a mission
export const updateMission = (req, res) =>{

    Mission.findOneAndUpdate({_id: req.params.missionId}, req.body, { new: true }, (err, mission) =>{
        if (err){
            res.send(err);
        }
        res.json(mission);
    });
};

// Delete a mission
export const deleteMission = (req, res) =>{

    Mission.remove({_id: req.params.missionId}, (err, mission) =>{
        if (err){
            res.send(err);
        }
        res.json({ message: 'mission deleted successfully'});
    });
};

