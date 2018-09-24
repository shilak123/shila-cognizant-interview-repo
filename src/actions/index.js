import axios from "axios";

/**
 * To Get the users in state and add on response
 * @author Shila Kumari
 */
export const getUsers = () => dispatch => {
  dispatch({ type: "GET_USERS", payload: {} });

  axios
    .get("https://reqres.in/api/users?page=1&per_page=10")

    .then(response => {
      dispatch({ type: "GET_USERS_SUCCESS", payload: response.data.data });
    })

    .catch(err => {
      dispatch({ type: "GET_USERS_FAILURE", payload: err });
    });
};

/**
 * To Delete the user data using provided id from state
 * @author Shila Kumari
 */
export const deleteUser = id => (dispatch, getState) => {
  dispatch({ type: "USER_DELETED", payload: getState().Users.users.filter(u => u.id !== id) });
};

/**
 * To Remove duplicate users information from state
 * @author Shila Kumari
 */
export const removeDuplicates = () => (dispatch, getState) => {
  const { users } = getState().Users;
  const filteredUsers = users.filter((u, i, a) => a.slice(i + 1).filter(u1 => u1.id === u.id).length === 0);

  if (filteredUsers.length !== users.length) {
    dispatch({ type: "REMOVED_DUPLICATE_USERS", payload: filteredUsers });
  }
};
