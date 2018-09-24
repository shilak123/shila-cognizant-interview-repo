import React from "react";
import { mount } from "enzyme";

import { PearsonUsers } from "./PearsonUsers";
/**
 * Testcase for Rendering Heading of application
 * @author Shila Kumari
 */
describe("PearsonUsers", () => {
  it("show title of application", () => {
    const props = {
      users: [],
      getUsers: jest.fn(),
      removeDuplicates: jest.fn()
    };
    const component = mount(<PearsonUsers {...props} />);

    expect(component.find("p.heading").text()).toEqual(
      "Pearson User Management"
    );
  });
});
