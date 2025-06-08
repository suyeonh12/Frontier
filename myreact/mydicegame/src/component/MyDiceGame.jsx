import React, { useState, useEffect } from "react";

const MyDiceGame = () => {
  const [comDice, setComDice] = useState(1);
  const [userDice, setUserDice] = useState(1);
  const [comScore, setComScore] = useState(0);
  const [userScore, setUserScore] = useState(0);
  const [result, setResult] = useState("");

  function chDice() {
    // 컴퓨터 주사위와 사용자 주사위를 랜덤한 다른 주사위로 바꿔주세요!!
    setComDice(parseInt(Math.random() * 6 + 1));
    setUserDice(parseInt(Math.random() * 6 + 1));
    /// --> comDice, userDice
    if (comDice > userDice) {
    }
  }

  useEffect(
    function () {
      if (comDice > userDice) {
        setComScore(comScore + 1);
      } else if (comDice < userDice) {
        setUserScore(userScore + 1);
      }
    },
    [comDice, userDice]
  );

  useEffect(
    function () {
      if (userScore >= 10) {
        setResult("User 승리!");
      } else if (comScore >= 10) {
        setResult("Com 승리!");
      }
    },
    [userScore, comScore]
  );

  return (
    <div>
      <h1>DICE GAME</h1>
      <button onClick={chDice}>Start</button>
      <div className="dice">
        <img src={`./img/dice${comDice}.png`}></img>
        <h1>Com Score : {comScore}</h1>
      </div>
      <div className="dice">
        <img src={`./img/dice${userDice}.png`}></img>
        <h1>User Score : {userScore}</h1>
      </div>

      <h1>결과 : {result}</h1>
    </div>
  );
};

export default MyDiceGame;
