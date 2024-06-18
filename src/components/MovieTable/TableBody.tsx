import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { Button } from "@mui/material";
import { Like } from "../common/Like";
import { Movie } from "../../types/Movies";

interface Props {
  numberOfItemsOnEachPage: number;
  numberOfCurrentPage: number;
  onLike: (currentMovie: Movie) => void;
  onDelete: (id: string) => void;
  movies: Movie[];
}

const MoviesTableBody = ({
  movies,
  onDelete,
  onLike,
  numberOfItemsOnEachPage,
  numberOfCurrentPage
}: Props) => {
  const endOfPage =  numberOfCurrentPage * numberOfItemsOnEachPage
  const startOfPage = endOfPage - numberOfItemsOnEachPage
  const moviesChunk = movies.slice(startOfPage, endOfPage)
  const isPageEmpty = movies.length === startOfPage
  console.log('isPageEmpty?', isPageEmpty)
  
  return (
    <TableBody>
      {moviesChunk.map((movie) => (
        <TableRow
          key={movie._id}
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        >
          <TableCell component="th" scope="row">
            {movie.title}
          </TableCell>
          <TableCell align="right">{movie.genre.name}</TableCell>
          <TableCell align="right">{movie.numberInStock}</TableCell>
          <TableCell align="right">{movie.dailyRentalRate}</TableCell>
          <TableCell align="right">
            <Like
              toggleLike={() => onLike(movie)}
              isLiked={movie.liked ?? false}
            />
          </TableCell>
          <TableCell align="right">
            <Button
              onClick={() => onDelete(movie._id)}
              color="error"
              variant="contained"
            >
              Delete
            </Button>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

export default MoviesTableBody;
