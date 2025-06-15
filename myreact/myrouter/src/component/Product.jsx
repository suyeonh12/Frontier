import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
// 주소값에 있는 데이터를 사용할 수 있게끔 도와주는 React Hook

const Product = () => {
  // product/:pronum:1
  // product/:pronum:2
  // product/:pronum:3
  //let { pronum } = useParams();
  let [query, setQuery] = useSearchParams();
  // query -> 데이터(key-value)

  return (
    <div>
      <h1>제품 상세 내용 출력 페이지!</h1>
      <p>{query.get("pronum")}번째 제품에 대한 설명</p>
    </div>
  );
};

export default Product;
