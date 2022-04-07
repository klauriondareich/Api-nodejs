import { createNewUser, deleteUser, getUserById, getUsers, updateUser } from '../controllers/usersControllers.js';

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

}

export default routes;