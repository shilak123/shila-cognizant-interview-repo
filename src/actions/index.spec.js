import axios from "axios";

import { getUsers, deleteUser, removeDuplicates } from "./index";
/**
 * Testcase for get users
 * @author Shila Kumari
 */
describe("Actions", () => {
 
  it("getUsers - fetch ajax content --- successful", async () => {
    const input = {
      page: 1,
      per_page: 4,
      total: 12,
      total_pages: 3,
      data: [
        {
          id: 1,
          first_name: "George",
          last_name: "Bluth",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"
        },
        {
          id: 2,
          first_name: "Janet",
          last_name: "Weaver",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"
        },
        {
          id: 3,
          first_name: "Emma",
          last_name: "Wong",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg"
        },
        {
          id: 4,
          first_name: "Eve",
          last_name: "Holt",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
        }
      ]
    };
    
    const output = { type: "GET_USERS", payload: {} };
    const output1 = { type: "GET_USERS_SUCCESS", payload: input.data };
    const dispatch = jest.fn();

    axios.get = jest.fn(() => Promise.resolve({ data: input }));

    await getUsers()(dispatch);
    expect(dispatch.mock.calls[0][0]).toEqual(output);
    expect(dispatch.mock.calls[1][0]).toEqual(output1);
  });

  it("getUsers - fetch ajax content --- error", async () => {
    const input = { code: 404, message: "Something went wrong" };
    const output = { type: "GET_USERS", payload: {} };
    const output1 = { type: "GET_USERS_FAILURE", payload: input };
    const dispatch = jest.fn();

    axios.get = jest.fn(() => Promise.reject(input));

    await getUsers()(dispatch);
    expect(dispatch.mock.calls[0][0]).toEqual(output);
   
  });

  it("Returns updated payload with given user id ", () => {
    const input = {
      Users: {
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
        ]
      }
    };
    const output = {
      type: "USER_DELETED",
      payload: [
        {
          id: 4,
          first_name: "Eve",
          last_name: "Holt",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
        },
        {
          id: 6,
          first_name: "Tracey",
          last_name: "Ramos",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"
        }
      ]
    };
    const dispatch = jest.fn();
    const getState = jest.fn(() => input);

    deleteUser(5)(dispatch, getState);
    expect(dispatch.mock.calls[0][0]).toEqual(output);
  });

  it("Returns updated payload for duplicate user id(s)", () => {
    const input = {
      Users: {
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
            id: 4,
            first_name: "Eve",
            last_name: "Holt",
            avatar:
              "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"
          }
        ]
      }
    };
    const output = {
      type: "REMOVED_DUPLICATE_USERS",
      payload: [
        {
          id: 5,
          first_name: "Charles",
          last_name: "Morris",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"
        },
        {
          id: 4,
          first_name: "Eve",
          last_name: "Holt",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"
        }
      ]
    };
    const dispatch = jest.fn();
    const getState = jest.fn(() => input);

    removeDuplicates()(dispatch, getState);
    expect(dispatch.mock.calls[0][0]).toEqual(output);
  });
});
