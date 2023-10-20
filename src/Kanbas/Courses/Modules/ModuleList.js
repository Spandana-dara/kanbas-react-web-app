import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import CollapsibleComponent from "./CollapsibleComponent";
import "./index.css";

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  return (
    <ul className="list-group">
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
