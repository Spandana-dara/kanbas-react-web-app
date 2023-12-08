import { BACKEND_BASE_URL } from "../../envVariables";
import EncodingParametersInURLs from "./EncodingParametersInUrls";
import WorkingWithArrays from "./WorkingWithArrays";
import WorkingWithObjects from "./WorkingWithObjects";


function Assignment5() {
    return (
      <div>
        <h1>Assignment 5</h1>
        <div className="list-group">
          <a href={`${BACKEND_BASE_URL}/a5/welcome`}
             className="list-group-item">
            Welcome
          </a>
        </div>
        <EncodingParametersInURLs/>
        <WorkingWithObjects/>
        <WorkingWithArrays/>
      </div>
    );
  }
  export default Assignment5;
  
  