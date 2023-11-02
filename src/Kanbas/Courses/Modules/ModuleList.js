import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import CollapsibleComponent from "./CollapsibleComponent";
import "./index.css";
import { useState } from "react";

function ModuleList() {
  const { courseId } = useParams();
  const [modules, setModules] = useState(db.modules);
  const [module, setModule] = useState({
    name: "New Module",
    description: "New Description",
    course: courseId,
  });

  return (
    <ul className="list-group">
      <li className="list-group-item">
        <div className="mb-3 row">
          <div className="col col-2">
            <input
              value={module.name}
              onChange={(e) => setModule({ ...module, name: e.target.value })}
              className="form-control"
              placeholder="Module Name"
            />
          </div>
          <div className="col">
            <button className="btn btn-success">Add</button>
          </div>
        </div>
        <div className="mb-3 col-3">
          <textarea
            value={module.description}
            onChange={(e) =>
              setModule({ ...module, description: e.target.value })
            }
            className="form-control"
            placeholder="Module Description"
            rows={4}
          />
        </div>
      </li>

      {modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <CollapsibleComponent module={module}>
            {module.lessons && (
              <ul className="list-group lesson-list">
                {module.lessons.map((lesson, index) => (
                  <div className="module-lesson">
                    <p>{lesson.name}</p>
                    <p>{lesson.description}</p>
                  </div>
                ))}
              </ul>
            )}
          </CollapsibleComponent>
        ))}
    </ul>
  );
}
export default ModuleList;
