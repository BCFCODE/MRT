import React, { Component } from "react";

export interface ICounterProps {}
export interface ICounterState {}

class Counter extends Component<ICounterProps, ICounterState> {
  render() {
    return (
      <>
        <h1>Hello World</h1>
        <button type="button">Increment</button>
      </>
    );
  }
}

export { Counter };
