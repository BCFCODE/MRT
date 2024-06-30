import { Movie } from "../../../types/Movies";
import { SortData } from "../TableHead";

const sortMap = {
  title: {
    asc: (movies: Movie[]) =>
      movies.sort((a, b) => a.title.localeCompare(b.title)),
    desc: (movies: Movie[]) =>
      movies.sort((a, b) => b.title.localeCompare(a.title)),
  },
  genre: {
    asc: (movies: Movie[]) =>
      movies.sort((a, b) => a.genre.name.localeCompare(b.genre.name)),
    desc: (movies: Movie[]) =>
      movies.sort((a, b) => b.genre.name.localeCompare(a.genre.name)),
  },
  stock: {
    asc: (movies: Movie[]) =>
      movies.sort((a, b) => a.numberInStock - b.numberInStock),
    desc: (movies: Movie[]) =>
      movies.sort((a, b) => b.numberInStock - a.numberInStock),
  },
  rate: {
    asc: (movies: Movie[]) =>
      movies.sort((a, b) => a.dailyRentalRate - b.dailyRentalRate),
    desc: (movies: Movie[]) =>
      movies.sort((a, b) => b.dailyRentalRate - a.dailyRentalRate),
  },
} as const;

type Header = keyof typeof sortMap;

const useMovieSort = (movies: Movie[], sortData: SortData) => {
  const { currentSort: direction, selectedSortingHeader } = sortData;
  const header = selectedSortingHeader.toLowerCase() as Header;

  let sortedMovies = [] as Movie[];

  if (header) {
    sortedMovies = sortMap[header][direction]([...movies]);
  } else sortedMovies = [...movies];

  return { sortedMovies };
};

export default useMovieSort;
