import React, { useState, useEffect } from "react";
// useEffect --> 함수형 컴포넌트에서 생명주기 함수를 사용할 수 있도록 만들어준 React Hook
//           --> componentDidMount + componentDidUpdate

const ExFun = () => {
  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(0);

  function plus() {
    setNum(num + 1);
    // num의 값이 10에 도달하면
    // alert 창을 통해서 '목표숫자 도달'

    /////
  }

  function plus2() {
    setNum2(num2 + 1);
    // num의 값이 10에 도달하면
    // alert 창을 통해서 '목표숫자 도달'

    /////
  }

  useEffect(() => {
    console.log("useEffect 실행");
    if (num == 10) {
      alert("목표숫자 도달");
    }
  }, [num]); // dependency Array : num의 값이 바뀔때만 실행되도록
  // [] --> componentDidMount : 처음 시작시에만 실행됨

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={plus}>plus</button>

      <h1>{num2}</h1>
      <button onClick={plus2}>plus2</button>
    </div>
  );
};

export default ExFun;
