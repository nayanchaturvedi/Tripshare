import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  SAVE_USER_REQUEST,
  USER_FAILURE,
  USER_SUCCESS,
} from "./userTypes";
import axios from "axios";

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUserRequest());
    axios
      .get(
        "https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole"
      )
      .then((response) => {
        dispatch(fetchUserSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchUserFailure(error.message));
      });
  };
};

export const saveUser = (user) => {
  return (dispatch) => {
    dispatch({
      type: SAVE_USER_REQUEST,
    });
    console.log(user);
    axios
      .post("http://localhost:8080/rest/registration", user)
      .then((response) => {
        dispatch(userSuccess(response.data));
      })
      .catch((error) => {
        dispatch(userFailure(error));
      });
  };
};

const userSuccess = (user) => {
  return {
    type: USER_SUCCESS,
    payload: user,
  };
};

const userFailure = (error) => {
  return {
    type: USER_FAILURE,
    payload: error,
  };
};

const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};

const fetchUserSuccess = (users) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: users,
  };
};

const fetchUserFailure = (error) => {
  return {
    type: FETCH_USER_FAILURE,
    payload: error,
  };
};
