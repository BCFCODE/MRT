import React, { Component } from "react";

export interface ICounterProps {}
export interface ICounterState {}

class Counter extends Component<ICounterProps, ICounterState> {
  state = {
    count: 0,
  };

  render() {
    return (
      <>
        <span className="badge text-badge-primary m-2">
          {this.formatCount()}
        </span>
        <button className="btn btn-secondary btn-sm" type="button">
          Increment
        </button>
      </>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export { Counter };
