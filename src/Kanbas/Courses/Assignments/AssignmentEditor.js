import React, { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, setAssignment, updateAssignment } from "./assignmentsReducer";
import * as client from "./client";

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignments = useSelector((state) => state.assignmentReducer.assignments);
  const assignment = assignments.find(
    (assignment) => assignment._id === assignmentId,
  );
  const newAssignment = { title: "New assignment title", description: "New description", dueDate: "2023-01-01", availableFromDate: "2023-01-01", availableUntilDate: "2023-01-01" }
  const [assignmentForm, setAssignmentForm] = useState(assignmentId === "newAssignment" ? newAssignment : assignment);

  const { courseId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSave = () => {
    if(assignmentId === "newAssignment") {
      client.createAssignment(courseId,assignmentForm).then((assignment)=>{
        dispatch(addAssignment(assignment))
      });
    } else {
      client.updateAssignment(assignmentForm).then((assignment)=>{
        dispatch(updateAssignment(assignment))
      });
    }
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div style={{ marginTop: 16 }}>
      <div className="assignmentForm">
        <label >Assignment Name</label>
        <input value={assignmentForm.title} className="form-control"
          onChange={(e) => setAssignmentForm({ ...assignmentForm, title: e.target.value })} />

        <label >Assignment description</label>
        <textarea value={assignmentForm.description} className="form-control"
          onChange={(e) => setAssignmentForm({ ...assignmentForm, description: e.target.value })} />
        <div className="assignCell">
          <label >Assign</label>

          <div className="assignBox">

            <label >Due</label>
            <input value={assignmentForm.dueDate} className="form-control" type="date"
              onChange={(e) => setAssignmentForm({ ...assignmentForm, dueDate: e.target.value })} />

            <label >Available From </label>
            <input value={assignmentForm.availableFromDate} className="form-control" type="date"
              onChange={(e) => setAssignmentForm({ ...assignmentForm, availableFromDate: e.target.value })} />
            <label >Available Until</label>
            <input value={assignmentForm.availableUntilDate} className="form-control" type="date"
              onChange={(e) => setAssignmentForm({ ...assignmentForm, availableUntilDate: e.target.value })} />


          </div>
        </div>
      </div>
      <div className="float-end">
        <Link
          to={`/Kanbas/Courses/${courseId}/Assignments`}
          className="btn btn-secondary cancel-button"
        >
          Cancel
        </Link>
        <button onClick={handleSave} className="btn btn-danger save-button">
          Save
        </button>
      </div>
    </div>
  );
}

export default AssignmentEditor;
