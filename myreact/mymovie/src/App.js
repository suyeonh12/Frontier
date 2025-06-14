import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    /*if (inputText == "" || inputText.length == 8) {
        let targetDate = "20200101";
        if (inputText.length == 8) {
          targetDate = inputText;
          console.log(targetDate);
        }*/

    // 정규식: 8자리 숫자인지 확인 (예: 20230505)
    const isValidDate = /^\d{8}$/.test(inputText);

    if (inputText === "" || isValidDate) {
      let targetDate = "20200101";
      if (isValidDate) {
        targetDate = inputText;
        console.log("요청 날짜:", targetDate);
      }
      axios({
        url:
          "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=27ac8f72eea1d11cea781512d9dfb384&targetDt=" +
          targetDate,
      }).then((res) => {
        console.log(res);
        // res.data.boxOfficeResult.dailyBoxOfficeList --> 영화정보배열
        setMovieList(res.data.boxOfficeResult.dailyBoxOfficeList);
      });
    }
  }, [inputText]);

  return (
    <div className="App">
      <table border="1">
        <tr>
          <td>영화순위</td>
          <td>영화명</td>
          <td>개봉일</td>
        </tr>
        {movieList.map((item) => (
          <tr>
            <td>{item.rank}</td>
            <td>{item.movieNm}</td>
            <td>{item.openDt}</td>
          </tr>
        ))}
      </table>
      <input
        onChange={(e) => {
          setInputText(e.target.value);
        }}
      ></input>
    </div>
  );
}

export default App;
