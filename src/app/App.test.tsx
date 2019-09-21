import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {configure, EnzymeAdapter, shallow} from "enzyme";
import AddTodo from "../component/AddTodo";
import TodoList from "../component/TodoList";
import Adapter from 'enzyme-adapter-react-16'

configure({adapter: new Adapter()});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('Children components exist', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(AddTodo).length).toBe(1);
  expect(wrapper.find(TodoList).length).toBe(1);
});
