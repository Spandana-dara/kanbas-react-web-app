import ArrowFunctions from "./ArrowFunctions";
import BooleanVariables from "./BooleanVariables";
import IfElse from "./IfElse";
import TernaryOperator from "./TernaryOperator";
import VariableTypes from "./VariableTypes";
import VariablesAndConstants from "./VariablesAndConstants";
import WorkingWithArrays from "./WorkingWithArrays";
import WorkingWithFunctions from "./WorkingWithFunctions";
import TemplateLiterals from "./TemplateLiterals";
import House from "./House";
import Spread from "./Spread";
import Destructing from "./Destructing";
import FunctionDestructing from "./FunctionDestructing";

function JavascriptFunctions() {
  console.log("Hello World!");
  return (
    <div>
      <h1>JavaScript</h1>
      <VariablesAndConstants />
      <VariableTypes />
      <BooleanVariables />
      <IfElse />
      <TernaryOperator/>
      <WorkingWithFunctions/>
      <WorkingWithArrays/>
      <TemplateLiterals/>
      <House/>
      <Spread/>
      <Destructing/>
      <FunctionDestructing/>
    </div>
  );
}

export default JavascriptFunctions;
