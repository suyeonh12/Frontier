import React from "react";
import { useSelector } from "react-redux";
// useSelector : Store에서 값을 꺼내오는 역할

const Right03 = () => {
  // useSelector : 어떤 값을 꺼내올지 콜백 함수가 필요!
  // state --> store 에서 공유하고 있는 값을 가져옴
  const data = useSelector((state) => state.text);
  return (
    <div>
      <span>{data}</span>
    </div>
  );
};

export default Right03;
