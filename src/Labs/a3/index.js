import Classes from "./Classes";
import ConditionalOutput from "./ConditionalOutput.js";
import DynamicStyling from "./DynamicStyling";
import JavascriptFunctions from "./JavascriptFunctions";
import PathParameters from "./PathParameters";
import Styles from "./Styles";
import TodoItem from "./todo/TodoItem";
import TodoList from "./todo/TodoList";

function Assignment3() {
  return (
    <div>
      <h1>Assignment 3</h1>
      <TodoList/>
      <TodoItem/>
      <ConditionalOutput/>
      <Styles/>
      <Classes/>
      <JavascriptFunctions />
      <PathParameters/>
      <DynamicStyling/>
    </div>
  );
}

export default Assignment3;
