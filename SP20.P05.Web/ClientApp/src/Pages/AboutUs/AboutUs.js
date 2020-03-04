import React, { Component } from 'react'
import SideNav from './AboutUsNav';
import Card from 'react-bootstrap/Card';
import CardColumns from "react-bootstrap/CardColumns";
import Jumbotron from 'react-bootstrap/Jumbotron';


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
                        <div class="d-flex flex-row justify-content-end mt-4">
                        <Card>                       
                            <Card.Body>
                                <Card.Title>From our home to yours..</Card.Title>
                                <img src={require("../../Resources/farmer.jpg")} class="img-fluid" alt="Responsive image"></img>
                                <Card.Text>
                                   Here at Envoc Agriculture Co. We take pride in our product!
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body>
                                <Jumbotron>                                   
                            <div class="jumbotron">                                
                             <h1 class="display-4">Envoc Agri. CO. From our home to yours!</h1>
                             <p class="lead">Find any fresh fruit your heart desires, and know it comes from a place of care!</p>
                             <hr class="my-4"></hr>
                             <p>Interested in hearing more? Take a look at some of our testimonials...</p>                                                    
                             <a></a>                            
                            </div>
                             </Jumbotron>
                            </Card.Body>
                        </Card>
                        </div>
                        </div>     
        )
    }
}

export default AboutUs