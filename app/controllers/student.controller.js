const {
    getList,
    getDetailsById,
    create,
    updateById,
    deleteById,
} = require("../services/student.service");

const getStudentList = async (req, res) => {
    const studentList = await getList();
    if (studentList) {
        res.status(200).send(studentList);
    } else {
        res.status(404).send("Not found!!!");
    }
};

const getStudentDetails = async (req, res) => {
    const { id } = req.params;

    const studentDetails = await getDetailsById(id);

    if (studentDetails) {
        res.status(200).send(studentDetails);
    } else {
        res.status(404).send("Not found!!!");
    }
};

const createStudent = async (req, res) => {
    let student = req.body;

    const createdStudent = await create(student);
    res.status(201).send(createdStudent);
};

const updateStudent = async (req, res) => {
    const { id } = req.params;
    const newStudent = req.body;

    const updatedStudent = await updateById(id, newStudent);
    if (updatedStudent) {
        res.status(200).send(updatedStudent);
    } else {
        res.status(404).send("Not Found!!!");
    }
};

const deleteStudent = async (req, res) => {
    const { id } = req.params;

    const deletedStudent = await deleteById(id);

    if (deletedStudent) {
        res.status(200).send(deletedStudent);
    } else {
        res.status(404).send("Not found!!!");
    }
};

module.exports = {
    getStudentList,
    getStudentDetails,
    createStudent,
    updateStudent,
    deleteStudent,
};
