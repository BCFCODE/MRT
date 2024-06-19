import { Movie } from "../../types/Movies";
import TableCell from "@mui/material/TableCell";
import { Like } from "../common/Like";
import { Button } from "@mui/material";

interface Props {
  movie: Movie;
  onLike: (currentMovie: Movie) => void;
  onDelete: (id: string) => void;
}

const TableCells = ({ movie, onLike, onDelete }: Props) => {
  const { title, genre, numberInStock, dailyRentalRate, liked } = movie;

  return (
    <>
      <TableCell component="th" scope="row">
        {title}
      </TableCell>
      <TableCell align="right">{genre.name}</TableCell>
      <TableCell align="right">{numberInStock}</TableCell>
      <TableCell align="right">{dailyRentalRate}</TableCell>
      <TableCell align="right">
        <Like toggleLike={() => onLike(movie)} isLiked={liked ?? false} />
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
    </>
  );
};

export default TableCells;
