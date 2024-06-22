import { Grid } from "@mui/material";
import "./App.css";
import { Movies } from "./components/Movies";
import GenreList from "./components/GenreList";

function App() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <GenreList />
      </Grid>
      <Grid item xs={8}>
        <Movies />
      </Grid>
      <Grid item xs={4}></Grid>
      <Grid item xs={8}></Grid>
    </Grid>
  );
}

export default App;
