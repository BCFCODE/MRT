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
    <Typography>
      {`${
        isAnyGenreSelected
          ? `With ${numberOfMoviesOnSelectedGenre} films categorized under the ${selectedGenre.name} genre, `
          : ""
      } ${`${
        isAnyGenreSelected ? "o" : "O"
      }ur movie database boasts a total of ${numberOfMoviesInDB} titles.`}`}
    </Typography>
  );
};

export default DisplayMoviesCountsInDB;
