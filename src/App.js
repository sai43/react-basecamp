import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/home/Home';
import About from './components/about/About';
import Nav from './components/nav/Nav';
import Items from './components/items/Items';
import Item from './components/items/Item';
import Comment from './components/comments/comment';

function App() {
  return (
    <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/items" exact component={Items} />
            <Route path="/items/:id" exact component={Item} />
            <Route path="/comments" exact component={Comment} />
          </Switch>
        </div>
    </Router>

  );
}

export default App;
