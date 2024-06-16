import { Component } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { IconButton } from "@mui/material";

export interface ILikeProps {
  isLiked: boolean;
  toggleLike: () => void;
}
export interface ILikeState {}

class Like extends Component<ILikeProps, ILikeState> {
  state = {};

  render() {
    const { isLiked, toggleLike } = this.props;

    return (
      <IconButton onClick={() => toggleLike()}>
        {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </IconButton>
    );
  }
}

export { Like };
