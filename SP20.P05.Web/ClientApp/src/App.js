import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Components
import HomePage from './Pages/HomePage/HomePage';
import Fields from './Pages/FarmFields/Fields';
import AboutUs from './Pages/AboutUs/AboutUs';
import Tickets from './Pages/Tickets/Tickets';

// CSS
import './Pages/HomePage/HomePage.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/fields' component={Fields} />
        <Route exact path='/about-us' component={AboutUs} />
        <Route exact path='/tickets' component={Tickets} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
