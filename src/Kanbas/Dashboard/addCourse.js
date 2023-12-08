import { useState } from "react";
import { useNavigate } from "react-router-dom";
function AddCourse({setCourse,addCourse}) {
    const navigate = useNavigate();
    const [formCourse,setFormCourse] = useState({
        name: "New Course",      number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15",
      });
    return (
        <div>
            <input value={formCourse.name} className="form-control"
                onChange={(e) => setFormCourse({ ...formCourse, name: e.target.value })} />
            <input value={formCourse.number} className="form-control"
                onChange={(e) => setFormCourse({ ...formCourse, number: e.target.value })} />
            <input value={formCourse.startDate} className="form-control" type="date"
                onChange={(e) => setFormCourse({ ...formCourse, startDate: e.target.value })} />
            <input value={formCourse.endDate} className="form-control" type="date"
                onChange={(e) => setFormCourse({ ...formCourse, endDate: e.target.value })} />
            <button onClick={()=>{
                addCourse(formCourse);
                navigate(`/Kanbas/Dashboard`);
            }} >
                Add
            </button>

        </div>
    );
}

export default AddCourse;