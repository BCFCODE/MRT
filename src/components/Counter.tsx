import React, { Component } from "react";
import { Box, Button, Chip } from "@mui/material";
import { CSSProperties } from "@mui/material/styles/createMixins";

export interface ICounterProps {
  value: number;
  selected?: boolean;
}
export interface ICounterState {
  value: number;
}

const chipStyles: CSSProperties = {
  margin: 10,
  fontWeight: "bold",
};
class Counter extends Component<ICounterProps, ICounterState> {
  state = {
    value: this.props.value,
    tags: ["tag1", "tag2", "tag3"],
  };

  handleIncrement = () => {
    this.setState(({ value }) => ({
      value: value + 1,
    }));
  };

  render() {
    const { chipText, chipColor } = this.chipData();

    return (
      <Box>
        <Chip style={chipStyles} label={chipText} color={chipColor}></Chip>
        <Button
          onClick={this.handleIncrement}
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
    const { value: count } = this.state;
    const chipText = this.formatCount();
    const chipColor = (count > 0 ? "primary" : "error") as "primary" | "error";
    return { chipText, chipColor };
  }

  formatCount() {
    const { value: count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export { Counter };
