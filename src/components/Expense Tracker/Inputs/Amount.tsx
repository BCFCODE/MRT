import { TextField } from "@mui/material";
import { Component } from "react";

export interface IAmountProps {}
export interface IAmountState {}

class Amount extends Component<IAmountProps, IAmountState> {
  state = {};

  render() {
    return (
      <TextField
        id="outlined-number"
        label="Amount"
        type="number"
        slotProps={{
          inputLabel: {
            shrink: true,
          },
        }}
      />
    );
  }
}

export { Amount };

