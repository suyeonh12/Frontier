import React from "react";
// 컴포넌트 : 화면을 이루는 구성 단위

// 1. 컴포넌트를 만들 때는 반드시 대문자로 시작해야 한다!!
// 2. 컴포넌트는 함수 또는 클래스 형식으로 만들 수 있다!!
export const Menu = () => {
  return (
    <div>
      <h1>아메리카노</h1>
      <p>3500원</p>
    </div>
  );
};

// 3. 다른 곳에서 사용해야 하기 때문에 export를 통해서 내보내야 한다!
export default Menu;
