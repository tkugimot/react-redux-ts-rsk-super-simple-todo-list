import { useDispatch } from "react-redux";
import { useState } from "react";
import * as React from "react";
import { addTodo } from "../feature/todoSlice";

const AddTodo = () => {
    const dispatch = useDispatch();
    const [text, setText] = useState("");

    const onSubmit = (e: any) => {
        e.preventDefault();
        if (text.trim() === "") return null;
        dispatch(
            addTodo({
                text
            })
        )
    };

    const onChange = (e: any) => {
        console.log(e.target.value);
        setText(e.target.value);
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={text} onChange={onChange} />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    );
};

export default AddTodo;
