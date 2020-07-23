import React, { Component } from "react";
import StartupOptions from "./StartupOptions";
import StartupList from "./StartupList";

class Startup extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-4">
          <StartupOptions />
        </div>
        <div className="col-md-8">
          <StartupList deleteStartup={this.props.deleteStartup}items={this.props.items}/>
        </div>
      </div>
    );
  }
}

export default Startup;
