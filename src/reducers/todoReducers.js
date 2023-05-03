const initialState = {
  list: [],
};
const todoReducers = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const { id, data } = action.payload;
      if (data === "") {
        alert("Please enter something");
        return state;
      } else {
        return {
          ...state,
          list: [...state.list, { id, data }],
        };
      }
    case "DELETE_TODO":
      const newList = state.list.filter((item) => item.id !== action.id);
      return {
        ...state,
        list: newList,
      };

    case "REMOVE_TODO":
      return {
        ...state,
        list: [],
      };
    default:
      return state;
  }
};

export default todoReducers;
