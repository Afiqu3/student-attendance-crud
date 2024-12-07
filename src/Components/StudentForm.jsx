import React from "react";
import { useContext } from "react";
import { StudentContext } from "../Contexts/Student";

const StudentForm = () => {
  const studentCtx = useContext(StudentContext);
  return (
    <form className="student-form" onSubmit={studentCtx.submitHandler}>
      <input
        type="text"
        value={studentCtx.studentName}
        onChange={(event) => studentCtx.setStudentName(event.target.value)}
      />
      <button type="submit">
        {studentCtx.updateMode ? "Update Student" : "Add Student"}
      </button>
    </form>
  );
};
export default StudentForm;
