import { Grid } from "@mui/material";
import "./App.css";
import { Movies } from "./components/Movies";
import EnhancedTable from "./components/Movies/ExtraTable";

function App() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Movies />
      </Grid>
      <Grid item xs={4}></Grid>
      <Grid item xs={8}>
        <EnhancedTable />
      </Grid>
    </Grid>
  );
}

export default App;
