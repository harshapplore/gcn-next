import React from "react";
import Enzyme, { shallow } from "enzyme";

import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });

const { test } = require("@jest/globals");

import Home from "./index";

describe("Testing Home Page", () => {
  test("Page Renders", () => {
    const wrapper = shallow(<Home />);
  });
});
