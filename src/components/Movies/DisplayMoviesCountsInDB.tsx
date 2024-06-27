import { Typography } from "@mui/material";
import { IMoviesState } from ".";
import useMoviesState from "./hooks/useMoviesState";

interface Props {
  moviesState: IMoviesState;
}

const DisplayMoviesCountsInDB = ({ moviesState }: Props) => {
  const {
    isAnyGenreSelected,
    numberOfMoviesInDB,
    selectedGenre,
    numberOfMoviesOnSelectedGenre,
  } = useMoviesState(moviesState);

  return (
    <Typography sx={{ display: "inline" }}>
      {isAnyGenreSelected && (
        <Typography sx={{ display: "inline" }}>
          With {numberOfMoviesOnSelectedGenre} films categorized under the{" "}
          {selectedGenre.name} genre,
        </Typography>
      )}
    {" "} Our movie database boasts a total of {numberOfMoviesInDB} titles.
    </Typography>
  );
};

export default DisplayMoviesCountsInDB;
