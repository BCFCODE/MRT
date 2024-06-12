import React, { Component } from "react";
import { Box, Button, Chip } from "@mui/material";
import { CSSProperties } from "@mui/material/styles/createMixins";

export interface ICounterProps {}
export interface ICounterState {
  count: number;
}

const chipStyles: CSSProperties = {
  margin: 10,
  fontWeight: "bold",
};
class Counter extends Component<ICounterProps, ICounterState> {
  state = {
    count: 10,
    tags: ["tag1", "tag2", "tag3"],
  };

  handleIncrement = (newValue: string) => {
    console.log(newValue);
    this.setState(({ count }) => ({
      count: count + 1,
    }));
  };

  render() {
    const { chipText, chipColor } = this.chipData();

    return (
      <Box>
        <Chip style={chipStyles} label={chipText} color={chipColor}></Chip>
        <Button
          onClick={() =>
            this.handleIncrement("New value passed as an argument")
          }
          variant="contained"
          color="success"
          type="button"
        >
          Increment
        </Button>
      </Box>
    );
  }

  private chipData() {
    const { count } = this.state;
    const chipText = this.formatCount();
    const chipColor = (count > 0 ? "primary" : "error") as "primary" | "error";
    return { chipText, chipColor };
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export { Counter };
