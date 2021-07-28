import React from "react";
import dynamic from "next/dynamic";

import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import { Provider } from "react-redux";

Enzyme.configure({ adapter: new Adapter() });

import storeFactory from "@/tests/storeFactory";

const Home = dynamic(() => import("./index"), { ssr: false });

const setup = (initialState = {}) => {
  const store = storeFactory();
  const wrapper = shallow(
    <Provider store={store}>
      <Home />
    </Provider>
  );
  console.log(wrapper.debug());
  return wrapper;
};

describe("Testing Home Page", () => {
  test("Page Renders", () => {
    // const wrapper = setup();
  });
});
