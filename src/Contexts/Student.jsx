import { useState, createContext } from "react";

export const StudentContext = createContext();

const StudentProvider = ({ children }) => {
  const [studentName, setStudentName] = useState("");
  const [updateMode, setUpdateMode] = useState(false);
  const [students, setStudents] = useState([]);
  const [editableStudents, setEditableStudent] = useState(null);

  const createHandler = (event) => {
    const newStudent = {
      id: Date.now() + "",
      name: studentName,
      isPresent: undefined,
    };
    setStudents([...students, newStudent]);
    setStudentName("");
  };

  const updateHandler = (event) => {
    const updatedStudentList = students.map((student) => {
      if (student.id === editableStudents.id) {
        return {
          ...student,
          name: studentName,
        };
      }
      return student;
    });
    setStudents(updatedStudentList);
    setUpdateMode(false);
    setEditableStudent(null);
    setStudentName("");
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!studentName.trim()) return;
    updateMode ? updateHandler() : createHandler();
  };

  const editHandler = (student) => {
    setUpdateMode(true);
    setStudentName(student.name);
    setEditableStudent(student);
  };

  const removeHandler = (studentId) => {
    const newStudentList = students.filter(
      (student) => student.id !== studentId
    );
    setStudents(newStudentList);
  };

  const makePresentHandler = (student) => {
    if (student.isPresent === true || student.isPresent === false) {
      const val = student.isPresent ? 'present' : 'absent';
      return alert(`Student is already in a ${val} list`);
    }
    const newStudentList = students.map((item) => {
      if (student.id === item.id) {
        return { ...item, isPresent: true };
      }
      return item;
    });
    setStudents(newStudentList);
  };
  const makeAbsentHandler = (student) => {
    if (student.isPresent === true || student.isPresent === false) {
      const val = student.isPresent ? 'present' : 'absent';
      return alert(`Student is already in a ${val} list`);
    }
    const newStudentList = students.map((item) => {
      if (student.id === item.id) {
        return { ...item, isPresent: false };
      }
      return item;
    })
    setStudents(newStudentList);
  };

  const toggleHandler = (student) => {
    const newStudentList = students.map((item) => {
      if (student.id === item.id) {
        return { ...item, isPresent: !item.isPresent };
      }
      return item;
    });
    setStudents(newStudentList);
  };

  const contextValue = {
    studentName, setStudentName,
    updateMode, setUpdateMode,
    students, setStudents,
    editableStudents, setEditableStudent,
    toggleHandler, makeAbsentHandler,
    makePresentHandler, removeHandler,
    editHandler, submitHandler,
    updateHandler, createHandler,
  }

  return (
    <StudentContext.Provider value={contextValue}>
    {children}
    </StudentContext.Provider>);
};

export default StudentProvider;
