import React, { Component } from "react";

export default class ExClass extends Component {
  // lifeCycle :  컴포넌트의 생명 주기를 의미
  //           --> 생명주기 특정시점(Mount, Update, WillUnMount) 마다 자동 실행 되어지는 함수!

  state = {
    number: 0,
  };

  // Mount --> componentDidMount
  componentDidMount() {
    console.log("컴포넌트 실행!!");
  }
  // Update --> 화면 갱신 --> componentDidUpdate
  componentDidUpdate() {
    console.log("화면 Update");
  }

  render() {
    return (
      <div>
        <h1>{this.state.number}</h1>
        <button
          onClick={() => this.setState({ number: this.state.number + 1 })}
        >
          plus
        </button>
      </div>
    );
  }
}
