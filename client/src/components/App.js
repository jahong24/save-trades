import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  render() {
    const res = axios.get("/trades");

    console.log(res);

    return <div>Hello World</div>;
  }
}

export default App;
