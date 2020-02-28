import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Components
import SideNav from './Components/Layout/SideNav/SideNav';
import HomePage from './Components/Layout/HomePage';
import Fields from './Components/Layout/Fields';
import AboutUs from './Components/Layout/AboutUs';
import Tickets from './Components/Layout/Tickets';

// CSS
import './Components/Layout/HomePage.css';

function App() {
  return (
    <BrowserRouter>
      <SideNav/>
      <Switch>
        <Route path='/' component={HomePage} />
        <Route path='/fields' component={Fields} />
        <Route path='/about-us' component={AboutUs} />
        <Route path='/tickets' component={Tickets} />
      </Switch>`
    </BrowserRouter>
  );
}

export default App;
