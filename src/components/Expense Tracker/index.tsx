import Grid from "@mui/material/Grid2";
import { useState } from "react";
import ExpenseInputs from "./Inputs/index.tsx";
import ExpenseTable from "./Table.tsx";
import { Item } from "./types.ts";

const initialItems: Item[] = [
  { description: "Milk", amount: 5, category: "groceries" },
  { description: "Eggs", amount: 10, category: "groceries" },
  { description: "Electricity", amount: 100, category: "utilities" },
  { description: "Movies", amount: 15, category: "entertainment" },
];

const ExpenseTrackerApp = () => {
  const [items, setItems] = useState<Item[]>(initialItems);

  const handleDelete = (indexOfItemPosition: number) => {
    const filteredItems = items.filter((_, i) => indexOfItemPosition !== i);
    setItems(filteredItems);
  };

  const handleSubmit = (inputObject: Item) => setItems([...items, inputObject]);
  
  return (
    <>
      <Grid size={8}>
        <ExpenseTable onDelete={(i) => handleDelete(i)} items={items} />
      </Grid>
      <Grid size={4}>
        <ExpenseInputs onSubmit={(inputObject) => handleSubmit(inputObject)} />
      </Grid>
    </>
  );
};

export default ExpenseTrackerApp;
