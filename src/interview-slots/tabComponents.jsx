import { useState } from "react";

const tabList = [
  {
    title: "A",
    content: "Am the content for Tab A 😀",
  },
  {
    title: "B",
    content: "Can we go with same content for tab B 🤔",
  },
  {
    title: "C",
    content: "Hey's look C for Chips, From tab C 😝",
  },
  {
    title: "D",
    content: " will This Tab do a Dancing 🕺🏻",
  },
];

const TabCom = () => {
  const [index, setIndex] = useState(0);

  const tabView = (i) => {
    setIndex(i++);
  };

  return (
    <>
      {tabList.map((itm, i) => {
        return <div onClick={() => tabView(i)}>{itm.title}</div>;
      })}
      {tabList && tabList[index].content}
    </>
  );
};

export default TabCom;
