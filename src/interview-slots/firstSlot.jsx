// Memo Example

import React from "react";

const FirstUseMemo = React.memo(({ value }) => {
  console.log("render");
  return (
    <>
      <h2>Hello {value}</h2>
    </>
  );
});

export default FirstUseMemo;
