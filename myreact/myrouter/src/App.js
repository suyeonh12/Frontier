import logo from "./logo.svg";
import "./App.css";
import Home from "./component/Home";
import About from "./component/About";
import Product from "./component/Product";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* Home 컴포넌트 About 컴포넌트 각각 주소값을 지정해서
          해당하는 주소값으로 접근했을때만 출력!!
      */}
      {/*
        Routes : 주소값을 관리하는 컴포넌트
        Route : 실제로 컴포넌트에 주소를 부여해주는 컴포넌트 
         --> path : 주소값 지정
         --> element : 주소값에 따른 띄워질 컴포넌트를 지정
      */}
      <h1>Router 활용 상단 메뉴</h1>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/product" element={<Product></Product>}></Route>
      </Routes>
    </div>
  );
}

export default App;
