import ChecklistIcon from "@mui/icons-material/Checklist";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Genre } from "../../../types/Movies";

interface Props {
  genre: Genre;
}

const AllGenresButton = ({genre}: Props) => {
  return (
    <ListItem key={genre._id} disablePadding>
      <ListItemButton>
        <ListItemIcon>
          <ChecklistIcon />
        </ListItemIcon>
        <ListItemText primary="All Genres" />
      </ListItemButton>
    </ListItem>
  );
};

export default AllGenresButton;
