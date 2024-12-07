import React from 'react'
import { useContext } from 'react';
import { StudentContext } from '../Contexts/Student';

const AllStudentList = () => {
  const studentCtx = useContext(StudentContext);
  return (
    <div className="list all-students">
          <h2>All Students</h2>
          <ul>
            {studentCtx.students.map((student) => (
              <li key={student.id}>
                <span>{student.name}</span>
                <button onClick={() => studentCtx.editHandler(student)}>Edit</button>
                <button onClick={() => studentCtx.removeHandler(student.id)}>
                  Remove
                </button>
                <button onClick={() => studentCtx.makePresentHandler(student)}>
                  Make Present
                </button>
                <button onClick={() => studentCtx.makeAbsentHandler(student)}>
                  Make Absent
                </button>
              </li>
            ))}
          </ul>
        </div>
  )
}

export default AllStudentList
