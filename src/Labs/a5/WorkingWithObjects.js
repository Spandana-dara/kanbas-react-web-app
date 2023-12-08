import React, { useState, useEffect } from "react";
import axios from "axios";
import { BACKEND_BASE_URL } from "../../envVariables";

function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10",
        completed: false,
        score: 0,
    });

    const handleCheckboxChange = () => {
        var checkbox = document.getElementById('completed');
        console.log(checkbox, checkbox.checked)
        if (checkbox.checked) {
            setAssignment({ ...assignment, completed: "true" })
        } else {
            setAssignment({ ...assignment, completed: "false" })
        }
    };

    const URL = `${BACKEND_BASE_URL}/a5/assignment`;
    const fetchAssignment = async () => {
        const response = await axios.get(`${URL}`);
        setAssignment(response.data);
    };
    const updateTitle = async () => {
        const response = await axios.get(`${URL}/title/${assignment.title}`);
        setAssignment(response.data);
    };

    const updateScore = async () => {
        const response = await axios.get(`${URL}/score/${assignment.score}`);
        setAssignment(response.data);
    };

    const updateCompleted = async () => {
        const response = await axios.get(`${URL}/completed/${assignment.completed}`);
        setAssignment(response.data);
    };

    useEffect(() => {
        fetchAssignment();
    }, []);

    return (
        <div>
            <h3>Working With Objects</h3>
            <h4>Retrieving Objects</h4>
            <a
                href={`${BACKEND_BASE_URL}/a5/assignment`}
                className="btn btn-primary me-2"
            >
                Get Assignment
            </a>
            <h4>Retrieving Properties</h4>
            <a
                href={`${BACKEND_BASE_URL}/a5/assignment/title`}
                className="btn btn-primary me-2"
            >
                Get Title
            </a>
            <h4>Modifying Properties</h4>
            <a
                href={`${URL}/title/${assignment.title}`}
                className="btn btn-primary me-2 float-end"
            >
                Update Title
            </a>
            <input
                onChange={(e) =>
                    setAssignment({ ...assignment, title: e.target.value })
                }
                value={assignment.title}
                className="form-control mb-2 w-50"
                type="text"
            />
            <button onClick={updateTitle} className="w-100 btn btn-primary mb-2">
                Update Title to: {assignment.title}
            </button>
            <button onClick={fetchAssignment} className="w-100 btn btn-danger mb-2">
                Fetch Assignment
            </button>
            <a
                href={`${URL}/score/${assignment.score}`}
                className="btn btn-primary me-2 float-end"
            >
                Update Score
            </a>
            <input
                onChange={(e) =>
                    setAssignment({ ...assignment, score: e.target.value })
                }
                value={assignment.score}
                className="form-control mb-2 w-50"
                type="number"
            />
            <button onClick={updateScore} className="w-100 btn btn-primary mb-2">
                Update Score to: {assignment.score}
            </button>
            <a
                href={`${URL}/completed/${assignment.completed}`}
                className="btn btn-primary me-2 float-end"
            >
                Update Completed
            </a>
            <input
                onChange={handleCheckboxChange}
                checked={assignment.completed === "false" || assignment.completed === false ? false : true}
                id="completed"
                name="complete"
                type="checkbox"
            />
            < label for="completed">Completed</label><br></br>
            <button onClick={updateCompleted} className="w-100 btn btn-primary mb-2">
                Update Completed
            </button>
        </div>
    );
}
export default WorkingWithObjects;