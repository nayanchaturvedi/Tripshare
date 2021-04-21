import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  SAVE_USER_REQUEST,
  USER_SUCCESS,
  USER_FAILURE,
} from "./userTypes";

const initialState = {
  user: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
      };
    case FETCH_USER_SUCCESS:
      return {
        user: action.payload,
        error: "",
      };
    case FETCH_USER_FAILURE:
      return {
        user: [],
        error: action.payload,
      };
    case USER_SUCCESS:
      return {
        user: action.payload,
        error: "",
      };
    case USER_FAILURE:
      return {
        user: "",
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
