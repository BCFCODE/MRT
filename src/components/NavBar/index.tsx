import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Badge from "@mui/material/Badge";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Component } from "react";
import { Button } from "@mui/material";
import { CountersProps } from "../../types/Counters";

export interface INavBarProps {
  counters: CountersProps;
  onReset: () => void;
}
export interface INavBarState {}

class NavBar extends Component<INavBarProps, INavBarState> {
  state = {};

  render() {
    const { counters, onReset } = this.props;

    // const numberOfValues = counters.reduce((acc, { value }) => acc + value, 0);
    const numberOfValues = counters.reduce(
      (acc, { value }) => (value > 0 ? acc + 1 : acc),
      0
    );

    return (
      <Box sx={{ flexGrow: 1, marginBottom: 3 }}>
        <AppBar color="transparent" position="static">
          <Toolbar>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Button onClick={onReset} color="error" variant="outlined">
                Reset
              </Button>
              <Badge badgeContent={numberOfValues} color="error">
                <AddShoppingCartIcon />
              </Badge>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
}

export default NavBar;
