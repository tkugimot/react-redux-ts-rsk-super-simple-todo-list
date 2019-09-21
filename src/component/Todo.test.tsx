import {configure, mount, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";

configure({adapter: new Adapter()});

it('renders without crashing', () => {
});
