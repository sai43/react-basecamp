import React, {useState} from 'react';
import { Button } from '@material-ui/core';

function Comment() {
    const [count, setCount] = useState(0);
        return (<div className="commentpad">
            <h1>Please comment here</h1>
            <span>{ count }</span>
            <Button onClick={() => setCount(count + 1)}> Increment </Button>
            <Button onClick={() => setCount(count - 1)}> Decrement </Button>
        </div>)
    
}

export default Comment;
