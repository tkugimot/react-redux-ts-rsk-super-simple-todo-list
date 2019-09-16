import * as React from "react";

interface TodoProps {
    id: number
    text: string
    completed: boolean
}

const Todo = ({ id, text, completed }: TodoProps) => {
    return (
        <li>
            {id}, {text}, {completed}
        </li>
    )
}

export default Todo;
