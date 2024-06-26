import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import { Movie } from "../../types/Movies";
import TableCells from "./TableCells";
import usePageQuery from "./hooks/usePageQuery";
import { IMoviesState } from ".";

interface Props {
  moviesStates: IMoviesState;
  onLike: (currentMovie: Movie) => void;
  onDelete: (currentMovie: Movie) => void;
}

const MoviesTableBody = ({ onDelete, onLike, moviesStates }: Props) => {
  const { moviesChunk, isCurrentPageEmpty, numberOfItemsInCurrentPage } =
    usePageQuery(moviesStates);

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
