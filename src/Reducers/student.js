
// const initState = {
//     studentName: "",
//     updateMode: false,
//     students: [],
//     editableStudents: null,
//   };

export const studentReducer = (state, action) => {
    switch(action.type){
        case "CHAMGE_STUDENT_NAME":{
            return {
                ...state,
                studentName: action.payload,
            }
        }
        case "CREATE_STUDENT":{
            const newStudent = {
                id: Date.now() + "",
                name: state.studentName,
                isPresent: undefined,
            };

            return{
                ...state,
                students: [...state.students, newStudent],
                studentName: "",
            }
        }
        case "UPDATE_STUDENT":{

        }
        case "EDIT_STUDENT":{

        }
        case "REMOVE_STUDENT":{

        }
        default:
            return state;
    }
}