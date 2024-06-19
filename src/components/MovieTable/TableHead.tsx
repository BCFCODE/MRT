import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const MoviesTableHead = () => {
  return (
    <TableHead>
      <TableRow>
        {["Title", "Genre", "Stock", "Rate", ""].map((header, i) => (
          <TableCell
            key={i}
            sx={{ fontWeight: "bold" }}
            align={i ? "right" : "left"}
          >
            {header}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default MoviesTableHead;
