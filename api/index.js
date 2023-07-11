const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))
// Enable CORS
app.use(cors());
const API_URL =
  "https://master-7rqtwti-yj2le3kr2yhmu.uk-1.platformsh.site/yumazoo";

// Define the proxy route
app.get("/recipes", (req, res) => {
  axios
    .get(`${API_URL}/recipes`)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      res.status(500).json({ error: "An error occurred" });
    });
});

app.post("/recipes", (req, res) => {
  axios
    .post(`${API_URL}/recipes`, req.body)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      res.status(500).json({ error: "An error occurred" });
    });
});

// Start the server
// const port = 5000;
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

module.exports = app;
