import { Box } from "@mui/material";
import { Component } from "react";
import { MainTable } from "./Table";

import { items } from "../constants";
import { Item } from "../types";
import { Categories } from "./Categories";

export interface IExpenseTableProps {}
export interface IExpenseTableState {
  items: Item[];
  selectedCategory: string;
}

class ExpenseTable extends Component<IExpenseTableProps, IExpenseTableState> {
  state = { items, selectedCategory: "all categories" };

  handleSelect = (value: string) => {
    this.setState((state) => ({
      ...state,
      selectedCategory: value,
    }));
  };

  handleDelete = (indexOfItemPosition: number) => {
    const { items } = this.state;
    const filteredItems = items.filter((_, i) => indexOfItemPosition !== i);
    this.setState((state) => ({
      ...state,
      items: filteredItems,
    }));
  };

  render() {
    const {
      state: { selectedCategory, items },
      handleSelect,
      handleDelete,
    } = this;

    const filteredItems =
      selectedCategory === "all categories"
        ? items
        : items.filter((item) => item.category === selectedCategory);

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
        <MainTable onDelete={(i) => handleDelete(i)} items={filteredItems} />
      </Box>
    );
  }
}

export { ExpenseTable };
