import React, {useState, useEffect} from 'react';
import { Button } from '@material-ui/core';

function Comment() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        window.document.title = `Clicked ${count} times`;
        inc()
        dec()
    }, []);
    
    const inc = () => {
        window.document.title = `Clicked ${count} times`;
        setCount(count + 1);
    };

    const dec = () => {
        window.document.title = `Clicked ${count} times`;
        setCount(count - 1);
    }

        return (<div className="commentpad">
            <h1>Please comment here</h1>
            <span>{ count }</span>
            <Button onClick={inc}> Increment </Button>
            <Button onClick={dec}> Decrement </Button>
        </div>)
    
}

export default Comment;
