import { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const headers = ["Title", "Genre", "Stock", "Rate", ""];

const movies = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export interface IMoviesProps {}
export interface IMoviesState {}

class Movies extends Component<IMoviesProps, IMoviesState> {
  state = {
    movies: getMovies(),
  };

  render() {
    const { movies } = this.state;

    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: "auto" }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {headers.map((header, i) => (
                <TableCell align={i ? "right" : "left"}>{header}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {movies.map((row) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.title}
                </TableCell>
                <TableCell align="right">{row.genre.name}</TableCell>
                <TableCell align="right">{row.numberInStock}</TableCell>
                <TableCell align="right">{row.dailyRentalRate}</TableCell>
                <TableCell align="right">
                  <Button color="error" variant="contained">
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

export { Movies };
