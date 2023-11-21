const express = require("express");
const cors = require("cors");

const app = express();

const { initiateDbConnection } = require("./utilities/helper");

const articlesRouter = require('./controllers/articles')

app.use(cors());
app.use(express.json());

app.get("/", async (request, response) => {
  response.send(
    'Welcome to the backend'
  );
});

app.use('/api/articles', articlesRouter)

initiateDbConnection();

module.exports = app;
