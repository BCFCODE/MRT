import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import { ExpenseInputs } from "..";
import "./App.css";
import { ExpenseTable } from "./components/Expense Tracker/Table.tsx";
import GenreList from "./components/GenreList";
import { Movies } from "./components/Movies";

function App() {
  return (
    <Box>
      <Grid container spacing={3}>
        <Grid size={8}>
          <ExpenseTable />
        </Grid>
        <Grid size={4}>
          <ExpenseInputs />
        </Grid>
        <Grid size={4}>
          <GenreList />
        </Grid>
        <Grid size={8}>
          <Movies />
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
