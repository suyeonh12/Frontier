import { createStore } from "redux";

// 1. 초기값 정의
const initialState = {
  text: "초기값",
};

// 2. store에 접근할 수 있는 reducer 함수 정의
// currentState --> Store 에서 꺼내온 State 값
// action --> dispatch 로 보낸 요청이 담겨 있다
function reducer(currentState = initialState, action) {
  switch (action.type) {
    case "텍스트를 바꿔줘":
      return { text: action.text };
    default:
      return currentState;
  }
}

// 3. 공유저장소 store 생성
const store = createStore(reducer);

export default store;

// import { createStore } from "redux";
// // createStore : 공유저장소를 만드는 기능

// // 1. 공유 저장소 생성
// const store = createStore(reducer);

// // 3. store에 접근할 수 있는 reducer를 생성
// // currentState --> Store에서 꺼내온 State값
// function reducer(currentState, action) {
//   const newState = { ...currentState };

//   // 4. 초기 State값 만들기
//   if (currentState === undefined) {
//     return {
//       text: "초기값",
//     };
//   }

//   if (action.type == "텍스트를 바꿔줘") {
//     newState.text = action.text;
//   }
// }

// export default store;
