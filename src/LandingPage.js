import { Link } from "react-router-dom";
function LandingPage() {
  return (
    <div className="container">
      <div className="container">
        <h2>CS 5610 : Web Development </h2>
        <h4>Spandana Reddy Dara : 002625721</h4>
        <nav className="nav nav-tabs mt-2">
          <Link to="/Labs" className="nav-link">
            Labs
          </Link>
          <Link to="/Kanbas" className="nav-link">
            Kanbas
          </Link>
          <Link to="/project" className="nav-link">
            Projects
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default LandingPage;
