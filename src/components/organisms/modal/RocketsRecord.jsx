import React from "react";

const RocketRecord = ({ item }) => {
  const { name, mass } = item;

  return (
    <div className="modal__data">
      <div className="data__type">{name}</div>
      <div className={"data__status"}>{mass.kg}</div>
    </div>
  );
};

export default RocketRecord;
