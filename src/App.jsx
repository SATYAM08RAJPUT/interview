import { useState } from "react";
import "./App.css";
import FirstUseMemo from "./interview-slots/firstSlot";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h3>Welcome to Interview Question</h3>
      <FirstUseMemo value={"satyam Rajput"} />
      <button onClick={() => setCount(count + 1)}>Increase</button>
      {count}
    </>
  );
}

export default App;
