import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import { Movie } from "../../types/Movies";
import TableCells from "./TableCells";
import useMoviesState from "./hooks/useMoviesState";
import { IMoviesState } from ".";

interface Props {
  moviesState: IMoviesState;
  onLike: (currentMovie: Movie) => void;
  onDelete: (currentMovie: Movie) => void;
}

const MoviesTableBody = ({ onDelete, onLike, moviesState }: Props) => {
  const { moviesChunk, isCurrentPageEmpty, numberOfItemsInCurrentPage } =
    useMoviesState(moviesState);

  console.log(numberOfItemsInCurrentPage, "isPageEmpty?", isCurrentPageEmpty);

  return (
    <TableBody>
      {moviesChunk?.map((currentMovie) => (
        <TableRow
          key={currentMovie._id}
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        >
          <TableCells
            onLike={() => onLike(currentMovie)}
            onDelete={() => onDelete(currentMovie)}
            movie={currentMovie}
          />
        </TableRow>
      ))}
    </TableBody>
  );
};

export default MoviesTableBody;
