import React, { Component } from 'react'
import SideNav from '../../Components/SideNav/SideNav';


import './AboutUs.css';


export class AboutUs extends Component {
    render() {
        return (
            <div>
              <SideNav />
               
                <div className="background-img">
                    <img src={require("../../Resources/orchard.jpg")}  />
                <h2><span>Our farms are closest to home...</span></h2>
                
                 <h3><span>Info about farms</span></h3>
                 <h4><span>Some more info about the place</span></h4>
                </div>                   
                
            </div>
        )
    }
}

export default AboutUs
