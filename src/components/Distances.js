import React from "react";
import LisItem from "./LisItem";

export default function ListOfDistances(props) {
  const listOfDistances = props.data;
  // console.log(listOfDistances);
  const list = listOfDistances.map(item => {
    return <LisItem key={item} distance={item} />;
  });
  return (
    <div>
      <ul>{list}</ul>
    </div>
  );
}
