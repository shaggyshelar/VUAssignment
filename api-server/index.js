/* eslint-disable */
const compression = require("compression");
const express = require("express");
const app = express();
const http = require("http").Server(app);
const bodyParser = require("body-parser");
const path = require("path");

const photos = require("./data/photos");
const comments = require("./data/comments");

app.use(compression());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = 8080;

const router = express.Router();

app.get("/", (req, res) => {
  res.json({ status: "api working!!" });
});

router.route("/photos").get((req, res) => {
  res.json(photos);
});

router.route("/comments/:photoCode").get((req, res) => {
  const comment = comments[req.params.photoCode] || [];
  res.json(comment);
});

// register routes
app.use("/api", router);

app.listen(port, () => {
  console.log(`server started on ${port}`);
});
