import {v4 as uuidv4} from "uuid"




const initState = {
  items: [
    {
      company: "Google",
      industry: "software",
      location: "Berlin",
      joined: "30th july, 2090",
      id: uuidv4()
    },
    {
      company: "Amazon",
      industry: "commerce",
      location: "Paris",
      joined: "15th August, 2079",
      id: uuidv4()
    },
  ],
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_STARTUP":
      return {...state,items:[...state.items,action.startup]};
    case "DELETE_STARTUP":
      const filteredind = state.items.filter(startup => startup.id !== action.startup_id)
      return {...state,items: filteredind}
    case "EDIT_STARTUP":
      const editedinfo = state.items.map(item => {
        if (item.id === action.startup_id) {
          return {...item,...action.updated_info}
        } else {
          return item
        }
      })
      return {...state,items: editedinfo}
    default:
      return state;
  }
};

export default userReducer;
