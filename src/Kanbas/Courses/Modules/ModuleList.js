import { useParams } from "react-router-dom";
import React, { useEffect } from "react";
import "./index.css";
import { AiOutlineHolder } from "react-icons/ai";
import { FaCaretRight } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./modulesReducer";
import * as client from "./client";
function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();
  useEffect(() => {
    client.findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
    );
  }, [courseId]);

  const handleAddModule = () => {
    client.createModule(courseId, module).then((module) => {
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
    <ul className="list-group">
       <li className="list-group-item">
       <div className="moduleForm">
        <div style={{ padding: 10 }}>
        <input className="form-control" value={module.name}
          onChange={(e) =>
            dispatch(setModule({ ...module, name: e.target.value }))
          }
        />
        <textarea className="form-control" value={module.description}
          onChange={(e) =>
            dispatch(setModule({ ...module, description: e.target.value }))
          }
        />
        </div>
        <div className="module-addOptions">
        <button  onClick={handleAddModule} type="button" class="btn btn-success">Add</button>
        <button onClick={handleUpdateModule} type="button" class="btn btn-primary">
                Update
        </button>
        </div>
      </div>
      </li>
      {modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <div className="collapsible ">
          <div className="header">
            <div style={{display:"flex"}}>
              <div>
              <AiOutlineHolder style={{ marginRight: 4 }}></AiOutlineHolder>
            <FaCaretRight style={{ marginRight: 4 }}></FaCaretRight>
              </div>
            <h5 style={{ padding: 0, margin: 0 }}>{module.name}</h5>
            </div>
            <div className="module-editOptions">
            <button
                  onClick={() => handleDeleteModule(module._id)} type="button" class="btn btn-danger">
                  Delete
                </button>
                <button
                  onClick={() => dispatch(setModule(module))} type="button" class="btn btn-warning">
                  Edit
                </button>
            </div>
          </div>
          <div >
              <div className="content">{module.description}</div>
          </div>
        </div>
        ))}
    </ul>
  );
}
export default ModuleList;
