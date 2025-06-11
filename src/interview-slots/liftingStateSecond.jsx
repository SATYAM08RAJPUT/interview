import { useState } from "react";

const LiftingStateSecond = ({ value2, setValue2 }) => {
  return (
    <>
      <input value={value2} onChange={(e) => setValue2(e.target.value)} />
    </>
  );
};
export default LiftingStateSecond;
