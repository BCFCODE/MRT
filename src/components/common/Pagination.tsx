import Pagination from "@mui/material/Pagination";
import usePageQuery from "../Movies/hooks/usePageQuery";
import { IMoviesState } from "../Movies";

interface Props {
  moviesStates: IMoviesState;
  onPageChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}

const TablePagination = ({ moviesStates, onPageChange }: Props) => {
  const { currentPage, pageCount } = usePageQuery(moviesStates);

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
