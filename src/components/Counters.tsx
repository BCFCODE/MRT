import React, { Component } from "react";
import { Counter } from "./Counter";

export interface ICountersProps {}
export interface ICountersState {
  counters: { id: number; value: number }[];
}

class Counters extends Component<ICountersProps, ICountersState> {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  render() {
    const { counters } = this.state;
    return (
      <>
        {counters.map((counter) => (
          <Counter key={counter.id} value={counter.value} />
        ))}
      </>
    );
  }
}

export { Counters };
