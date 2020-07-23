

export const addStartup = (startup) => {
  return {
    type: "ADD_STARTUP",
    startup
  };
};

export const deleteStartup = (startup_id) => {
  return {
    type: "DELETE_STARTUP",
    startup_id,
  };
};

export const editStartup = (startup_id,updated_info) => {
  return {
    type: "EDIT_STARTUP",
    startup_id,
    updated_info
  };
};
