const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;
const cors = require("cors");
const mongoose = require("./config/mongoose");

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use("/", require("./routes"));

app.listen(PORT, (err) => {
  if (err) {
    console.log(`Error in running the server: ${err}`);
  }

  console.log(`Server is running on port: ${PORT}`);
});
