import { PageQuery, Movie } from "../../../types/Movies";

interface Props {
  pageQuery: PageQuery;
  movies: Movie[];
}

const usePageQuery = ({ pageQuery, movies }: Props) => {
  const { current, pageSize } = pageQuery;
  const numberOfMoviesInDB = movies?.length;
  const pageCount = Math.ceil(numberOfMoviesInDB / pageSize);
  const endOfPage = current * pageSize;
  const startOfPage = endOfPage - pageSize;
  const moviesChunk = movies.slice(startOfPage, endOfPage);
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
  };
};

export default usePageQuery;
