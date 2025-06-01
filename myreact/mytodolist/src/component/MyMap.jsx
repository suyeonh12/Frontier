import React from "react";

const MyMap = () => {
  let array = [1, 2, 3, 4, 5];
  // array 에 있던 데이터를 가져와서 2를 곱한 새로운 배열을 만들거예요!
  // data => array에 있던 데이터를 순차적으로 가져온다!
  // [2,4,6,8,10]
  return (
    <div>
      <div>{array.map((data) => data * 2)}</div>
      <div>
        {array.map((data) => (
          <h1>{data}</h1>
        ))}
      </div>
      <h1>FILTER</h1>
      {/* array에 있는 데이터들중 짝수만 반환해서 새로운 배열을 만들어 주겠다! */}
      <div>
        {array
          .filter((data) => data % 2 === 0) // 2 4
          .map(
            // <h1>2</h1> <h1>4</h1>
            (data) => (
              <h1>{data}</h1>
            )
          )}
      </div>
    </div>
  );
};

export default MyMap;
