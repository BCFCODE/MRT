import { Component } from "react";
import { Counter } from "./Counter";
import { CounterProps, CountersProps } from "../../types/Counters";
import { Box } from "@mui/material";

export interface ICountersProps {
  counters: CountersProps;
  onIncrement: (counter: CounterProps) => void;
  onDelete: (counter: CounterProps) => void;
  onDecrement: (counter: CounterProps) => void;
}
export interface ICountersState {}

class Counters extends Component<ICountersProps, ICountersState> {
  render() {
    const { counters, onIncrement, onDecrement, onDelete } = this.props;
    return (
      <Box>
        {counters.map((counter) => (
          <Counter
            onIncrement={() => onIncrement(counter)}
            onDecrement={() => onDecrement(counter)}
            onDelete={() => onDelete(counter)}
            key={counter.id}
            counter={counter}
          />
        ))}
      </Box>
    );
  }
}

export { Counters };
