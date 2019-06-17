import React, {useState} from 'react';
import { Button } from '@material-ui/core';
import {Subject} from 'rxjs/Rx';

function Comment() {
    const subject = new Subject();

      subject.subscribe({
         next: (v) => console.log('observerA: ' + v)
      });
      subject.subscribe({
        next: (v) => console.log('observerB: ' + v)
      });
      
      subject.next(1);
      subject.next(2);

    const [count, setCount] = useState(0);
        return (<div className="commentpad">
            <h1>Please comment here</h1>
            <span>{ count }</span>
            <Button onClick={() => setCount(count + 1)}> Increment </Button>
            <Button onClick={() => setCount(count - 1)}> Decrement </Button>
        </div>)
    
}

export default Comment;
