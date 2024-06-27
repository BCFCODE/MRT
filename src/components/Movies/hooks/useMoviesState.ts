import { IMoviesState } from "..";

const useMoviesState = ({
  movies,
  currentPage,
  pageSize,
  selectedGenre,
  genres,
}: IMoviesState) => {
  const numberOfMoviesInDB = movies.length;
  const filteredMovies = selectedGenre._id
    ? movies?.filter((movie) => movie.genre.name === selectedGenre?.name)
    : movies;

  const numberOfMoviesOnSelectedGenre = selectedGenre._id
    ? filteredMovies.length
    : movies?.length;

  const pageCount = Math.ceil(numberOfMoviesOnSelectedGenre / pageSize);
  const endOfPage = currentPage * pageSize;
  const startOfPage = endOfPage - pageSize;
  const moviesChunk = filteredMovies.slice(startOfPage, endOfPage);
  const isCurrentPageEmpty = !moviesChunk.length;
  const numberOfItemsInCurrentPage = moviesChunk?.length;
  const isAnyMovieInDB = Boolean(numberOfMoviesInDB);
  const isAnyGenreSelected = Boolean(selectedGenre._id)

  return {
    genres,
    currentPage,
    pageSize,
    endOfPage,
    startOfPage,
    pageCount,
    moviesChunk,
    isCurrentPageEmpty,
    numberOfMoviesInDB,
    numberOfItemsInCurrentPage,
    numberOfMoviesOnSelectedGenre,
    selectedGenre,
    isAnyMovieInDB,
    isAnyGenreSelected
  };
};

export default useMoviesState;
