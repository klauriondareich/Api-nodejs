import express from 'express';
import routes from './src/routes/appRoutes.js';

const app = express();
const PORT = 3000;

routes(app);

app.get("/", (req, res) =>
    res.send(`Your server is running in PORT=${PORT}`)
);

app.listen(PORT, () => console.log("server is running"));