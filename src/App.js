import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/home/Home';
import About from './components/about/About';
import Nav from './components/nav/Nav';

function App() {
  return (
    <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
          </Switch>
        </div>
    </Router>

  );
}

export default App;
