import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const nav = useNavigate();

  function chPage() {
    // nav('원하는 이동 주소값')
    nav("/about");
  }
  return (
    <div>
      <h1>HOME</h1>
      {/*
        a태그, Link 컴포넌트를 통해서 주소 값을 바꿀 수 있다
        a태그 --> index.html을 새로고침한다
        Link --> 새로고침하지 않으며 안에 있는 컴포넌트만 바꿔준다!
      */}
      <a href="/about">About컴포넌트띄우기</a>
      <br></br>
      <Link to="/about">About컴포넌트띄우기2</Link>
      <br></br>
      <button onClick={chPage}>페이지 이동하기!!</button>

      {/* 1,2,3번째 상품 상세보기 페이지로 갈 수 있는 Link */}
      <Link to="/product?pronum=1">1번째 상품</Link>
      <Link to="/product?pronum=2">2번째 상품</Link>
      <Link to="/product?pronum=3">3번째 상품</Link>
    </div>
  );
};

export default Home;
