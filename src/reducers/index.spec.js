import Reducers from "./index";

describe("Reducers", () => {
  let state;

  beforeEach(() => {
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
    };
  });

  it("returns default state, with fetching set to true", () => {
    expect(Reducers(undefined, { type: "GET_USERS" })).toEqual({
      ...state,
      fetching: true
    });
  });

  it("returns default state, with fetching set to false, fetched set to true, and new data appended to users", () => {
    const payload = [
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
      }
    ];

    expect(
      Reducers(undefined, {
        type: "GET_USERS_SUCCESS",
        payload: payload
      })
    ).toEqual({
      ...state,
      fetching: false,
      fetched: true,
      users: [...state.users, ...payload]
    });
  });

  it("returns default 3 users, with fetching set to false, fetched set to false, and error set", () => {
    const payload = { code: 404, message: "Something went wrong" };

    expect(
      Reducers(undefined, {
        type: "GET_USERS_FAILURE",
        payload: payload
      })
    ).toEqual({
      ...state,
      fetching: false,
      fetched: false,
      error: { ...payload }
    });
  });

  it("returns default state, with users set to payload", () => {
    const payload = [
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
      }
    ];

    expect(
      Reducers(undefined, {
        type: "USER_DELETED",
        payload: payload
      })
    ).toEqual({
      ...state,
      users: [...payload]
    });
  });

  it("returns default state, with users set to payload", () => {
    const payload = [
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
      }
    ];

    expect(
      Reducers(undefined, {
        type: "REMOVED_DUPLICATE_USERS",
        payload: payload
      })
    ).toEqual({
      ...state,
      users: [...payload]
    });
  });
});
