import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import "./App.css";

import GenreList from "./components/GenreList";
import { Movies } from "./components/Movies";
import { ExpenseInputs } from "..";
import { ExpenseTable } from "./components/Expense Tracker/Table.tsx";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
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
