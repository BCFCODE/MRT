import { Box } from "@mui/material";
import { Item } from "../types";
import Categories from "./Categories";
import MainTable from "./Table";
import { useState } from "react";

interface Props {
  items: Item[];
  onDelete: (index: number) => void;
}

const ExpenseTable = ({ items, onDelete }: Props) => {
  const [selectedCategory, setSelectedCategory] =
    useState<string>("all categories");

  const handleSelect = (value: string) => {
    setSelectedCategory(value);
  };

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
      <MainTable
        onDelete={(i) => onDelete(i)}
        filteredItems={filteredItems}
      />
    </Box>
  );
};

export default ExpenseTable;
