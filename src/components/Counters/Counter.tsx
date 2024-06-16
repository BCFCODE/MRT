import React, { Component } from "react";
import { Box, Button, Chip } from "@mui/material";
import { CSSProperties } from "@mui/material/styles/createMixins";
import { CounterProps } from "../../types/Counters";
import ClearIcon from "@mui/icons-material/Clear";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export interface ICounterProps {
  counter: CounterProps;
  selected?: boolean;
  children?: React.ReactNode;
  onIncrement: (counter: CounterProps) => void;
  onDecrement: (counter: CounterProps) => void;
  onDelete: (counterId: number) => void;
}
export interface ICounterState {}

const chipStyles: CSSProperties = {
  margin: 10,
  fontWeight: "bold",
};
class Counter extends Component<ICounterProps, ICounterState> {
  render() {
    const { chipText, chipColor } = this.chipData();
    const { counter, onDelete, onDecrement, onIncrement } = this.props;

    return (
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          alignItems: "center",
          justifyItems: "center",
          marginLeft: -1,
        }}
      >
        <Box>
          <Chip style={chipStyles} label={chipText} color={chipColor}></Chip>
        </Box>
        <Box>
          <Button
            onClick={() => onIncrement(counter)}
            variant="contained"
            color="success"
            type="button"
          >
            <AddIcon />
          </Button>
        </Box>
        <Box>
          <Button
            sx={{ marginLeft: 1 }}
            onClick={() => onDecrement(counter)}
            variant="contained"
            color="warning"
            disabled={!counter.value}
          >
            <RemoveIcon />
          </Button>
        </Box>
        <Box>
          <Button
            sx={{ marginLeft: 1 }}
            onClick={() => onDelete(counter.id)}
            variant="contained"
            color="error"
          >
            <ClearIcon />
          </Button>
        </Box>
      </Box>
    );
  }

  private chipData() {
    const { value: count } = this.props.counter;
    const chipText = this.formatCount();
    const chipColor = (count > 0 ? "primary" : "warning") as
      | "primary"
      | "warning";
    return { chipText, chipColor };
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export { Counter };
