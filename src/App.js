import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import Newtask from './pages/newtask';
import Taskhistory from './pages/taskhistory';
import Funds from './pages/funds';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/newtask' component={Newtask} />
        <Route path='/taskhistory' component={Taskhistory} />
        <Route path='/funds' component={Funds} />
      </Switch>
    </Router>
  );
}

export default App;
