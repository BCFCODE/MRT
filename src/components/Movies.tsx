import { Component, ErrorInfo } from "react";
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

export interface IMoviesProps {}
export interface IMoviesState {
  movies: Movie[];
  numberOfCurrentPage: number;
  numberOfItemsOnEachPage: number;
  pageQuery: PageQuery;
  selectedGenre: Genre | null;
}

class Movies extends Component<IMoviesProps, IMoviesState> {
  state = {
    movies: getMovies(),
    numberOfCurrentPage: 1,
    numberOfItemsOnEachPage: 4,
    pageQuery: {
      current: 1,
      pageSize: 4,
    },
    selectedGenre: null,
  };

  componentDidMount(): void {
    console.log(this.state, "didMount");
  }

  componentDidUpdate(
    prevProps: Readonly<IMoviesProps>,
    prevState: Readonly<IMoviesState>,
    snapshot?: any
  ): void {
    console.log(prevProps, prevState.movies, "didUpdate");
    // this.setState({...this.state, movies: prevState.movies})
  }

  shouldComponentUpdate(
    nextProps: Readonly<IMoviesProps>,
    nextState: Readonly<IMoviesState>,
    nextContext: any
  ): boolean {
    console.log(nextProps, nextState.movies, "shouldComponentUpdate");
    // this.setState(() => nextState)
    return nextProps || nextState ? true : false;
  }

  componentWillUnmount(): void {
    console.log("componentWillUnmount");
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
      ...this.setState,
      selectedGenre: genre,
    }));
  };

  render() {
    const { movies, pageQuery, selectedGenre } = this.state;
    const isNotAnyMovieInDB = !movies.length;

    if (isNotAnyMovieInDB)
      return <Typography>There are no movies in the database.</Typography>;
    else
      return (
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <ListGroup
              selectedGenre={selectedGenre}
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
                  selectedGenre={selectedGenre}
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
                selectedGenre={selectedGenre}
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
