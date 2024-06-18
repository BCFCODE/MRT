import { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import { Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import { Movie } from "../types/Movies";
import MoviesPagination from "./Pagination";
import MoviesTableHead from "./MovieTable/TableHead";
import MoviesTableBody from "./MovieTable/TableBody";

export interface IMoviesProps {}
export interface IMoviesState {
  movies: Movie[];
}

class Movies extends Component<IMoviesProps, IMoviesState> {
  state = {
    movies: getMovies(),
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

  render() {
    const { movies } = this.state;
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
        <MoviesPagination />
      </>
    );
  }
}

export { Movies };
