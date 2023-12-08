import { useState } from "react";
import { useNavigate,useParams } from "react-router-dom";
function EditCourse({courses,updateCourse}) {
    const { courseId } = useParams();
    const navigate = useNavigate();
    let course = courses.find((course) => course._id === courseId);
    const [formCourse,setFormCourse] = useState(course);
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
                updateCourse(formCourse);
                navigate(`/Kanbas/Dashboard`);
            }} >
                Update
            </button>

            <button onClick={()=>{
                navigate(`/Kanbas/Dashboard`);
            }} >
                Cancel
            </button>
        </div>
    );
}

export default EditCourse;