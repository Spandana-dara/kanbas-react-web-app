import Labs from "./Labs";
import Kanbas from "./Kanbas";
import { HashRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage";
import Project from "./project";

function App() {
  const screen = "Labs";
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/project/*" element={<Project />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
