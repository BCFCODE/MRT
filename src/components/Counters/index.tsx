import { Component } from "react";
import { Counter } from "./Counter";
import { CounterProps, CountersProps } from "../../types/Counters";
import { Box } from "@mui/material";

export interface ICountersProps {
  counters: CountersProps;
  onIncrement: (counter: CounterProps) => void;
  onDelete: (counter: CounterProps) => void;
}
export interface ICountersState {}

class Counters extends Component<ICountersProps, ICountersState> {
  render() {
    return (
      <Box>
        {this.props.counters.map((counter) => (
          <Counter
            onIncrement={() => this.props.onIncrement(counter)}
            onDelete={() => this.props.onDelete(counter)}
            key={counter.id}
            counter={counter}
          />
        ))}
      </Box>
    );
  }
}

export { Counters };
