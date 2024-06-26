import Pagination from "@mui/material/Pagination";
import useMoviesState from "../Movies/hooks/useMoviesState";
import { IMoviesState } from "../Movies";

interface Props {
  moviesState: IMoviesState;
  onPageChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}

const TablePagination = ({ moviesState, onPageChange }: Props) => {
  const { currentPage, pageCount } = useMoviesState(moviesState);

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
