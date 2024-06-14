import { Component } from "react";
// import "./App.css";
import { Counters } from "./components/Counters";
import NavBar from "./components/NavBar";

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Counters />
      </>
    );
  }
}

export default App;
