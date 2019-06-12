import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/home/Home';
import About from './components/about/About';
import Nav from './components/nav/Nav';
import Items from './components/items/Items';

function App() {
  return (
    <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/items" component={Items} />
          </Switch>
        </div>
    </Router>

  );
}

export default App;
