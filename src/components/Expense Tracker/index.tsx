import Grid from "@mui/material/Grid2";
import { ExpenseInputs } from "../../..";
import { ExpenseTable } from "./Table.tsx";

const ExpenseTrackerApp = () => {
  return (
    <>
      <Grid size={8}>
        <ExpenseTable />
      </Grid>
      <Grid size={4}>
        <ExpenseInputs />
      </Grid>
    </>
  );
};

export default ExpenseTrackerApp;
