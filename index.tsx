import { Box, Button } from "@mui/material";
import { Component } from "react";
import { Amount } from "./src/components/Expense Tracker/Inputs/Amount";
import { Categories } from "./src/components/Expense Tracker/Inputs/Categories";
import { Description } from "./src/components/Expense Tracker/Inputs/Description";

export interface IExpenseInputs {}
export interface IExpenseInputsState {}

class ExpenseInputs extends Component<IExpenseInputs, IExpenseInputsState> {
  state = {};

  render() {
    return (
      <Box
        component="section"
        sx={{
          p: 2,
          borderRadius: 5,
          boxShadow: "0 0 5px 2px  hsla(121, 78.60%, 49.40%, 0.30)",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          py: 3,
        }}
      >
        <Description />
        <Amount />
        <Categories />
        <Button type="submit" variant="contained">
          Save
        </Button>
      </Box>
    );
  }
}

export { ExpenseInputs };
