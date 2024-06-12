import React, { Component } from "react";
import { Button, Chip } from "@mui/material";
import { CSSProperties } from "@mui/material/styles/createMixins";

export interface ICounterProps {}
export interface ICounterState {}

const chipStyles: CSSProperties = {
  margin: 10,
  fontWeight: "bold",
};
class Counter extends Component<ICounterProps, ICounterState> {
  state = {
    count: 10,
  };

  render() {
    const { chipText, chipColor } = this.chipData();

    return (
      <>
        <Chip style={chipStyles} label={chipText} color={chipColor}></Chip>
        <Button variant="contained" color="success" type="button">
          Increment
        </Button>
      </>
    );
  }

  private chipData() {
    const chipText = this.formatCount();
    const chipColor = (this.state.count > 0 ? "primary" : "error") as
      | "primary"
      | "error";
    return { chipText, chipColor };
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export { Counter };
