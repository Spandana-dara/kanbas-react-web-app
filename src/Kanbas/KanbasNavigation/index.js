import { Link, useLocation } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { RiDashboard3Fill } from "react-icons/ri";
import { FaBook } from "react-icons/fa";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import "./index.css";
import "../index.css";
function KanbasNavigation() {
  const links = ["Account", "Dashboard", "Courses", "Calendar"];

  const linkToDefault = {
    Account: "",
    Dashboard: "",
    Courses: "RS102",
    Calendar: "",
  };
  const linkToIconMap = {
    Account: <BiUserCircle className="wd-icon" />,
    Dashboard: <RiDashboard3Fill className="wd-icon" />,
    Courses: <FaBook className="wd-icon" />,
    Calendar: <BsFillCalendar2WeekFill className="wd-icon" />,
  };

  const { pathname } = useLocation();
  return (
    <div className="list-group wd-kanbas-navigation sidebar">
      <Link
        key="Neu_Logo"
        to={links[1]}
        className="list-group-item"
        style={{ marginTop: 10 }}
      >
        <img
          src="https://i.pinimg.com/originals/08/bd/47/08bd47b365a7ad4ed868352014ecbd48.png"
          alt="NEU Logo"
          class="img-fluid"
          width="80"
          height="30"
        />
      </Link>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link}/${linkToDefault[link]}`}
          className={`list-group-item ${pathname.includes(link) && "active"}`}
        >
          {linkToIconMap[link]}
          <br />
          <div
            className={
              pathname.includes(link)
                ? "wd-kanbas-navigation-text-active"
                : "wd-kanbas-navigation-text"
            }
          >
            {link}
          </div>
        </Link>
      ))}
    </div>
  );
}
export default KanbasNavigation;
