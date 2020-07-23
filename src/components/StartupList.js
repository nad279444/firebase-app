import React, { Component } from "react";
import StartupDashboard from "./StartupDashboard";
import Template from "./Template";

class StartupList extends Component {
  render() {
    return (
      <div className="background">
        <StartupDashboard />
        <Template />
      </div>
    );
  }
}

export default StartupList;
