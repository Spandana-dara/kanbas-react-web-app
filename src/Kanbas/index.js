import { Route, Routes, Navigate } from "react-router";
import KanbasNavigation from "./KanbasNavigation";
import Courses from "./Courses";
import Account from "./Account";
import Dashboard from "./Dashboard";
import { useEffect, useState } from "react";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";
import { BACKEND_BASE_URL } from "../envVariables";

function Kanbas() {
  return (
    <Provider store={store}>
    <div className="content d-flex-inline">
      <KanbasNavigation />
      <div className="mainContent">
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<Account />} />
          <Route path="Dashboard/*" element={<Dashboard />} />
          <Route path="Courses/:courseId/*" element={<Courses/>} />
          {/* <Route path="Dashboard/:courseId/EditCourse" element={<EditCourse courses={courses} updateCourse={updateCourse}/>}/>
          <Route path="Dashboard/AddCourse" element={<AddCourse addCourse={addNewCourse}/>}/> */}
          <Route path="Calendar" element={<h1>Calendar</h1>} />
        </Routes>
      </div>
    </div>
    </Provider>
  );
}
export default Kanbas;
