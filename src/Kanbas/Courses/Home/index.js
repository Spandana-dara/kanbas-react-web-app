import ModuleList from "../Modules/ModuleList";
import "./index.css";
import { AiOutlineCheckCircle, AiOutlinePlus } from "react-icons/ai";
import { FaEllipsisVertical } from "react-icons/fa6";
import db from "../../Database";
import { useParams } from "react-router-dom";
import { TbFileImport } from "react-icons/tb";
import { BsBarChartLineFill } from "react-icons/bs";
import { BiTargetLock } from "react-icons/bi";
import { AiOutlineBell } from "react-icons/ai";
import { GrAnnounce } from "react-icons/gr";

function Home() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId,
  );
  return (
    <div className="row">
      <div className="col-9">
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <div className="home-row-buttons float-end">
            <button class="btn btn-secondary"> Collapse All</button>
            <button class="btn btn-secondary"> View Progress</button>
            <button class="btn btn-secondary">
              {" "}
              <AiOutlineCheckCircle
                style={{ color: "green" }}
              ></AiOutlineCheckCircle>{" "}
              Publish All
            </button>
            <button class="btn btn-danger">
              <AiOutlinePlus></AiOutlinePlus> Module
            </button>
            <button class="btn btn-secondary">
              <FaEllipsisVertical></FaEllipsisVertical>
            </button>
          </div>
        </div>
        <hr />
        <ModuleList />
      </div>
      <div className="col-3">
        <div className="status-column-buttons">
          <button class="btn btn-secondary">
            <TbFileImport /> Import Existing Content
          </button>
          <br />
          <button class="btn btn-secondary">
            {" "}
            <TbFileImport /> Import From Commons
          </button>
          <br />
          <button class="btn btn-secondary">
            <BiTargetLock /> Choose Home Page
          </button>
          <br />
          <button class="btn btn-secondary">
            <BsBarChartLineFill /> View Course Stream
          </button>
          <br />
          <button class="btn btn-secondary">
            <GrAnnounce /> New Announcements
          </button>
          <br />
          <button class="btn btn-secondary">
            <BsBarChartLineFill /> New Analytics
          </button>
          <br />
          <button class="btn btn-secondary">
            <AiOutlineBell /> View Course Notifications
          </button>
          <br />
        </div>
        <h6 style={{ marginTop: 10 }}>To Do</h6>
        <hr />
        <div>
          {courseAssignments.map((assignment, index) => (
            <div className="grade-assg-title">
              <h5>Grade {assignment.title}</h5>
              <p>100 points . Due Oct 4 at 11:59pm </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Home;
