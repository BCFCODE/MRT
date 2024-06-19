import { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import { Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import { Movie } from "../types/Movies";
import MoviesTableHead from "./MovieTable/TableHead";
import MoviesTableBody from "./MovieTable/TableBody";
import Stack from "@mui/material/Stack";
import TablePagination from "./common/Pagination";

export interface IMoviesProps {}
export interface IMoviesState {
  movies: Movie[];
  numberOfCurrentPage: number;
  numberOfItemsOnEachPage: number;
}

class Movies extends Component<IMoviesProps, IMoviesState> {
  state = {
    movies: getMovies(),
    numberOfCurrentPage: 1,
    numberOfItemsOnEachPage: 4,
    // pageQuery: {
    //   current: 1,
    //   pageSize: 4
    // }
  };

  handleDelete = (movie: Movie) => {
    const { _id: currentMovie_id } = movie;
    this.setState(({ movies }) => ({
      movies: movies.filter((movie) => movie._id !== currentMovie_id),
    }));
  };

  handleToggleLike = (currentMovie: Movie) => {
    const isCurrentMovieLiked = Boolean(currentMovie.liked);
    console.log(currentMovie._id);
    this.setState(({ movies }) => ({
      movies: movies.map((movie) =>
        movie._id === currentMovie._id
          ? { ...movie, liked: !isCurrentMovieLiked }
          : movie
      ),
    }));
  };

  handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    this.setState(() => ({ numberOfCurrentPage: value }));
    // console.log(event, value);
  };

  render() {
    const { movies, numberOfCurrentPage, numberOfItemsOnEachPage } = this.state;
    const numberOfMoviesInDB = movies.length;
    const pageCount = Math.ceil(numberOfMoviesInDB / numberOfItemsOnEachPage);
    console.log(pageCount);
    if (numberOfMoviesInDB < 1)
      return <Typography>There are no movies in the database.</Typography>;
    else
      return (
        <>
          <Typography>
            Showing {movies.length} movies in the database.
          </Typography>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: "auto" }} aria-label="simple table">
              <MoviesTableHead />
              <MoviesTableBody
                numberOfCurrentPage={numberOfCurrentPage}
                numberOfItemsOnEachPage={numberOfItemsOnEachPage}
                movies={movies}
                onDelete={(movie) => this.handleDelete(movie)}
                onLike={(movie) => this.handleToggleLike(movie)}
              />
            </Table>
          </TableContainer>
          <Stack
            marginTop={2}
            alignItems="center"
            justifyContent="center"
            spacing={2}
          >
            {pageCount > 1 && (
              <TablePagination
                pageCount={pageCount}
                pageNumber={numberOfCurrentPage}
                onPageChange={this.handlePageChange}
              />
            )}
          </Stack>
        </>
      );
  }
}

export { Movies };
