import React from "react";
import { mount } from "enzyme";
import ValidateUser from "./ValidateUser";

/**
 * Testcase for user info is not available
 * @author Shila Kumari
 */
describe("ValidateUser", () => {
  it("Check if user is not found", () => {
    const component = mount(<ValidateUser />);

    expect(
      component.find("div.user-details h2.user-blank").text()
    ).toEqual("No user Found");
  });
});
