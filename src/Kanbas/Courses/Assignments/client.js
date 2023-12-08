import axios from "axios";
import { BACKEND_BASE_URL } from "../../../envVariables";
console.log(BACKEND_BASE_URL)
const COURSES_URL = `${BACKEND_BASE_URL}/courses`;
const ASSIGNMENT_URL = `${BACKEND_BASE_URL}/assignments`;
export const findAssignmentsForCourse = async (courseId) => {
  const response = await axios
    .get(`${COURSES_URL}/${courseId}/assignments`);
  return response.data;
};
export const createAssignment = async (courseId, assignment) => {
    const response = await axios.post(
      `${COURSES_URL}/${courseId}/assignments`,
      assignment
    );
    return response.data;
  };
  
export const deleteAssignment = async (assignmentId) => {
  const response = await axios
    .delete(`${ASSIGNMENT_URL}/${assignmentId}`);
  return response.data;
};

export const updateAssignment = async (assignment) => {
    const response = await axios.
      put(`${ASSIGNMENT_URL}/${assignment._id}`, assignment);
    return response.data;
  };
  