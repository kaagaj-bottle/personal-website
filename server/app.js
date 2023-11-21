const express = require("express");
const cors = require("cors");

const app = express();

const { initiateDbConnection } = require("./utilities/helper");


app.use(cors());
app.use(express.json());

app.get("/", async (request, response) => {
  response.send(
    'Welcome to the backend'
  );
});


initiateDbConnection();

module.exports = app;
