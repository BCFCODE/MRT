import { TextField } from "@mui/material";
import React, { Component } from "react";

export interface IDescriptionProps {}
export interface IDescriptionState {}

class Description extends Component<IDescriptionProps, IDescriptionState> {
  state = {};

  render() {
    return (
      <TextField
        required
        id="outlined-required"
        label="Description"
        defaultValue="Hello World"
      />
    );
  }
}

export { Description };
