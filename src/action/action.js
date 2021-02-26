import {
  ADD_MOVIE,
  DELETE_MOVIE,
  EDIT_MOVIE,
  CHANGE_COLOR,
} from "../const/actionTypes";

export const addMovie = (payload) => {
  return {
    type: ADD_MOVIE,
    payload,
  };
};

export const deleteMovie = (payload) => {
  return {
    type: DELETE_MOVIE,
    payload,
  };
};

export const editMovie = (payload) => {
  return {
    type: EDIT_MOVIE,
    payload,
  };
};

export const changeColor = (payload) => {
  return {
    type: CHANGE_COLOR,
    payload,
  };
};
