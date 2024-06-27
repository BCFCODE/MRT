import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import ChecklistIcon from "@mui/icons-material/Checklist";
import { Genre } from "../../../types/Movies";
import { IMoviesState } from "../../Movies";
import useMoviesState from "../../Movies/hooks/useMoviesState";

interface Props {
  moviesState: IMoviesState;
  onSelectGenre: (genre: Genre) => void;
}

const ListGroup = ({ moviesState, onSelectGenre }: Props) => {
  const { genres, selectedGenre } = useMoviesState(moviesState);

  return (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ChecklistIcon />
              </ListItemIcon>
              <ListItemText primary="All Genres" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <Divider />
      <nav aria-label="secondary mailbox folders">
        <List>
          {genres.map((genre) => (
            <ListItem key={genre._id} disablePadding>
              <ListItemButton
                onClick={() => onSelectGenre(genre)}
                sx={{
                  bgcolor:
                    selectedGenre?._id === genre._id
                      ? "ButtonShadow"
                      : "initial",
                }}
                component="a"
                href="#"
              >
                <ListItemText primary={genre.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
    </Box>
  );
};

export { ListGroup };
