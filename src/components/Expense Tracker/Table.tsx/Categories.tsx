import { MenuItem, TextField } from "@mui/material";
import { Component } from "react";

export interface ICategoriesProps {
  onSelect: (value: string) => void;
}
export interface ICategoriesState {}

const categories = [
  {
    value: "all categories",
    label: "All categories",
  },
  {
    value: "groceries",
    label: "Groceries",
  },
  {
    value: "utilities",
    label: "Utilities",
  },
  {
    value: "entertainment",
    label: "Entertainment",
  },
];

class Categories extends Component<ICategoriesProps, ICategoriesState> {
  state = {};
  render() {
    const { onSelect } = this.props;
    return (
      <TextField
        sx={{
          textAlign: "left",
        }}
        id="main-table-category"
        select
        label="Category"
        defaultValue="All categories"
        helperText="Please select category to show on table"
      >
        {categories.map((category) => (
          <MenuItem
            onClick={() => onSelect(category.value)}
            key={category.value}
            value={category.value}
          >
            {category.label}
          </MenuItem>
        ))}
      </TextField>
    );
  }
}

export { Categories };
