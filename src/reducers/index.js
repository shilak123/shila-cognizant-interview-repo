/**
 * Returns new state on the basis input params
 * @author Shila Kumari
 */
export default (
  state = {
    users: [
      {
        id: 4,
        first_name: "Eve",
        last_name: "Holt",
        avatar:
          "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
      },
      {
        id: 5,
        first_name: "Charles",
        last_name: "Morris",
        avatar:
          "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"
      },
      {
        id: 6,
        first_name: "Tracey",
        last_name: "Ramos",
        avatar:
          "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"
      }
    ],
    fetching: false,
    fetched: false,
    error: null
  },
  action
) => {
  switch (action.type) {
    case "GET_USERS": {
      return {
        ...state,
        fetching: true
      };
    }

    case "GET_USERS_SUCCESS": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        users: [...state.users, ...action.payload]
      };
    }

    case "GET_USERS_FAILURE": {
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    }

    case "USER_DELETED": {
      return {
        ...state,
        users: [...action.payload]
      };
    }

    case "REMOVED_DUPLICATE_USERS": {
      return {
        ...state,
        users: [...action.payload]
      };
    }

    default:
      return state;
  }
};
