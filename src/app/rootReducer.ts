import { combineReducers } from "redux";
import todoListReducer from '../feature/todoSlice';

const rootReducer = combineReducers({
    todos: todoListReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
