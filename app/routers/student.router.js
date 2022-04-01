const express = require("express");
const studentRouter = express.Router();
const {
    getStudentList,
    getStudentDetails,
    createStudent,
    updateStudent,
    deleteStudent,
} = require("../controllers/student.controller");

// GET student list
studentRouter.get("/", getStudentList);

// GET student details
studentRouter.get("/:id/", getStudentDetails);

// CREATE student
studentRouter.post("/", createStudent);

// UPDATE student
studentRouter.put("/:id/", updateStudent);

// DELETE student
studentRouter.delete("/:id/", deleteStudent);

module.exports = studentRouter;
