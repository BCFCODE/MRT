import React, { Component } from "react";
import { Button, Chip } from "@mui/material";
import { CSSProperties } from "@mui/material/styles/createMixins";

export interface ICounterProps {}
export interface ICounterState {}

const chipStyles: CSSProperties = {
  margin: 10,
};
class Counter extends Component<ICounterProps, ICounterState> {
  state = {
    count: 0,
  };

  render() {
    return (
      <>
        <Chip
          style={chipStyles}
          label={this.formatCount()}
          color="error"
        ></Chip>
        <Button
          variant="contained"
          color="success"
          type="button"
        >
          Increment
        </Button>
      </>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export { Counter };
