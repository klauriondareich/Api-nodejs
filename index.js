import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './src/routes/appRoutes.js';

const app = express();
const PORT = 3000;

// Database connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://root:<password>@cluster0.mflgi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", 
{useNewUrlParser: true, useUnifiedTopology: true}).then(() =>{
    console.log("connected to DB")
}).catch((error) =>{
    console.log("error when connecting ", error)
});


// Body Parser config
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.get("/", (req, res) =>
    res.send(`Your server is running in PORT=${PORT}`)
);

app.listen(PORT, () => console.log("server is running"));