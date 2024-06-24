import Pagination from "@mui/material/Pagination";
import { Genre, Movie, PageQuery } from "../../types/Movies";
import usePageQuery from "../MovieTable/hooks/usePageQuery";

interface Props {
  movies: Movie[];
  pageQuery: PageQuery;
  onPageChange: (event: React.ChangeEvent<unknown>, value: number) => void;
  selectedGenre: Genre | null;
}

const TablePagination = ({ pageQuery, onPageChange, movies , selectedGenre}: Props) => {
  const { current, pageCount } = usePageQuery({ pageQuery, movies, selectedGenre });

  return (
    <Pagination
      page={current}
      count={pageCount}
      onChange={onPageChange}
      color="secondary"
    />
  );
};

export default TablePagination;
