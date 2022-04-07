import { createNewUser } from '../controllers/appControllers.js';

const routes = (app) => {

    // User management routes
    
    app.route('/user/all')
    .get((req, res, next) =>
     {
        // Middleware
        console.log(`Request : ${req.originalUrl}`)
        console.log(`Request : ${req.method}`);
        next();
    }, (req, res, next) =>{
        res.send("GET request done!")
    }
        
    );

    app.route('/user/create')
    .post(createNewUser);

    app.route('/user/view/:id')
    .put((req, res) => res.send("Display a user"));

    app.route('/user/update/:id')
    .put((req, res) => res.send("Update a user"));

    app.route('/user/delete/:id')
    .delete((req, res) => res.send("Delete a user"));

}

export default routes;