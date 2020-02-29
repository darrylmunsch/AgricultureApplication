import React, { Component } from 'react'
import SideNav from '../../Components/SideNav/SideNav';
import Card from 'react-bootstrap/Card';
import CardColumns from "react-bootstrap/CardColumns";

// Style sheets
import 'bootstrap/dist/css/bootstrap.min.css';


import './AboutUs.css';


export class AboutUs extends Component {
    render() {
        return (
            <div>
              <SideNav />
              <div className="background-img">
                    <img src={require("../../Resources/orchard.jpg")}  />
                    </div>
              <div className={"cardcolumns"}>
                    <CardColumns>
                        <Card>                       
                            <Card.Body>
                                <Card.Title>About our farms...</Card.Title>
                                <Card.Text>
                                    Our farms are really nice and have nice stuff!
                                </Card.Text>
                            </Card.Body>
                        </Card>
                       
                        <Card>                       
                            <Card.Body>
                                <Card.Title>About our product...</Card.Title>
                                <Card.Text>
                                    Our stuff is better than the next guys, by alot!~
                                </Card.Text>
                            </Card.Body>
                        </Card>
  
                        
                        </CardColumns>

                    </div>
                    
                </div>

        )
    }
}

/*Code from pure HTML for reference
/*                
                <div className="background-img">
                    <img src={require("../../Resources/orchard.jpg")}  />
                <h2><span>Our farms are closest to home...</span></h2>
                
                 <h3><span>Info about farms</span></h3>
                 <h4><span>Some more info about the place</span></h4>
                </div>                   
                 
</div>*/

export default AboutUs
