import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Components
import HomePage from './Pages/HomePage/HomePage';
import Fields from './Pages/FarmFields/Fields';
import AboutUs from './Pages/AboutUs/AboutUs';
import Tickets from './Pages/Tickets/Tickets';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';

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
        <Route exact path={'/login'} component={Login} />
        <Route exact path={'/register'} component={Register} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
