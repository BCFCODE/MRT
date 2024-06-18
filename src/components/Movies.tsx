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
import MoviesPagination from "./MovieTable/Pagination";

export interface IMoviesProps {}
export interface IMoviesState {
  movies: Movie[];
  page: number;
}

class Movies extends Component<IMoviesProps, IMoviesState> {
  state = {
    movies: getMovies(),
    page: 1,
  };

  handleDelete = (id: string) => {
    this.setState(({ movies }) => ({
      movies: movies.filter((movie) => movie._id !== id),
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
    this.setState(() => ({ page: value }));
    console.log(event, value);
  };

  render() {
    const { movies, page } = this.state;
    const isAnyMovieInDB = movies.length;

    return (
      <>
        {isAnyMovieInDB ? (
          <Typography>
            Showing {movies.length} movies in the database.
          </Typography>
        ) : (
          <Typography>There are no movies in the database.</Typography>
        )}

        {isAnyMovieInDB ? (
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: "auto" }} aria-label="simple table">
              <MoviesTableHead />
              <MoviesTableBody
                movies={movies}
                onDelete={(id) => this.handleDelete(id)}
                onLike={(movie) => this.handleToggleLike(movie)}
              />
            </Table>
          </TableContainer>
        ) : null}
        <Stack spacing={2}>
          <Typography>Page: {page}</Typography>
          <MoviesPagination
            pageNumber={page}
            onPageChange={this.handlePageChange}
            pageCount={10}
          />
        </Stack>
      </>
    );
  }
}

export { Movies };
