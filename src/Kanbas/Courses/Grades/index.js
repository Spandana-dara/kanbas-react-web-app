import db from "../../Database";
import { useParams } from "react-router-dom";
import { TbFileImport } from "react-icons/tb";
import { BsFunnel } from "react-icons/bs";
import { BsGearFill } from "react-icons/bs";
import { AiFillCaretDown } from "react-icons/ai";
import { LiaFileImportSolid } from "react-icons/lia";
import "./index.css";

function Grades() {
  const { courseId } = useParams();
  const assignments = db.assignments.filter(
    (assignment) => assignment.course === courseId,
  );
  const enrollments = db.enrollments.filter(
    (enrollment) => enrollment.course === courseId,
  );
  return (
    <div>
      <div className="grade-header">
        <h5 style={{ color: "red", alignSelf: "center" }}>
          Gradebook <AiFillCaretDown />
        </h5>
        <div>
          <div className="grade-buttons">
            <button class="btn btn-secondary">
              <TbFileImport /> Import
            </button>
            <button class="btn btn-secondary">
              <LiaFileImportSolid /> Export <AiFillCaretDown />
            </button>
            <button class="btn btn-secondary">
              <BsGearFill />
            </button>
          </div>
        </div>
      </div>
      <div class="row" style={{ marginBottom: 16 }}>
        <div class="col">
          <label for="searchStudents">
            <b>Student Names</b>
          </label>
          <select id="searchStudents" class="form-select">
            <option value="VAL1" selected>
              <span>
                <i class="fa-solid fa-magnifying-glass"></i>Search Students
              </span>
            </option>
            <option value="VAL2">Rollno 1</option>
            <option value="VAL2">Rollno 2</option>
          </select>
        </div>
        <div class="col">
          <label for="assignmentNames">
            <b>Assignment Names</b>
          </label>
          <select id="assignmentNames" class="form-select">
            <option value="VAL1" selected>
              <span>
                <i class="fa-solid fa-magnifying-glass"></i>Search Assignments
              </span>
            </option>
            <option value="VAL2">Assignment 1</option>
            <option value="VAL2">Assignment 2</option>
          </select>
        </div>
      </div>
      <button class="btn btn-secondary margin-t margin-b">
        <BsFunnel /> Apply Filters
      </button>
      <div className="table-responsive" style={{ marginTop: 16 }}>
        <table className="table table-bordered table-striped">
          <tbody>
            <tr>
              <th>Student Name</th>
              {assignments.map((assignment) => (
                <th>{assignment.title}</th>
              ))}
            </tr>
            {enrollments.map((enrollment) => {
              const user = db.users.find(
                (user) => user._id === enrollment.user,
              );
              return (
                <tr>
                  <td>
                    {user.firstName} {user.lastName}
                  </td>
                  {assignments.map((assignment) => {
                    const grade = db.grades.find(
                      (grade) =>
                        grade.student === enrollment.user &&
                        grade.assignment === assignment._id,
                    );
                    return <td>{grade?.grade || ""}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Grades;
