const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send(res.send(`<h1> ** NexTalk API ** </h1>`));
});

router.use("/api/user", require("./user"));

console.log("Routes are running fine");
module.exports = router;
