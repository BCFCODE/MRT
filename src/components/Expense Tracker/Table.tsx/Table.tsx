import { Button } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Component } from "react";
import { Item } from "../types";

export interface IMainTableProps {
  items: Item[];
}
export interface IMainTableState {}

class MainTable extends Component<IMainTableProps, IMainTableState> {
  state = {};

  render() {
    const { items } = this.props;
    const total = items.reduce((acc, b) => acc + b.amount, 0);
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Number in List</TableCell>
              <TableCell align="left">Amount&nbsp;($)</TableCell>
              <TableCell align="left">Description</TableCell>
              <TableCell align="left">Category</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((row, i) => (
              <TableRow
                key={`${i} - ${row.description}`}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {i + 1}
                </TableCell>
                <TableCell align="left">{row.amount.toFixed(2)}</TableCell>
                <TableCell align="left">{row.description}</TableCell>
                <TableCell align="left">
                  {row.category.replace(/\b\w/, (firstChar) =>
                    firstChar.toUpperCase()
                  )}
                </TableCell>
                <TableCell align="center">
                  <Button variant="contained" color="error">
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell align="right">Total:</TableCell>
              <TableCell align="left">{total.toFixed(2)}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

export { MainTable };

