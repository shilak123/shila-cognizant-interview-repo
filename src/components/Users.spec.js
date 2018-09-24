import PropTypes from "prop-types";
import React from "react";
import { mount } from "enzyme";
import configureMockStore from "redux-mock-store";
import Users from "./Users";
/**
 * Testcase for check user info
 * @author Shila Kumari
 */
describe("Users", () => {
  it("Check if user info is available", () => {
    const props = {
      users: []
    };
    const component = mount(<Users {...props} />);

    expect(
      component.find("div.user-details div.user-card").length
    ).toEqual(0);
  });

  it("show  message when user detail is not available", () => {
    const props = {
      users: []
    };
    const component = mount(<Users {...props} />);

    expect(
      component.find("div.user-details h2.user-blank").length
    ).toEqual(1);
  });

  it("show details when user details is available", () => {
    const props = {
      users: [
        {
          avatar: "avatar/image/source",
          first_name: "user first name",
          id: 1,
          last_name: "user last name"
        }
      ]
    };
    const component = mount(<Users {...props} />, {
      context: { store: configureMockStore()({}) },
      childContextTypes: {
        store: PropTypes.object.isRequired
      }
    });

    expect(
      component.find("div.user-details div.user-card").length
    ).toEqual(1);
  });
});
