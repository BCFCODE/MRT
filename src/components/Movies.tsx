import { Component } from "react";
import { deleteMovie, getMovies } from "../services/fakeMovieService";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Typography } from "@mui/material";
import { Movie } from "../types/Movies";
import { Like } from "./common/Like";

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
              <TableHead>
                <TableRow>
                  {["Title", "Genre", "Stock", "Rate", ""].map((header, i) => (
                    <TableCell
                      sx={{ fontWeight: "bold" }}
                      align={i ? "right" : "left"}
                    >
                      {header}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {movies.map((movie) => (
                  <TableRow
                    key={movie._id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {movie.title}
                    </TableCell>
                    <TableCell align="right">{movie.genre.name}</TableCell>
                    <TableCell align="right">{movie.numberInStock}</TableCell>
                    <TableCell align="right">{movie.dailyRentalRate}</TableCell>
                    <TableCell align="right">
                      <Like
                        toggleLike={() => this.handleToggleLike(movie)}
                        isLiked={movie.liked ?? false}
                      />
                    </TableCell>
                    <TableCell align="right">
                      <Button
                        onClick={() => this.handleDelete(movie._id)}
                        color="error"
                        variant="contained"
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : null}
      </>
    );
  }
}

export { Movies };
