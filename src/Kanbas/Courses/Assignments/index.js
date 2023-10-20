import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import { useCollapse } from "react-collapsed";
import "./index.css";
import { AiOutlineHolder, AiOutlinePlus } from "react-icons/ai";
import { FaCaretRight } from "react-icons/fa6";
import { FaRegPenToSquare } from "react-icons/fa6";
import { FaEllipsisVertical } from "react-icons/fa6";

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId,
  );
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
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
            <button class="btn btn-danger">
              <AiOutlinePlus /> Assignment
            </button>
            <button class="btn btn-secondary">
              <FaEllipsisVertical></FaEllipsisVertical>
            </button>
          </div>
        </div>
      </div>
      <hr style={{ marginTop: 4 }} />
      <div className="assg-collapsible">
        <div className="header" {...getToggleProps()}>
          <AiOutlineHolder style={{ marginRight: 10 }}></AiOutlineHolder>
          <FaCaretRight style={{ marginRight: 10 }}></FaCaretRight>
          <h5>Assignments</h5>
        </div>
        <div {...getCollapseProps()}>
          <div className="content">
            {courseAssignments.map((assignment) => (
              <Link
                key={assignment._id}
                to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                className="list-group-item"
              >
                <div className="assignment" {...getToggleProps()}>
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
                      Due Oct 4 at 11:59pm | 100 pts
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Assignments;
