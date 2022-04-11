import { createNewUser, deleteUser, getUserById, getUsers, updateUser } from '../controllers/usersController.js';
import { createNewRover, deleteRover, getRoverById, getRovers, updateRover } from '../controllers/roverController.js';
import { createNewMission, deleteMission, getMissionById, getMissions, updateMission } from '../controllers/missionController.js';

const routes = (app) => {

    // User management routes
    
    app.route('/user/all')
    .get((req, res, next) =>
     {
        // Middleware
        console.log(`Request : ${req.originalUrl}`)
        console.log(`Request : ${req.method}`);
        next();
    }, getUsers);

    
    app.route('/user/create')
    .post(createNewUser);

    app.route('/user/view/:id')
    .get(getUserById);

    app.route('/user/update/:id')
    .put(updateUser);

    app.route('/user/delete/:id')
    .delete(deleteUser);


    // Rover CRUD

    app.route('/rover/all/:sortBy/:sortType/:limit')
    .get((req, res, next) =>
    {
        // Middleware
        console.log(`Request : ${req.originalUrl}`)
        console.log(`Request : ${req.method}`);
        next();
    }, getRovers);

    app.route('/rover/create')
    .post(createNewRover);

    app.route('/rover/view/:roverId')
    .get(getRoverById);

    app.route('/rover/update/:roverId')
    .put(updateRover);

    app.route('/rover/delete/:roverId')
    .delete(deleteRover);


    // Mission CRUD

    app.route('/mission/all/:sortBy/:sortType')
    .get((req, res, next) =>
    {
        // Middleware
        console.log(`Request : ${req.originalUrl}`)
        console.log(`Request : ${req.method}`);
        next();
    }, getMissions);

    app.route('/mission/create')
    .post(createNewMission);

    app.route('/mission/view/:missionId')
    .get(getMissionById);

    app.route('/mission/update/:missionId')
    .put(updateMission);

    app.route('/mission/delete/:missionId')
    .delete(deleteMission);

}

export default routes;