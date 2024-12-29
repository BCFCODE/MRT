import { MenuItem, TextField } from "@mui/material";

export interface Props {
  onSelect: (value: string) => void;
}

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

const Categories = ({ onSelect }: Props) => {
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
};

export default Categories;
