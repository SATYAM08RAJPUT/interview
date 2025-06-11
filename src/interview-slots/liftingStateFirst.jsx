import { useState } from "react";

const LiftingStateFirst = ({ value1, setValue1 }) => {
  return (
    <>
      <input value={value1} onChange={(e) => setValue1(e.target.value)} />
    </>
  );
};
export default LiftingStateFirst;
