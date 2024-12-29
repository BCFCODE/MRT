import { TextField, MenuItem } from "@mui/material";
import React, { Component } from "react";

export interface ICategoriesProps {}
export interface ICategoriesState {}


const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

class Categories extends Component<ICategoriesProps, ICategoriesState> {
  state = {};

  render() {
    return (
      <TextField
        id="outlined-select-currency"
        select
        label="Category"
        defaultValue=""
        helperText="Please select your Category"
      >
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    );
  }
}

export { Categories };
