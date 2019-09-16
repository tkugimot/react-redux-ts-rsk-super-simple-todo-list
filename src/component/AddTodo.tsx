import { useDispatch } from "react-redux";
import { useState } from "react";
import * as React from "react";
import { addTodo } from "../feature/todoSlice";
import { Button, FormControl, InputLabel, Input, FormHelperText } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    button: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
    },
    input: {
        margin: '30px 0'
    }
});
  
const AddTodo = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
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
            <FormControl onSubmit={onSubmit}>
                <InputLabel htmlFor="my-input">Write Todo</InputLabel>
                <Input value={text} 
                    onChange={onChange} 
                    id="my-input" 
                    aria-describedby="my-helper-text"
                    className={classes.input} />
                <Button variant="contained" className={classes.button}>Add</Button>
            </FormControl>
        </div>
    );
};

export default AddTodo;
