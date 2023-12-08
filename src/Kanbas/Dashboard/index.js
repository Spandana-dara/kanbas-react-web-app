import { Link } from "react-router-dom";
import "./index.css";
import axios from "axios";
import { BACKEND_BASE_URL } from "../../envVariables";
import { useEffect, useState } from "react";

function Dashboard() {
  const [courses, setCourses] = useState([]);
  const URL = `${BACKEND_BASE_URL}/courses`;
  const findAllCourses = async () => {
    const response = await axios.get(URL);
    setCourses(response.data);
  };
  useEffect(() => {
    findAllCourses();

  }, []);
  const [course, setCourse] = useState({
    name: "New Course",      number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
  });
  const addCourse = async () => {
    const response = await axios.post(URL, course);
    setCourses([
      response.data,
      ...courses,
    ]);
    setCourse({ name: "New Course" });
  };

  const deleteCourse = async (courseId) => {
    const response = await axios.delete(
      `${URL}/${courseId}`
    );
    setCourses(courses.filter((c) => c._id !== courseId));
  };

  const updateCourse = async () => {
    const response = await axios.put(
      `${URL}/${course._id}`,
      course
    );
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        }
        return c;
      })
    );
    setCourse({ name: "New Course" });
  };

  return (
    <div>
      <h2 className="text-muted pt-2">Dashboard</h2>
      <hr />
      <h5 className="wd-dashboard-pubcou">
        Published Courses ({courses.length})
      </h5>
      <hr />
      <div className="courseForm">
        <div style={{ padding: 10 }}>
          <input value={course.name} className="form-control"
            onChange={(e) => setCourse({ ...course, name: e.target.value })} /><br />
          <input value={course.number} className="form-control"
            onChange={(e) => setCourse({ ...course, number: e.target.value })} /><br />
          <input value={course.startDate} className="form-control" type="date"
            onChange={(e) => setCourse({ ...course, startDate: e.target.value })} /><br />
          <input value={course.endDate} className="form-control" type="date"
            onChange={(e) => setCourse({ ...course, endDate: e.target.value })} /><br />
        </div>
        <div className="addOptions">
          <button onClick={ addCourse } type="button" class="btn btn-success" >
            Add
          </button>
          <button onClick={updateCourse} type="button" class="btn btn-primary">
            Update
          </button>
        </div>
      </div>
      <div>
      </div>
      {/* <div className="d-flex flex-row flex-wrap row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3"> */}
      {courses.map((course, index) => (
        <div className="course">
          <Link key={course._id} to={`/Kanbas/Courses/${course._id}`}>
            <h5>{course.name}</h5>
          </Link>
          <div className="editOptions">
            <button onClick={(event) => {
              event.preventDefault();
              setCourse(course);
            }} type="button" class="btn btn-warning">
              Edit
            </button>
            <button
              onClick={(event) => {
                event.preventDefault();
                deleteCourse(course._id);
              }} type="button" class="btn btn-danger">
              Delete
            </button>
          </div>

        </div>
      ))}
      {/* </div> */}
    </div>
  );
}

export default Dashboard;
