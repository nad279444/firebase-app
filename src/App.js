import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import SearchBar from "./components/SearchBar";
import Startup from "./components/Startup";

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
            <Navbar />
            <SearchBar />
            <Startup />        
      </div>
    );
  }
}

export default App;
