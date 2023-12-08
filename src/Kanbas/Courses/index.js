import React, { useEffect, useState } from "react";
import {
  useParams,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { AiOutlineMenu, AiOutlineRight } from "react-icons/ai";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import "./index.css";
import axios from "axios";
import { BACKEND_BASE_URL } from "../../envVariables";
function Courses() {
  const { courseId } = useParams();
  const { pathname } = useLocation();
  const [, , , , screen] = pathname.split("/");
  const [course, setCourse] = useState({});
  const findCourseById = async (courseId) => {
    const response = await axios.get(
      `${BACKEND_BASE_URL}/courses/${courseId}`
    );
    setCourse(response.data);
  };

  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);


  return (
    <div>
      <div className="course-heading">
        <div className="course-name">
          <AiOutlineMenu />
          <h6>{course._id}</h6>
          <AiOutlineRight />
          <h6 style={{ color: "black", fontWeight: 300 }}>{screen}</h6>
        </div>
      </div>
      <hr />
      <div className="d-flex">
        <CourseNavigation />
        <div style={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor />}
            />
            <Route path="Grades" element={<Grades />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Courses;
