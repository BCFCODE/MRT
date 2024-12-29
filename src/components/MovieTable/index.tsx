import Grid from "@mui/material/Grid2";
import GenreList from "./GenreList";
import { Movies } from "./Movies";

const MovieTable = () => {
  return (
    <>
      <Grid size={4}>
        <GenreList />
      </Grid>
      <Grid size={8}>
        <Movies />
      </Grid>
    </>
  );
};

export default MovieTable;
