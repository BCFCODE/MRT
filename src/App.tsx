import { Grid } from "@mui/material";
import "./App.css";
import { Movies } from "./components/Movies";
import { ListGroup } from "./components/common/ListGroup";
import EnhancedTable from "./components/MovieTable";

function App() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <ListGroup />
      </Grid>
      <Grid item xs={8}>
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
