import React from "react";
// 컴포넌트 : 화면을 이루는 구성 단위

// 1. 컴포넌트를 만들 때는 반드시 대문자로 시작해야 한다!!
// 2. 컴포넌트는 함수 또는 클래스 형식으로 만들 수 있다!!
export const Menu = (props) => {
  // props -> 상위컴포넌트에 보낸 데이터가 담겨있다!(객체)
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.price}원</p>
    </div>
  );
};

// props로 값이 넘어오지 않았을 때 기본값으로 사용하기 위함
Menu.defaultProps = {
  name: "준비중입니다",
  price: "저렴하고 맛있게!",
};

// 3. 다른 곳에서 사용해야 하기 때문에 export를 통해서 내보내야 한다!
export default Menu;
