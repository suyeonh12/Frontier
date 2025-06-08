import React from "react";
import { useState } from "react";

const MyToDoList = () => {
  const [myList, setMyList] = useState([]);

  const [inputText, setInputText] = useState("");

  function addPlan() {
    // 1. input 태그에 적은 값을 가져오기!!
    // react의 state 배열에 push, pop 사용 x
    // 대신 concat 사용 (불변성의 원칙 지킴)
    setMyList(myList.concat(inputText));
  }

  function deletePlan(deleteIndex) {
    // index 배열 요소에 따른 인덱스
    setMyList(myList.filter((data, index) => index !== deleteIndex));
  }

  return (
    <div>
      <h1>2025 올해는 꼭! 해보자!!</h1>
      {/*
         e : 이벤트 객체(이벤트에 대한 정보)
         e.target : 이벤트를 발생시킨 주체
       */}
      <input onChange={(e) => setInputText(e.target.value)}></input>
      <button onClick={addPlan}>추가하기</button>

      <h1>ToDo List</h1>
      <ol>
        {/* index : 배열의 인덱스 */}
        {myList.map((data, index) => (
          <li>
            {data}
            <button onClick={() => deletePlan(index)}>삭제</button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default MyToDoList;
