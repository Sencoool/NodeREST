// IaaS Infrastructure as a service
// PaaS Platform as a service
// SaaS Software as a service 
require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World! Testing NodeMon !!!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});