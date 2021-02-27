import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Text from './pages/index';
import Image from './pages/image';
import Video from './pages/video';
import Table from './pages/table';
import Email from './pages/email';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/text' exact component={Text}/>
        <Route path='/image' component={Image}/>
        <Route path='/video' component={Video}/>
        <Route path='/table' component={Table}/>
        <Route path='/email' component={Email}/>
      </Switch>
    </Router>
  );
}

export default App;
