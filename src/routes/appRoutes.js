const routes = (app) => {

    // User management routes
    app.route('/user/create')
    .post((req, res) => res.send("Create a user"));

    app.route('/user/all')
    .get((req, res) => res.send("Display all users"));

    app.route('/user/view/:id')
    .put((req, res) => res.send("Display a user"));

    app.route('/user/update/:id')
    .put((req, res) => res.send("Update a user"));

    app.route('/user/delete/:id')
    .delete((req, res) => res.send("Delete a user"));

}

export default routes;