import React, { Component } from "react";
import { Box, Button, Chip } from "@mui/material";
import { CSSProperties } from "@mui/material/styles/createMixins";
import { CounterProps } from "../../types/Counters";

export interface ICounterProps {
  counter: CounterProps;
  selected?: boolean;
  children?: React.ReactNode;
  onDelete: (counterId: number) => void;
  onIncrement: (counter: CounterProps) => void;
}
export interface ICounterState {
  value: number;
}

const chipStyles: CSSProperties = {
  margin: 10,
  fontWeight: "bold",
};
class Counter extends Component<ICounterProps, ICounterState> {
  render() {
    const { chipText, chipColor } = this.chipData();

    return (
      <Box>
        <Chip style={chipStyles} label={chipText} color={chipColor}></Chip>
        <Button
          onClick={() => this.props.onIncrement(this.props.counter)}
          variant="contained"
          color="success"
          type="button"
        >
          Increment
        </Button>
        <Button
          sx={{ marginLeft: 1 }}
          onClick={() => this.props.onDelete(this.props.counter.id)}
          variant="contained"
          color="error"
        >
          Delete
        </Button>
      </Box>
    );
  }

  private chipData() {
    const { value: count } = this.props.counter;
    const chipText = this.formatCount();
    const chipColor = (count > 0 ? "primary" : "error") as "primary" | "error";
    return { chipText, chipColor };
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export { Counter as Counter };
