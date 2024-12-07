import {useContext} from "react";
import { StudentContext } from "../Contexts/Student";

const AbsentStudentList = () => {
  const {students, toggleHandler} = useContext(StudentContext);
  const absentList = students.filter(
    (student) => student.isPresent === false
  );

  return (
    <div className="list absent-list">
      <h2>Absent Students</h2>
      <ul>
        {absentList.map((item) => (
          <li key={item.id}>
            <span>{item.name}</span>
            <button onClick={() => toggleHandler(item)}>
              Accidentally Added
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AbsentStudentList;
