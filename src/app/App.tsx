import React from 'react';
import './App.scss';
import AddTodo from '../component/AddTodo';
import { Provider } from 'react-redux';
import store from "./store";
import TodoList from '../component/TodoList';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { theme } from './Theme'

const App: React.FC = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <div className="App">
          <AddTodo />
          <TodoList />
        </div>
      </Provider>
    </MuiThemeProvider>
  )
}

export default App;
