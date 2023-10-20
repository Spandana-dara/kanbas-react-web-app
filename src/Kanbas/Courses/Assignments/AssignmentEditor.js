import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../Database";

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId,
  );

  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div style={{ marginTop: 16 }}>
      <h6>Assignment Name</h6>
      <input value={assignment.title} className="form-control mb-2" />
      <hr />
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
