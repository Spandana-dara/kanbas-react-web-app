import db from "../Database";
import { Link } from "react-router-dom";
import { FaRegPenToSquare } from "react-icons/fa6";
import "./index.css";

function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}) {
  return (
    <div>
      <h2 className="text-muted pt-2">Dashboard</h2>
      <hr />
      <h5 className="wd-dashboard-pubcou">
        Published Courses ({courses.length})
      </h5>
      <hr />
      <h5>Course</h5>
      <form>
        <div className="mb-3 col-3">
          <label>
            Course Name:
            <input
              value={course.name}
              onChange={(e) => setCourse({ ...course, name: e.target.value })}
              className="form-control"
              placeholder="Course Name"
            />
          </label>
        </div>

        <div className="mb-3 col-3">
          <label>
            Course Number:
            <input
              value={course.number}
              onChange={(e) => setCourse({ ...course, number: e.target.value })}
              className="form-control"
              placeholder="Course Number"
            />
          </label>
        </div>
        <div className="mb-3 col-3">
          <label>
            Start Date:
            <input
              value={course.startDate}
              onChange={(e) =>
                setCourse({ ...course, startDate: e.target.value })
              }
              className="form-control"
              type="date"
              placeholder="Start Date"
            />
          </label>
        </div>
        <div className="mb-3 col-3">
          <label>
            End Date:
            <input
              value={course.endDate}
              onChange={(e) =>
                setCourse({ ...course, endDate: e.target.value })
              }
              className="form-control"
              type="date"
              placeholder="End Date"
            />
          </label>
        </div>
      </form>
      <div className="mb-4">
        <button onClick={addNewCourse} className="btn btn-success me-3 col-1">
          Add
        </button>
        <button onClick={updateCourse} className="btn btn-primary col-1">
          Update
        </button>
      </div>

      <div className="d-flex flex-row flex-wrap row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
        {courses.map((course, index) => (
          <div key={index}>
            <div className="col wd-custom-card ">
              <div className="card wd-dashboard">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAA1BMVEUAlv+tY//LAAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8GxYgAAb0jQ/cAAAAASUVORK5CYII="
                  alt="..."
                />
                <div className="card-body">
                  <Link key={course._id} to={`/Kanbas/Courses/${course._id}`}>
                    <h5 className="wd-card-course-title">{course.name}</h5>
                  </Link>
                  <h4 className="wd-card-course-code">
                    {course._id}.{course.startDate}.{course.endDate}{" "}
                  </h4>
                  <h6 class="wd-card-sem">{course.semester}</h6>
                  <br />
                  <FaRegPenToSquare />
                  <button
                    className="btn btn-warning me-2 ms-2"
                    onClick={(event) => {
                      event.preventDefault();
                      setCourse(course);
                    }}
                  >
                    Edit
                  </button>

                  <button
                    className="btn btn-danger"
                    onClick={(event) => {
                      event.preventDefault();
                      deleteCourse(course._id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
