import { Box, Typography } from "@mui/joy";
import { Component } from "react";
import MoviesTable from "./Table";

export interface IMoviesProps {}
export interface IMoviesState {}

class Movies extends Component<IMoviesProps, IMoviesState> {
  state = {};

  render() {
    return (
      <Box>

        <MoviesTable />
      </Box>
    );
  }
}

export { Movies };
