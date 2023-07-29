require("dotenv").config();

const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const basicAuth = require("express-basic-auth");
const morgan = require('morgan')

const app = express();
const port = 3000;

app.use(
  basicAuth({
    users: {
      [process.env.BASIC_AUTH_USERNAME]: process.env.BASIC_AUTH_PASSWORD,
    },
    challenge: true,
  })
);

app.use(morgan('combined'))
app.use(cors());
app.use(helmet());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
