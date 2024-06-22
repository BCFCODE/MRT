import { TableSortLabel } from "@mui/material";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import React, { Component } from "react";

export interface IMoviesTableHeadProps {}
export interface IMoviesTableHeadState {
  selectedHeader: string;
}

class MoviesTableHead extends Component<
  IMoviesTableHeadProps,
  IMoviesTableHeadState
> {
  state = { selectedHeader: "" };

  handleHeaderClick = (header: string) => {
    this.setState(() => ({ selectedHeader: header }));
    
  };

  render() {
    const { selectedHeader } = this.state;

    return (
      <TableHead>
        <TableRow>
          {["Title", "Genre", "Stock", "Rate"].map((header, i) => (
            <TableCell
              key={i}
              align={i ? "right" : "left"}
              sx={{ fontWeight: "bold" }}
              // padding={headCell.disablePadding ? "none" : "normal"}
              // sortDirection={orderBy === headCell.id ? order : false}
            >
              <TableSortLabel
                direction={/* orderBy === headCell.id ? order : */ "asc"}
                active={selectedHeader === header}
                // onClick={createSortHandler(headCell.id)}
                onClick={() => this.handleHeaderClick(header)}
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

export default MoviesTableHead ;
