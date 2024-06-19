import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

import { Movie } from "../../types/Movies";
import TableCells from "./TableCells";

interface Props {
  movies: Movie[];
  numberOfItemsOnEachPage: number;
  numberOfCurrentPage: number;
  onLike: (currentMovie: Movie) => void;
  onDelete: (currentMovie: Movie) => void;
}

const MoviesTableBody = ({
  movies,
  onDelete,
  onLike,
  numberOfItemsOnEachPage,
  numberOfCurrentPage,
}: Props) => {
  const endOfPage = numberOfCurrentPage * numberOfItemsOnEachPage;
  const startOfPage = endOfPage - numberOfItemsOnEachPage;
  const isPageEmpty = movies.length === startOfPage;
  console.log("isPageEmpty?", isPageEmpty);
  const moviesChunk = movies.slice(startOfPage, endOfPage);

  return (
    <TableBody>
      {moviesChunk.map((currentMovie) => (
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
