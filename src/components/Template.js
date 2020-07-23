import React from "react";

import Dashboard from "./dashboard";
import { connect } from "react-redux";
import { deleteStartup } from "../store/userAction";

const Template = (props) => {
  const { items } = props;

  return (
    <div>
      {items &&
        items.map((item) => {
          return (
            <Dashboard
              key={item.id}
              id={item.id}
              item={item}
              deleteStartup={deleteStartup}
            />
          );
        })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};

export default connect(mapStateToProps, { deleteStartup })(Template);
