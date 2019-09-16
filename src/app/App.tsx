import React from 'react';
import './App.scss';
import AddTodo from '../component/AddTodo';
import { Provider } from 'react-redux';
import store from "./store";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <AddTodo />
      </div>
    </Provider>
  )
}

export default App;
