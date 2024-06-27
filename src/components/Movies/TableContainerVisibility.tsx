import { Box, Typography } from "@mui/material";
import React from "react";
import { IMoviesState } from ".";
import DisplayMoviesCountsInDB from "./DisplayMoviesCountsInDB";
import useMoviesState from "./hooks/useMoviesState";

interface Props {
  children: React.ReactNode;
  moviesState: IMoviesState;
}

const TableContainerVisibility = ({ moviesState, children }: Props) => {
  const {
    isAnyMovieInDB,
    numberOfMoviesOnSelectedGenre,
    numberOfMoviesInDB,
    selectedGenre,
  } = useMoviesState(moviesState);

  if (!isAnyMovieInDB)
    return <Typography>There are no movies in the database.</Typography>;
console.log(selectedGenre._id)
  if (!numberOfMoviesOnSelectedGenre)
    return (
      <Box textAlign="left">
        <Typography textAlign='left'>
          Currently, no films have been categorized under the{" "}
          {selectedGenre.name} genre.
        </Typography>
        <Typography>
          However, we offer {numberOfMoviesInDB} films in other genres that you
          can explore by selecting the genres on the left side of the page.
        </Typography>
      </Box>
    );

  return (
    <Box>
      <DisplayMoviesCountsInDB moviesState={moviesState} />
      {isAnyMovieInDB ? children : null}
    </Box>
  );
};

export default TableContainerVisibility;
