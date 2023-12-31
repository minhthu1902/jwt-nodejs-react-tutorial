import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoutes from "./routes/web";
require('dotenv').config();
import bodyParser from 'body-parser';
// import {parse, stringify, toJSON, fromJSON} from 'flatted';
//tao 1 server
const app = express();
const PORT = process.env.PORT || 8080;

//config view engine
configViewEngine(app);

//init web routes
initWebRoutes(app);

//config body-parser
// the body-parser middleware to parse incoming requests with JSON payloadsa
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//tao 1 port tren gate cho chuong trinh chay. Port de phan chia ranh gioi nguon tai nguyen

app.listen(PORT, () => {
  console.log(">>> JWT Backend is running on the port =" + PORT);
});

export default app