import { Typography } from "@mui/material";
import { IMoviesState } from ".";
import useMoviesState from "./hooks/useMoviesState";

interface Props {
  moviesState: IMoviesState;
}

const DisplayMoviesCountsInDB = ({ moviesState }: Props) => {
  const { numberOfMoviesInDB, numberOfMoviesOnSelectedGenre, selectedGenre } =
    useMoviesState(moviesState);
  if (!numberOfMoviesInDB)
    return <Typography>There are no movies in the database.</Typography>;
  else
    return (
      <Typography>{`The movie database contains ${numberOfMoviesInDB} titles${
        selectedGenre._id
          ? `, with
          ${numberOfMoviesOnSelectedGenre} films categorized under the ${selectedGenre.name}
          genre.`
          : "."
      }`}</Typography>
    );
};

export default DisplayMoviesCountsInDB;
