import Pagination from "@mui/material/Pagination";

interface Props {
  pageCount: number
  pageNumber: number;
  onPageChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}

const TablePagination = ({ pageNumber, onPageChange, pageCount }: Props) => {
  return (
    <Pagination
      page={pageNumber}
      onChange={onPageChange}
      count={pageCount}
      color="secondary"
    />
  );
};

export default TablePagination;
