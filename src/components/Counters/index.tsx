import React, { Component } from "react";
import { Counter } from "./Counter";
import { Button } from "@mui/material";
import { CounterProps } from "../../types/Counters";

export interface ICountersProps {}
export interface ICountersState {
  counters: CounterProps[];
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

  handleIncrement = (counter: CounterProps) => {
    const { id: counterId, value: counterValue } = counter;
    this.setState(({ counters }) => ({
      counters: counters.map(({ id, value }) =>
        id === counterId ? { id, value: counterValue + 1 } : { id, value }
      ),
    }));
  };

  handleReset = () => {
    this.setState(({ counters }) => ({
      counters: counters.map(({ value }) => ({ id: 0, value })),
    }));
  };

  handleDelete = (counterId: number) => {
    this.setState(({ counters }) => ({
      counters: counters.filter((counter) => counter.id !== counterId),
    }));
  };

  render() {
    const { counters } = this.state;
    return (
      <>
        <Button color="primary" variant="outlined">
          Reset
        </Button>
        {counters.map((counter) => (
          <Counter
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            key={counter.id}
            counter={counter}
          />
        ))}
      </>
    );
  }
}

export { Counters };
