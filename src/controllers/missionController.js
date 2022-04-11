import mongoose from 'mongoose';
import { MissionSchema } from '../models/missionModel.js';
import Joi from "joi"

const Mission = mongoose.model('Missions', MissionSchema);

const schema = Joi.object({
    
    name: Joi.string().required(),
    country: Joi.string().required(),
    start_date: Joi.date().required(),
    end_date: Joi.date().required(),
    rovers: Joi.array().required()
})

// Add a new Mission 

export const createNewMission = (req, res) =>{

    const result = schema.validate(req.body);
    if (result.error) return res.status(400).send(result.error.details[0].message);
 

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

    let sortType = (req.params.sortType)?.toLowerCase();
    let sortOrder = {}; // No order specified

    // sort by construction_date
    if (req.params.sortBy == "start_date"){

        sortOrder = { start_date: -1 }; // DESC order default
        if (sortType == "asc") sortOrder = { start_date: 1 };

    }
    else if (req.params.sortBy == "country"){

        sortOrder = { country: -1 }; // DESC order default
        if (sortType == "asc") sortOrder = { country: 1 };

    }
    else if (req.params.sortBy == "name"){

        sortOrder = { name: -1 }; // DESC order default
        if (sortType == "asc") sortOrder = { name: 1 };

    }
    else return res.status(400).send("Error can't treat request");

    Mission.find({}, (err, mission) =>{
        if (err){
            res.send(err);
        }
        res.json(mission);
    }).sort(sortOrder);
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


