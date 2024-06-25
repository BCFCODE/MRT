import Pagination from "@mui/material/Pagination";
import { Movie, PageQuery } from "../../types/Movies";
import usePageQuery from "../MovieTable/hooks/usePageQuery";

interface Props {
  movies: Movie[];
  pageQuery: PageQuery;
  onPageChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}

const TablePagination = ({ pageQuery, onPageChange, movies }: Props) => {
  const { current, pageCount } = usePageQuery({ pageQuery, movies });

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
