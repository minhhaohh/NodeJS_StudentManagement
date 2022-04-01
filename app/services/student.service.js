const { Student } = require("../models/");

const getList = async () => {
    const studentList = await Student.findAll();
    if (studentList) {
        return studentList;
    } else {
        return false;
    }
};

const getDetailsById = async (id) => {
    const studentDetails = await Student.findOne({
        where: { id },
    });
    if (studentDetails) {
        return studentDetails;
    } else {
        return false;
    }
};

const create = async (student) => {
    const createdStudent = await Student.create(student);
    return createdStudent;
};

const updateById = async (id, newStudent) => {
    const oldStudent = await getDetailsById(id);
    if (oldStudent) {
        oldStudent.name = newStudent.name;
        oldStudent.sex = newStudent.sex;
        oldStudent.age = newStudent.age;
        oldStudent.address = newStudent.address;
        const updatedStudent = await oldStudent.save();
        return updatedStudent;
    } else {
        return false;
    }
};

const deleteById = async (id) => {
    const deletedStudent = await getDetailsById(id);
    if (deletedStudent) {
        const a = await Student.destroy({
            where: { id },
        });
        console.log(a);
        return deletedStudent;
    } else {
        return false;
    }
};

module.exports = {
    getList,
    getDetailsById,
    create,
    updateById,
    deleteById,
};
