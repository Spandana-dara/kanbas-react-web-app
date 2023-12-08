import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./index.css";
import { AiOutlineHolder, AiOutlinePlus } from "react-icons/ai";
import { FaCaretRight } from "react-icons/fa6";
import { FaRegPenToSquare } from "react-icons/fa6";
import { FaEllipsisVertical } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { deleteAssignment, setAssignments } from "./assignmentsReducer";
import * as client from "./client";

function Assignments() {
  const { courseId } = useParams();
  const dispatch = useDispatch();
  const assignments = useSelector((state) => state.assignmentReducer.assignments);
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId,
  );
  useEffect(() => {
    client.findAssignmentsForCourse(courseId)
      .then((assignments) =>
        dispatch(setAssignments(assignments))
    );
  }, [courseId]);

  const handleDelete = (assignmentId) => {
    const result = window.confirm('Do you want to delete this assignment');
    if(result) {
      client.deleteAssignment(assignmentId)
            .then((status)=>{
              dispatch(deleteAssignment(assignmentId))
            });
    }
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 10,
        }}
      >
        <div>
          <input
            type="text"
            placeholder="Search for assignments"
            className="form-control mb-2"
          ></input>
        </div>
        <div>
          <div className="assg-buttons">
            <button class="btn btn-secondary">
              <AiOutlinePlus /> Group
            </button>
            <Link
              key={"newAssignment"}
              to={`/Kanbas/Courses/${courseId}/Assignments/newAssignment`}
            >
              <button class="btn btn-danger">
                <AiOutlinePlus /> Assignment
              </button>
            </Link>
            <button class="btn btn-secondary">
              <FaEllipsisVertical></FaEllipsisVertical>
            </button>
          </div>
        </div>
      </div>
      <hr style={{ marginTop: 4 }} />
      <div className="assg-collapsible">
        <div className="header">
          <AiOutlineHolder style={{ marginRight: 10 }}></AiOutlineHolder>
          <FaCaretRight style={{ marginRight: 10 }}></FaCaretRight>
          <h5>Assignments</h5>
        </div>
        <div>
          <div className="content">
            {courseAssignments.map((assignment) => (

              <div className="assignmentCell">
                <Link

                  key={assignment._id}
                  to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                  className="list-group-item"
                >
                  <div className="assignment" >
                    <AiOutlineHolder
                      style={{ marginRight: 20 }}
                    ></AiOutlineHolder>
                    <FaRegPenToSquare
                      style={{ marginRight: 20 }}
                    ></FaRegPenToSquare>
                    <div className="assg-title">
                      <h5>{assignment.title}</h5>
                      <p>
                        <span style={{ color: "red" }}>Multiple Modules</span> |
                        {" "+assignment.dueDate+" "} | 100 pts
                      </p>
                    </div>
                  </div>
                </Link>
                <div className="assignmentDeleteButton">
                  <button
                    onClick={() => handleDelete(assignment._id)} type="button" class="btn btn-danger">
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Assignments;
