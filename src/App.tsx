import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import "./App.css";
import ExpenseTrackerApp from "./components/Expense Tracker/index.tsx";
import MovieTable from "./components/MovieTable/index.tsx";

function App() {
  return (
    <Box>
      <Grid container spacing={3}>
        <ExpenseTrackerApp />
        <MovieTable />
      </Grid>
    </Box>
  );
}

export default App;
