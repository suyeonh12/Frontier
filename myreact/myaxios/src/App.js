import logo from "./logo.svg";
import "./App.css";
// axios 라이브러리 가져오기!
import axios from "axios";

function App() {
  async function getMovies() {
    // 비동기 통신으로 영화 데이터 가져오기!
    // axios !
    // axios({
    //   // 1. 어디랑 통신할건지
    //   url: "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=27ac8f72eea1d11cea781512d9dfb384&targetDt=20250606",
    //   // 2. 어떤 방식으로 통신할건지 --> default : GET
    //   method: "GET",
    //  // 3. .then () -> 통신성공시 실행할 콜백함수
    //   // result : 서버에서 응답 보낸 값!!
    // }).then((result) => {
    //   console.log(result);
    // });

    // axios 축약구조 --> 안전장치
    // async ~await : 안전장치 해제
    // data : 서버에서 응답 보낸 값
    const data = await axios.get(
      "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=27ac8f72eea1d11cea781512d9dfb384&targetDt=20250606"
    );
    console.log(data);
  }
  return (
    <div className="App">
      <h1>영화순위 데이터 가져오기</h1>
      <button onClick={getMovies}>GET!</button>
    </div>
  );
}

export default App;
