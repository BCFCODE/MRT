import { MenuItem, TextField } from "@mui/material";

const categories = [
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

interface Props {
  onCategory: (description: string) => void;
}

const Categories = ({ onCategory }: Props) => {
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
        <MenuItem
          onClick={() => onCategory(option.value)}
          key={option.value}
          value={option.value}
        >
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default Categories;
