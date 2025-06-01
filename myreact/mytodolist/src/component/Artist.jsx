import React from "react";

const Artist = () => {
  let array = ["아이유", "수지", "나연", "사나", "원영"];
  return (
    <div>
      {array.map((data) => (
        <p>{data}</p>
      ))}
    </div>
  );
};

export default Artist;
