import { shallow } from "enzyme";
import "jest";
import * as React from "react";

import { MyInput } from "../src/index";

const createTestProps = (props = {}) => {
  return {
    initialValue: "",
    onChange: (newValue: string): void => {
      console.log(newValue);
    },
    validate: (value: string): boolean => {
      return true;
    },
    ...props,
  };
};

describe("MyInput", () => {
  it("renders correctly", () => {
    const props = createTestProps();
    const wrapper = shallow(
      <MyInput {...props} />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it("renders correctly with initial value", () => {
    const props = createTestProps({
      initialValue: "test init",
    });
    const wrapper = shallow(
      <MyInput {...props} />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it("validation works correctly", () => {
    const props = createTestProps({
      validate: (value: string) => {
        return value.length < 10;
      }
    });
    const wrapper = shallow(
      <MyInput {...props} />,
    );
    expect(wrapper).toMatchSnapshot();
    wrapper.find("input").simulate("onChange", { target: { value: "test" }});
    expect(wrapper).toMatchSnapshot();
    wrapper.find("input").simulate("onChange", { target: { value: "testtesttest" }});
    expect(wrapper).toMatchSnapshot();
  });
});
