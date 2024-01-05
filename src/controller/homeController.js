import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// get the client
import mysql from 'mysql2';
// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'jwt'
});

const handleHelloWorld = (req, res) => {
  return res.render("home.ejs");
};

const handleUserPage = (req, res) => {
  // model => get data from database
  return res.render("user.ejs");
};
const handleCreateNewUser = (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  let username = req.body.username;


  connection.query(
    'INSERT INTO users (`email`, `password`, `username`) VALUES (?, ?, ?)',
    [email, password, username],
    function(err, results, fields) {
      if (err) {
        console.log(err);
        return res.status(500).send("Error while creating a new user");
      }
      console.log(">>> check request: ", req.body);
      console.log("New user created:", results);
      return res.status(201).send("User created successfully");
    }
  );
};

module.exports = {
  handleHelloWorld,
  handleUserPage,
  handleCreateNewUser
};
