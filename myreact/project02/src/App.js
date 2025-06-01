import logo from "./logo.svg";
import "./App.css";
// 4. 컴포넌트 사용하는 곳에서 불러와서(import) 사용하기
import Menu from "./component/Menu";
import MyTeam from "./component/MyTeam";

function App() {
  // props : 상위컴포넌트에서 하위컴포넌트로 데이터 전달시 사용된다!
  // (속성)
  let data = "ex";
  return (
    <div className="App">
      {/* 문자열 전달시엔 "" 안에, 그 외의 데이터는 {} 안에 쓰기 */}
      <Menu name="아메리카노" price={3500}></Menu>
      <Menu name="카페라떼" price={4000}></Menu>
      <Menu></Menu>

      <MyTeam department="전략기획" name="선영표"></MyTeam>
      <MyTeam department="연구개발" name="임승환"></MyTeam>
      <MyTeam department="홍보팀" name="양세영"></MyTeam>
      <MyTeam department="교육운영" name="박수현"></MyTeam>
    </div>
  );
}

export default App;
