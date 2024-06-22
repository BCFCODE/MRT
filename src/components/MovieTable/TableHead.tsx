import { Box, TableSortLabel } from "@mui/material";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const MoviesTableHead = () => {
  return (
    <TableHead>
      <TableRow>
        {["Title", "Genre", "Stock", "Rate", ""].map((header, i) => (
          // <TableCell
          //   key={i}
          //   sx={{ fontWeight: "bold" }}
          //   align={i ? "right" : "left"}
          // >
          //   {header}
          // </TableCell>
          <TableCell
            key={i}
            align={i ? "right" : "left"}
            sx={{ fontWeight: "bold" }}
            // padding={headCell.disablePadding ? "none" : "normal"}
            // sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              // active={orderBy === headCell.id}
              direction={/* orderBy === headCell.id ? order : */ "asc"}
              // onClick={createSortHandler(headCell.id)}
            >
              {header}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default MoviesTableHead;
