import { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import { Grid, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import { Genre, Movie, PageQuery } from "../types/Movies";
import MoviesTableHead from "./MovieTable/TableHead";
import MoviesTableBody from "./MovieTable/TableBody";
import Stack from "@mui/material/Stack";
import TablePagination from "./common/Pagination";
import { ListGroup } from "./common/ListGroup";
import { getGenres } from "../services/fakeGenreService";

export interface IMoviesProps {}
export interface IMoviesState {
  movies: Movie[];
  numberOfCurrentPage: number;
  numberOfItemsOnEachPage: number;
  pageQuery: PageQuery;
}

class Movies extends Component<IMoviesProps, IMoviesState> {
  state = {
    movies: [] as Movie[],
    numberOfCurrentPage: 1,
    numberOfItemsOnEachPage: 4,
    pageQuery: {
      current: 1,
      pageSize: 4,
      orderBy: "",
      genres: [] as Genre[],
      selectedGenre: {} as Genre,
    },
  };

  componentDidMount(): void {
    const initialState = {...this.state}
    initialState.movies = getMovies()
    initialState.pageQuery.genres = getGenres()
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
    console.log(currentMovie._id, "current movie liked");
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
    newState.pageQuery.current = value;
    this.setState(() => newState);
  };

  handleSelectedGenre = (genre: Genre) => {
    this.setState(() => ({
      ...this.state,
      selectedGenre: genre,
    }));
    const newState = { ...this.state };
    newState.pageQuery.selectedGenre = genre;
    this.setState(() => newState);
  };

  render() {
    const { movies, pageQuery } = this.state;
    const isNotAnyMovieInDB = !movies.length;

    if (isNotAnyMovieInDB)
      return <Typography>There are no movies in the database.</Typography>;
    else
      return (
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <ListGroup
              pageQuery={pageQuery}
              onSelectGenre={(genre) => this.handleSelectedGenre(genre)}
            />
          </Grid>
          <Grid item xs={8}>
            <Typography>
              Showing {movies.length} movies in the database.
            </Typography>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: "auto" }} aria-label="simple table">
                <MoviesTableHead />
                <MoviesTableBody
                  movies={movies}
                  pageQuery={pageQuery}
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
                movies={movies}
                pageQuery={pageQuery}
                onPageChange={this.handlePageChange}
              />
            </Stack>
          </Grid>
        </Grid>
      );
  }
}

export { Movies };
