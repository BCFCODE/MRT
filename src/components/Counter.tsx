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
    tags: ["tag1", "tag2", "tag3"],
  };

  handleIncrement() {
    console.log(this)
  }

  render() {
    const { tags } = this.state;
    const { chipText, chipColor } = this.chipData();

    return (
      <>
        <Chip style={chipStyles} label={chipText} color={chipColor}></Chip>
        <Button onClick={this.handleIncrement} variant="contained" color="success" type="button">
          Increment
        </Button>
        <ul>
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </>
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
