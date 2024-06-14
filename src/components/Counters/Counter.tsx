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
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          alignItems: "center",
          justifyItems: 'center',
          marginLeft: -1
        }}
      >
        <Box>
          <Chip style={chipStyles} label={chipText} color={chipColor}></Chip>
        </Box>
        <Box>
          <Button
            onClick={() => this.props.onIncrement(this.props.counter)}
            variant="contained"
            color="success"
            type="button"
          >
            Increment
          </Button>
        </Box>
        <Box>
          <Button
            sx={{ marginLeft: 1 }}
            onClick={() => this.props.onDelete(this.props.counter.id)}
            variant="contained"
            color="error"
          >
            Delete
          </Button>
        </Box>
      </Box>
    );
  }

  private chipData() {
    const { value: count } = this.props.counter;
    const chipText = this.formatCount();
    const chipColor = (count > 0 ? "primary" : "warning") as "primary" | "warning";
    return { chipText, chipColor };
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export { Counter  };
