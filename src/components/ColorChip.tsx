import { Component } from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export interface IColorChipProps {}
export interface IColorChipState {}

class ColorChip extends Component<IColorChipProps, IColorChipState> {
  state = {};

  render() {
    return (
      <Stack spacing={1} alignItems="center">
        <Stack direction="row" spacing={1}>
          <Chip label="primary" color="primary" />
          <Chip label="success" color="success" />
        </Stack>
        <Stack direction="row" spacing={1}>
          <Chip label="primary" color="primary" variant="outlined" />
          <Chip label="success" color="success" variant="outlined" />
        </Stack>
      </Stack>
    );
  }
}

export { ColorChip };
