import { TableSortLabel } from "@mui/material";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Component } from "react";

export type TableHeaderGenre = "Title" | "Genre" | "Stock" | "Rate" | "";
export type SortDirection = "asc" | "desc";

const headers: TableHeaderGenre[] = ["Title", "Genre", "Stock", "Rate"];
export interface IMoviesTableHeadState {
  selectedSortingHeader: TableHeaderGenre;
  currentSort: SortDirection;
}

export type SortData = IMoviesTableHeadState;

export interface IMoviesTableHeadProps {
  onSort: (newSortData: SortData) => void;
}
class MoviesTableHead extends Component<
  IMoviesTableHeadProps,
  IMoviesTableHeadState
> {
  state: SortData = {
    selectedSortingHeader: "",
    currentSort: "asc",
  };

  handleHeaderClick = (newSortData: SortData) => {
    this.setState(() => ({
      selectedSortingHeader: newSortData.selectedSortingHeader,
      currentSort: newSortData.currentSort === "asc" ? "desc" : "asc",
    }));
  };

  render() {
    const { selectedSortingHeader, currentSort } = this.state;
    const { onSort } = this.props;

    return (
      <TableHead>
        <TableRow>
          {headers.map((header, i) => (
            <TableCell
              key={i}
              align={i ? "right" : "left"}
              sx={{ fontWeight: "bold" }}
              // padding={headCell.disablePadding ? "none" : "normal"}
              // sortDirection={orderBy === headCell.id ? order : false}
            >
              <TableSortLabel
                direction={
                  selectedSortingHeader === header ? currentSort : "asc"
                }
                active={selectedSortingHeader === header}
                onClick={() => {
                  const newSortData = {
                    selectedSortingHeader: header,
                    currentSort,
                  };
                  this.handleHeaderClick(newSortData);
                  onSort(newSortData);
                }}
              >
                {header}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  }
}

export default MoviesTableHead;
