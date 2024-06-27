import { Component } from "react";
import { getMovies } from "../../services/fakeMovieService";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import { Grid, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import { Genre, Movie } from "../../types/Movies";
import MoviesTableHead from "./TableHead";
import MoviesTableBody from "./TableBody";
import Stack from "@mui/material/Stack";
import TablePagination from "../common/Pagination";
import { ListGroup } from "../common/ListGroup";
import { getGenres } from "../../services/fakeGenreService";
import Container from "@mui/material/Container";
import TableContainerVisibility from "./TableContainerVisibility";

export interface IMoviesProps {}
export interface IMoviesState {
  currentPage: number;
  pageSize: number;
  orderBy: string;
  selectedGenre: Genre;
  genres: Genre[];
  movies: Movie[];
}

class Movies extends Component<IMoviesProps, IMoviesState> {
  state = {
    currentPage: 1,
    pageSize: 4,
    orderBy: "",
    movies: [] as Movie[],
    genres: [] as Genre[],
    selectedGenre: {} as Genre,
  };

  componentDidMount(): void {
    const initialState = { ...this.state };
    initialState.movies = getMovies();
    initialState.genres = getGenres();
    this.setState(initialState);
  }

  handleDelete = (movie: Movie) => {
    const { _id: currentMovie_id } = movie;
    this.setState(({ movies }) => ({
      movies: movies.filter((movie) => movie._id !== currentMovie_id),
    }));
  };

  handleToggleLike = (currentMovie: Movie) => {
    const isCurrentMovieLiked = Boolean(currentMovie.liked);
    console.log(currentMovie._id, "currentPage movie liked");
    this.setState(({ movies }) => ({
      movies: movies.map((movie) =>
        movie._id === currentMovie._id
          ? { ...movie, liked: !isCurrentMovieLiked }
          : movie
      ),
    }));
  };

  handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    const newState = { ...this.state };
    newState.currentPage = value;
    this.setState(() => newState);
  };

  handleSelectedGenre = (genre: Genre) => {
    this.setState(() => ({
      ...this.state,
      selectedGenre: genre,
    }));
    const newState = { ...this.state };
    newState.selectedGenre = genre;
    this.setState(() => newState);
  };

  render() {
    return (
      <Container
        maxWidth="lg"
        sx={{
          boxShadow: "0 0 10px black",
          borderRadius: 10,
          padding: "30px 0",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <ListGroup
              moviesState={this.state}
              onSelectGenre={(genre) => this.handleSelectedGenre(genre)}
            />
          </Grid>
          <Grid item xs={8}>
            <TableContainerVisibility moviesState={this.state}>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: "auto" }} aria-label="simple table">
                  <MoviesTableHead />
                  <MoviesTableBody
                    moviesState={this.state}
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
                <TablePagination
                  moviesState={this.state}
                  onPageChange={this.handlePageChange}
                />
              </Stack>
            </TableContainerVisibility>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export { Movies };
