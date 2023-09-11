const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fileUpload = require("express-fileupload");

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use(fileUpload());

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post('/video-upload', (req, res) => {
  console.log(req.files);
  res.send('Video uploaded successfully!');
});

app.listen(port, () => {
  console.log("Server is running on port " + port);
});
