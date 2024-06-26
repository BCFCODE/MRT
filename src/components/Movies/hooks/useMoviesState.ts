import { IMoviesState } from "..";

const useMoviesState = ({
  movies,
  currentPage,
  pageSize,
  selectedGenre,
}: IMoviesState) => {

  const filteredMovies = selectedGenre._id
    ? movies?.filter((movie) => movie.genre.name === selectedGenre?.name)
    : movies;

  const numberOfMoviesInDB = selectedGenre._id
    ? filteredMovies.length
    : movies?.length;

  const pageCount = Math.ceil(numberOfMoviesInDB / pageSize);
  const endOfPage = currentPage * pageSize;
  const startOfPage = endOfPage - pageSize;
  const moviesChunk = filteredMovies.slice(startOfPage, endOfPage);
  const isCurrentPageEmpty = !moviesChunk.length;
  const numberOfItemsInCurrentPage = moviesChunk?.length;

  return {
    currentPage,
    pageSize,
    numberOfMoviesInDB,
    endOfPage,
    startOfPage,
    pageCount,
    moviesChunk,
    isCurrentPageEmpty,
    numberOfItemsInCurrentPage,
    // filteredMovies,
  };
};

export default useMoviesState;
