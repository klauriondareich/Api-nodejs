import { createNewUser, getUserById, getUsers, updateUser } from '../controllers/appControllers.js';

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
    .get(getUserById)
    .put((req, res) => res.send("Display a user"));

    app.route('/user/update/:id')
    .put(updateUser);

    app.route('/user/delete/:id')
    .delete((req, res) => res.send("Delete a user"));

}

export default routes;