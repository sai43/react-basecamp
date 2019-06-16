import React, {Component} from 'react';
import './comment.css';
import { Button } from '@material-ui/core';

class Comment extends Component {

    constructor(props){
        super(props);
        console.log('constructor - called');
        this.inc = this.inc.bind(this);
        this.dec = this.dec.bind(this);
        this.state = {
            count: 0,
        };
    }

    inc() {
        this.setState((state) => {
            return state.count = state.count + 1;
        });
    }

    dec() {
        this.setState((state) => {
           return state.count = state.count - 1;
        });
    }

    componentWillReceiveProps() {
        console.log('component will receive props');
    }


    UNSAFE_componentWillReceiveProps() {
        console.log('unsafe component will receive props'); 
    }

    componentWillMount() {
        console.log('component will mount');
    }

    UNSAFE_componentWillMount(){
        console.log('unsafe component will mount');
    }

    componentDidMount() {
        console.log('component did mount');
        window.document.title = 'you clicked 0 times'
    }

    shouldComponentUpdate() {
        console.log('should component update'); 
        return this.state.count;
    }

    componentWillUpdate(){
        console.log('component will updated');
    }

    UNSAFE_componentWillUpdate(){
        console.log('unsafe component will update');
    }

    componentDidUpdate() {
        console.log('component did update');
    }

    componentWillUnmount() {
        console.log('component un mount');
    }

    componentDidCatch() {
        console.log('component did catch');
    }
    
    render() {
        return (<div className="commentpad">
            <h1>Please comment here</h1>
            <span>{ this.state.count }</span>
            <Button onClick={this.inc}> Increment </Button>
            <Button onClick={this.dec}> Decrement </Button>
        </div>)
    }
}

export default Comment;
