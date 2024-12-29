import { Button, FormControl } from "@mui/material";
import { useState } from "react";
import Amount from "./Amount";
import Categories from "./Categories";
import Description from "./Description";
import { Item } from "../types";

interface Props {
  onSubmit: (inputObject: Item) => void;
}

const ExpenseInputs = ({ onSubmit }: Props) => {
  const [inputObject, setInputObject] = useState({} as Item);

  const handleDescription = (description: string) => {
    setInputObject((inputObject) => ({
      ...inputObject,
      description,
    }));
  };

  const handleAmount = (amount: number) => {
    setInputObject((inputObject) => ({
      ...inputObject,
      amount,
    }));
  };

  const handleCategory = (category: string) => {
    setInputObject((inputObject) => ({
      ...inputObject,
      category,
    }));
  };

  return (
    <FormControl
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(inputObject);
      }}
      component="form"
      sx={{
        p: 2,
        borderRadius: 5,
        boxShadow: "0 0 5px 2px  hsla(121, 78.60%, 49.40%, 0.30)",
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        py: 3,
      }}
    >
      <Description
        onDescription={(inputDescription) =>
          handleDescription(inputDescription)
        }
      />
      <Amount onAmount={(amount) => handleAmount(amount)} />
      <Categories onCategory={(category) => handleCategory(category)} />
      <Button type="submit" variant="contained">
        Save
      </Button>
    </FormControl>
  );
};

export default ExpenseInputs;
