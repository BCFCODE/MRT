import { IMoviesState } from "..";
import { SortData } from "../TableHead";
import useMovieSort from "./useMovieSort";

const useMoviesState = ({
  movies,
  currentPage,
  pageSize,
  selectedGenre,
  genres,
  isAllGenreSelected,
  currentSort,
  selectedSortingHeader,
}: IMoviesState) => {
  const sortData: SortData = {currentSort, selectedSortingHeader}
  const {} = useMovieSort(movies, sortData)
  const numberOfMoviesInDB = movies.length;
  const filteredMovies = isAllGenreSelected
    ? movies
    : movies?.filter((movie) => movie.genre.name === selectedGenre?.name);

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
  const isAnyGenreSelected = Boolean(selectedGenre._id);

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
    isAnyGenreSelected,
    isAllGenreSelected,
  };
};

export default useMoviesState;
