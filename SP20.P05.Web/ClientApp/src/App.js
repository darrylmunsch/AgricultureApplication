import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Components

import HomePage from './Components/Layout/Pages/HomePage';
import Fields from './Components/Layout/Pages/Fields';
import AboutUs from './Components/Layout/Pages/AboutUs';
import Tickets from './Components/Layout/Pages/Tickets';

// CSS
import './Components/Layout/Pages/HomePage.css';

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
