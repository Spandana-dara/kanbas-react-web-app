import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import CollapsibleComponent from "./CollapsibleComponent";
import "./index.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./moduleReducer";
import { findModulesForCourse, createModule } from "./client";
import * as client from "./client";

function ModuleList() {
  const { courseId } = useParams();
  useEffect(() => {
    findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
    );
  }, [courseId]);

  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  const handleAddModule = () => {
    createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };

  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };

  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };


  return (
    <ul className="list-group col-8">
      <li className="list-group-item">
        <div className="mb-3 row">
          <div className="col col-3">
            <input
              value={module.name}
              onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
              className="form-control"
              placeholder="Module Name"
            />
          </div>
          <div className="ms-4 col">
            <button
              className="btn btn-success"
              onClick={handleAddModule}
            >
              Add
            </button>
            <button className="ms-2 btn btn-primary" onClick={handleUpdateModule}>
              Update
            </button>
          </div>
        </div>
        <div className="mb-3 col-3">
          <textarea
            value={module.description}
            onChange={(e) =>
              dispatch(setModule({ ...module, description: e.target.value }))
            }
            className="form-control"
            placeholder="Module Description"
            rows={4}
          />
        </div>
      </li>

      {/* {modules
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
        ))} */}
      {modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <li key={index} className="list-group-item">
            <div className="row">
              <div className="col">
                <h3>{module.name}</h3>
                <p>{module.description}</p>
                <p>{module._id}</p>
              </div>
              <div className="col">
                <button
                  className="btn btn-success me-2"
                  onClick={()=>dispatch(setModule(module))}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDeleteModule(module._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </li>
        ))}
    </ul>
  );
}
export default ModuleList;
