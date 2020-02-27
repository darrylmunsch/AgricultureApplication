import React from 'react';

// Components
import SideNav from './Components/HomePage/SideNav/SideNav';
import Carousel_Home from './Components/HomePage/Carousel/Carousel';

// CSS
import './Components/HomePage/HomePage.css';


function App() {
  return (
    <div>
      <SideNav/>
    <div class="carousel_marginLeft" > 
      <Carousel_Home/>
    </div>
    </div>
  );
}

export default App;
