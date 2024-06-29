import { Movie } from "../../../types/Movies";
import { SortData } from "../TableHead";

const useMovieSort = (movies: Movie[], sortData: SortData) => {
  const { currentSort, selectedSortingHeader } = sortData;
  console.log(movies, currentSort, selectedSortingHeader);
  return {};
};

export default useMovieSort;
