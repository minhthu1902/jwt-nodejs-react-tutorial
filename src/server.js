import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoutes from "./routes/web";
import bodyParser from 'body-parser';
require('dotenv').config();

// import {parse, stringify, toJSON, fromJSON} from 'flatted';
//tao 1 server
const app = express();
const PORT = process.env.PORT || 8080;

//config view engine
configViewEngine(app);

//config body-parser
// the body-parser middleware to parse incoming requests with JSON payloadsa
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//init web routes
initWebRoutes(app);

//tao 1 port tren gate cho chuong trinh chay. Port de phan chia ranh gioi nguon tai nguyen

app.listen(PORT, () => {
  console.log(">>> JWT Backend is running on the port =" + PORT);
});

export default app

// What caused the error reading database is the order of middleware registration . In this file, we should configure the body parser middleware before defining your routes. The line initWebRoutes(app) was moved after 2 lines of app.use to ensure that the body-parser middleware is applied before any routes that might need to access `req.body`. -> The user data is successfully added when put on input on localhost webpage. Fixed the error "type error:Cannot read properties of undefined (reading 'email')"