import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import { Genre, Movie, PageQuery } from "../../types/Movies";
import TableCells from "./TableCells";
import usePageQuery from "./hooks/usePageQuery";

interface Props {
  movies: Movie[];
  pageQuery: PageQuery;
  onLike: (currentMovie: Movie) => void;
  onDelete: (currentMovie: Movie) => void;
  selectedGenre: Genre | null;
}

const MoviesTableBody = ({
  movies,
  onDelete,
  onLike,
  pageQuery,
  selectedGenre,
}: Props) => {
  const { moviesChunk, isCurrentPageEmpty, numberOfItemsInCurrentPage } =
    usePageQuery({
      selectedGenre,
      pageQuery,
      movies,
    });

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
