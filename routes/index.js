const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send(res.send(`<h1> ** NexTalk API ** </h1>`));
});

console.log("Routes are running fine");
module.exports = router;
