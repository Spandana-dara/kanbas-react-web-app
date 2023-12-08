import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    assignments:[],
    assignment: { title: "New assignment title", 
            description: "New description", 
            dueDate: "2023-01-01", 
            availableFromDate: "2023-01-01", 
            availableUntilDate: "2023-01-01" }
};

const assignmentSlice = createSlice({
    name :'assignments',
    initialState,
    reducers:{
        setAssignments: (state,action) => {
            state.assignments = action.payload
        },
        addAssignment:(state,action) => {
            state.assignments = [action.payload,...state.assignments]
        },
        deleteAssignment:(state,action) => {
            state.assignments = state.assignments.filter(
                (assignment) => assignment._id !== action.payload
            )
        },
        updateAssignment:(state,action) => {
            state.assignments = state.assignments.map((assignment) => {
                if(assignment._id === action.payload._id) {
                    return action.payload
                } else {
                    return assignment
                }
            })
        },
        setAssignment:(state,action) => {
            state.assignment = action.payload
        }
    }
})

export const {addAssignment,deleteAssignment,updateAssignment,setAssignment,setAssignments} = assignmentSlice.actions;
export default assignmentSlice.reducer;