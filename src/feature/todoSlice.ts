import { createSlice, PayloadAction } from 'redux-starter-kit'

interface TodoState {
    id: number
    text: string
    completed: boolean
}

interface IAddTodo {
    text: string
}

const initialState: TodoState[] = []

const todoSlice = createSlice({
    slice: 'todoList',
    initialState,
    reducers: {
        addTodo(state, action: PayloadAction<IAddTodo>) {
            const newTodo: TodoState = {
                id: state.length + 1,
                text: action.payload.text,
                completed: false
            }
            state.push(newTodo);
        }
    }
});

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
