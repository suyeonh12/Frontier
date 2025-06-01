import React from "react";

const MyTeam = (props) => {
  return (
    <div>
      <p>{props.department}</p>
      <p>{props.name}</p>
    </div>
  );
};

export default MyTeam;
