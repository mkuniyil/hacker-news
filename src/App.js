import React, { Component } from "react";
import "./App.css";

import Header from "./components/Header";
import PanelContainer from "./containers/PanelContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <PanelContainer />
      </div>
    );
  }
}

export default App;
