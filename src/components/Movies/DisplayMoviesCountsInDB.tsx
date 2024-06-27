import { Typography } from "@mui/material";
import { IMoviesState } from ".";
import useMoviesState from "./hooks/useMoviesState";

interface Props {
  moviesState: IMoviesState;
}

const DisplayMoviesCountsInDB = ({ moviesState }: Props) => {
  const { numberOfMoviesInDB, displayMoviesCountInDBheaderText } =
    useMoviesState(moviesState);

  if (!numberOfMoviesInDB)
    return <Typography>There are no movies in the database.</Typography>;
  else return <Typography>{displayMoviesCountInDBheaderText}</Typography>;
};

export default DisplayMoviesCountsInDB;
