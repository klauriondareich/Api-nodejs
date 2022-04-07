import { createNewUser, deleteUser, getUserById, getUsers, updateUser } from '../controllers/usersController.js';
import { createNewRover, deleteRover, getRoverById, getRovers, updateRover } from '../controllers/roverController.js';

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
    
      app.route('/rover/all')
      .get((req, res, next) =>
       {
          // Middleware
          console.log(`Request : ${req.originalUrl}`)
          console.log(`Request : ${req.method}`);
          next();
      }, getRovers);
  
      app.route('/rover/create')
      .post(createNewRover);
  
      app.route('/rover/view/:id')
      .get(getRoverById);
  
      app.route('/rover/update/:id')
      .put(updateRover);
  
      app.route('/rover/delete/:id')
      .delete(deleteRover);

}

export default routes;