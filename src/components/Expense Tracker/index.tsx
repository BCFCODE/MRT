import { Box } from "@mui/material";
import React, { Component } from "react";

export interface IExpenseTracker {}
export interface IExpenseTrackerState {}

class ExpenseTracker extends Component<IExpenseTracker, IExpenseTrackerState> {
  state = {};

  render() {
    return (
      <Box component="section" sx={{ p: 2, border: "1px dashed grey" }}>
        This Box renders as an HTML section element.
      </Box>
    );
  }
}

export { ExpenseTracker };
