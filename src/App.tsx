import { Component } from "react";
// import "./App.css";
import { Counters } from "./components/Counters";
import NavBar from "./components/NavBar";
import { CounterProps, CountersProps } from "./types/Counters";
import { Box } from "@mui/material";

export interface IAppProps {}
export interface IAppState {
  counters: CountersProps;
}
class App extends Component<IAppProps, IAppState> {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleReset = () => {
    console.log(this.state.counters);
    this.setState(({ counters }) => ({
      counters: counters.map(({ id }) => ({ id, value: 0 })),
    }));
  };

  handleIncrement = (counter: CounterProps) => {
    const { id: counterId, value: counterValue } = counter;
    this.setState(({ counters }) => ({
      counters: counters.map(({ id, value }) =>
        id === counterId ? { id, value: counterValue + 1 } : { id, value }
      ),
    }));
  };

  handleDelete = (counter: CounterProps) => {
    this.setState(({ counters }) => ({
      counters: counters.filter(({ id }) => id !== counter.id),
    }));
  };

  render() {
    return (
      <Box
        sx={{
          padding: 3,
          width: "300px",
          border: "1px solid rgba(0, 0, 0, 0.3)",
        }}
      >
        <NavBar counters={this.state.counters} onReset={this.handleReset} />
        <Counters
          counters={this.state.counters}
          onIncrement={this.handleIncrement}
          onDelete={this.handleDelete}
        />
      </Box>
    );
  }
}

export default App;
