const initialState = {
    name: "",
    age: "",
  };

  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "UPDATE_NAME":
        return {
          ...state,
          name: action.payload,
        };
      case "UPDATE_AGE":
        return {
          ...state,
          age: action.payload,
        };
      default:
        return state;
    }
  };

  export default reducer;