import { useSelector } from "react-redux";
import { RootState } from "../app/rootReducer";
import * as React from "react";
import Todo from "./Todo";

const TodoList = () => {
    const todos = useSelector((state: RootState) => state.todos);

    return(
        <div>
            <ul>
                {todos.map(todo => (
                    <Todo
                        key={todo.id}
                        {...todo}
                    />
                ))}
            </ul>
        </div>
    )
}

export default TodoList;
