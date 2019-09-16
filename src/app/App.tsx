import React from 'react';
import './App.scss';
import AddTodo from '../component/AddTodo';
import { Provider } from 'react-redux';
import store from "./store";
import TodoList from '../component/TodoList';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <AddTodo />
        <TodoList />
      </div>
    </Provider>
  )
}

export default App;
