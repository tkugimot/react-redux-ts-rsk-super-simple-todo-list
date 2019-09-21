import * as React from "react";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export interface TodoProps {
    id: number
    text: string
    completed: boolean
}

const Todo = ({ id, text, completed }: TodoProps) => {
    return (
        <ListItem key={id}>
            <ListItemText primary={text} />
        </ListItem>
    )
}

export default Todo;
