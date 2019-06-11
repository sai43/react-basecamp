import React, { Component } from 'react';
import './post.css';
import Form from './Form';
import PostItem from './Post';

class Post extends Component {
   
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    handleFormValues = (post) => {
        this.setState((state) => {
            return state.posts.push(post);
          }); 
    }

    render() {
        return(
            <div>
            <Form onFormSubmit= {this.handleFormValues}/>
            <ul>
                {this.state.posts.map((item, index) => (
                    <PostItem key={index} post={item} />
                ))}
            </ul>
          </div>
        );
    }
}

export default Post;