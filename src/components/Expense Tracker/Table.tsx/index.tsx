import { Box } from "@mui/material";
import React, { Component } from "react";
import { MainTable } from "./Table";
import { Categories } from "./Categories";

export interface IExpenseTableProps {}
export interface IExpenseTableState {}

class ExpenseTable extends Component<IExpenseTableProps, IExpenseTableState> {
  state = {};

  render() {
    return (
      <Box
        sx={{
          boxShadow: "0 0 10px 8px  hsla(121, 78.60%, 49.40%, 30%)",
          display: 'flex', 
          flexDirection: 'column',
          gap: 1,
          p: 2
        }}
      >
        <Categories />
        <MainTable />
      </Box>
    );
  }
}

export { ExpenseTable };
