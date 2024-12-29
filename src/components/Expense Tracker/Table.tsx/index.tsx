import { Box } from "@mui/material";
import { Component } from "react";
import { MainTable } from "./Table";

import { items } from "../constants";
import { Item } from "../types";
import { Categories } from "./Categories";

export interface IExpenseTableProps {}
export interface IExpenseTableState {
  items: Item[];
  filteredItems: Item[];
}

class ExpenseTable extends Component<IExpenseTableProps, IExpenseTableState> {
  state = { items, filteredItems: items };

  handleSelect = (value: string) => {
    const { items } = this.state;
    const filteredItems = items.filter((item) => item.category === value);
    this.setState((state) => ({
      ...state,
      filteredItems: value === "all categories" ? items : filteredItems,
    }));
  };

  render() {
    const {
      state: { filteredItems },
      handleSelect,
    } = this;

    return (
      <Box
        sx={{
          boxShadow: "0 0 10px 8px  hsla(121, 78.60%, 49.40%, 30%)",
          display: "flex",
          flexDirection: "column",
          gap: 1,
          p: 2,
        }}
      >
        <Categories onSelect={(value) => handleSelect(value)} />
        <MainTable items={filteredItems} />
      </Box>
    );
  }
}

export { ExpenseTable };
