import BooleanVariables from "./BooleanVariables";
import IfElse from "./IfElse";
import VariableTypes from "./VariableTypes";
import VariablesAndConstants from "./VariablesAndConstants";

function Javascript(){
    console.log('Hello World!');
    return(
        <div>
            <h1>JavaScript</h1>
            <VariablesAndConstants/>
            <VariableTypes/>
            <BooleanVariables/>
            <IfElse/>
        </div>
    )
}

export default Javascript;