import logo from "./logo.svg";
import "./App.css";
// 4. 컴포넌트 사용하는 곳에서 불러와서(import) 사용하기
import Menu from "./component/Menu";

function App() {
  let data = "ex";
  return (
    <div className="App">
      {data == "ex" ? (
        <div>
          <Menu></Menu>
          <Menu></Menu>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
