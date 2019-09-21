import todoList, {addTodo, IAddTodo, initialState, TodoState} from './todoSlice'
import todoSlice from "./todoSlice";
import {PayloadAction} from "redux-starter-kit";

describe('todo reducer', () => {
    it('should handle initial state', () => {
        const expected: TodoState[] = [];
        expect(initialState).toEqual(expected);
    });

    it('should handle addTodo', () => {
        let initialState: TodoState[] = [];

        const todoText: string = "write unit test.";
        const action: PayloadAction<IAddTodo> = {
            type: addTodo.type,
            payload: {
                text: todoText,
            }
        };

        const newTodo: TodoState = {
            id: 1,
            text: todoText,
            completed: false
        };
        const expectedState: TodoState[] = [newTodo];
        expect(todoSlice(initialState, action)).toEqual(expectedState);
    });
});
