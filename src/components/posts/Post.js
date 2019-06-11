import React from 'react';

function PostItem(props) {
    return(
        <li> { props.post.title } </li>
    );
}

export default PostItem;
