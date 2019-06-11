import React from 'react';
import Post from './components/posts/posts'
import PrimarySearchAppBar from './shared/components/AppBar';
import Container from '@material-ui/core/Container';

function App() {
  return (
    <div className="App">
        <PrimarySearchAppBar />
        <Container maxWidth="lg">
          <Post />
        </Container>
    </div>
  );
}

export default App;
