import Pagination from "@mui/material/Pagination";
import usePageQuery from "../Movies/hooks/usePageQuery";
import { IMoviesState } from "../Movies";

interface Props {
  moviesState: IMoviesState;
  onPageChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}

const TablePagination = ({ moviesState, onPageChange }: Props) => {
  const { currentPage, pageCount } = usePageQuery(moviesState);

  return (
    <Pagination
      page={currentPage}
      count={pageCount}
      onChange={onPageChange}
      color="secondary"
    />
  );
};

export default TablePagination;
