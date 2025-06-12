import { useState } from "react";
import "./App.css";
import FirstUseMemo from "./interview-slots/firstSlot";
import LiftingStateFirst from "./interview-slots/liftingStateFirst";
import LiftingStateSecond from "./interview-slots/liftingStateSecond";
import RegularFun from "./interview-slots/Arrowfunction";
import ArrowFun from "./interview-slots/Arrowfunction";

function App() {
  const [count, setCount] = useState(0);
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  console.log("value1", value1);
  console.log("value2", value2);
  return (
    <>
      <h3>Welcome to Interview Question</h3>
      <FirstUseMemo value={"satyam Rajput"} />
      <button onClick={() => setCount(count + 1)}>Increase</button>
      {count}
      <h3>Concept of Lifting stateUp</h3>
      <LiftingStateFirst value1={value1} setValue1={setValue1} />
      <LiftingStateSecond value2={value2} setValue2={setValue2} />
      <p>
        Combined Values: {value1} {value2}
      </p>
      {/* <RegularFun /> */}
      <ArrowFun />
    </>
  );
}

export default App;
