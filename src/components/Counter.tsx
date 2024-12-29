import React, { Component } from 'react';

export interface ICounterProps {
  
}
export interface ICounterState {
  
}

class Counter extends Component<ICounterProps, ICounterState> {
  state = {};
  
  render() {
    return (
      <h1>Hello World</h1>
    );
  }
}

export { Counter };