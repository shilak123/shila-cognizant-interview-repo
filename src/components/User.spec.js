import React from "react";
import { mount } from "enzyme";

import { User } from "./User";
/**
 * Testcase for User's First Name, Last Name, Avatar, Delete Button, Delete Action
 * @author Shila Kumari
 */
describe("User", () => {
  let component;
  let props;

  beforeEach(() => {
    props = {
      deleteUser: jest.fn(),
      avatar: "avatar/image/source",
      first_name: "user first name",
      id: 1,
      last_name: "user last name"
    };

    component = mount(<User {...props} />);
  });

  it("Renders an Image", () => {
    expect(
      component.find("div.user-card div.user-avatar").props().style
        .backgroundImage
    ).toEqual('url("avatar/image/source")');
  });

  it("Show User Name and Last Name", () => {
    expect(
      component.find("div.user-card div.user-content h2.user-title").text()
    ).toEqual("user first name user last name");
  });

  it("Show delete button", () => {
    expect(
      component.find("div.user-card div.user-action button.delete-user").text()
    ).toEqual("Delete");
  });

  it("Trigger deleteUser action", () => {
    component
      .find("div.user-card div.user-action button.delete-user")
      .at(0)
      .simulate("click");
    expect(props.deleteUser).toHaveBeenCalled();
  });
});
