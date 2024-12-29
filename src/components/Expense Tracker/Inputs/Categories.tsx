import { MenuItem, TextField } from "@mui/material";
import { Component } from "react";

export interface ICategoriesProps {}
export interface ICategoriesState {}

const categories = [
  {
    value: "Groceries",
    label: "Groceries",
  },
  {
    value: "Utilities",
    label: "Utilities",
  },
  {
    value: "Entertainment",
    label: "Entertainment",
  },
];

class Categories extends Component<ICategoriesProps, ICategoriesState> {
  state = {};

  render() {
    return (
      <TextField
        sx={{
          textAlign: "left",
        }}
        id="category"
        select
        label="Category"
        defaultValue=""
        helperText="Please select your Category"
      >
        {categories.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    );
  }
}

export { Categories };