const express = require("express");
const studentRouter = require("./student.router");
const router = express.Router();

// http://localhost:7777/students/
router.use("/students/", studentRouter);

module.exports = router;
