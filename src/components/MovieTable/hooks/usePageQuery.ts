import { PageQuery, Movie, Genre } from "../../../types/Movies";

interface Props {
  pageQuery: PageQuery;
  movies: Movie[];
  selectedGenre: Genre | null;
}

const usePageQuery = ({ pageQuery, movies, selectedGenre }: Props) => {
  const { current, pageSize } = pageQuery;

  const filteredMovies = selectedGenre
    ? movies?.filter((movie) => movie.genre.name === selectedGenre?.name)
    : movies;

  const numberOfMoviesInDB = selectedGenre
    ? filteredMovies.length
    : movies?.length;

  const pageCount = Math.ceil(numberOfMoviesInDB / pageSize);
  const endOfPage = current * pageSize;
  const startOfPage = endOfPage - pageSize;
  const moviesChunk = filteredMovies.slice(startOfPage, endOfPage);
  const isCurrentPageEmpty = !moviesChunk.length;
  const numberOfItemsInCurrentPage = moviesChunk?.length;

  return {
    current,
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

export default usePageQuery;
