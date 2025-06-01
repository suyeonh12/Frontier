import React, { useState } from "react";
// useState : state값을 만들 수 있는 리액트훅!

const Ex01 = () => {
  // 일반변수는 값이 바뀌더라도 화면에 적용되지 않는다!
  let num = 0;

  // 비구조 할당
  // const[state 값, setState 함수] = useState(state 초기값);
  const [number, setNumber] = useState(0);

  function plus() {
    //num++;
    //console.log(num);
    // number++; --> 사용불가!!
    // state값을 바꿀때는 setState 함수를 이용해줘야 한다
    setNumber(number + 1);
  }

  function minus() {
    setNumber(number - 1);
  }

  const [text, setText] = useState();
  function chText(e) {
    // e :  이벤트 객체 (이벤트에 대한 정보)

    // input 태그에 적힌 값으로 text를 바꿔 주세요!!
    setText(e.target.value);
  }

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={minus}>minus</button>
      <button onClick={plus}>plus</button>

      <h1>{text}</h1>
      <input onChange={chText}></input>
    </div>
  );
};

export default Ex01;
