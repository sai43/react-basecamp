import React from 'react';
import Post from './posts/posts'
import Comment from './comments/comment'

function App() {
  return (
    <div className="App">
      <Post current_user='saich' />
      <Comment />
    </div>
  );
}

export default App;
