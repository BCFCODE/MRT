import { Component } from "react";
import { getMovies } from "../../services/fakeMovieService";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import { Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import { Genre, Movie } from "../../types/Movies";
import MoviesTableHead, {
  TableHeaderGenre,
  SortDirection,
  SortData,
} from "./TableHead";
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
  genres: Genre[];
  movies: Movie[];
  selectedGenre: Genre;
  isAllGenreSelected: boolean;
  selectedSortingHeader: TableHeaderGenre;
  currentSort: SortDirection;
}

class Movies extends Component<IMoviesProps, IMoviesState> {
  state: IMoviesState = {
    currentPage: 1,
    pageSize: 4,
    genres: [] as Genre[],
    movies: [] as Movie[],
    selectedGenre: {} as Genre,
    isAllGenreSelected: true,
    selectedSortingHeader: "",
    currentSort: "asc",
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
    console.log(
      "this.handleSelectedGenre > genre.name === All Genres",
      genre.name === "All Genres"
    );
    this.setState(() => ({
      ...this.state,
      selectedGenre: genre,
      isAllGenreSelected: genre.name === "All Genres",
    }));
  };

  handleTableSort = (newSortData: SortData) => {
    this.setState(() => ({
      selectedSortingHeader: newSortData.selectedSortingHeader,
      currentSort: newSortData.currentSort === "asc" ? "desc" : "asc",
    }));
    console.log(this.state.selectedSortingHeader, this.state.currentSort);
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
                  <MoviesTableHead
                    onSort={(newSortData) => this.handleTableSort(newSortData)}
                  />
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
