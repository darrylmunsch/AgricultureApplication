import React, { Component } from 'react'
import SideNav from '../../Components/SideNav/SideNav';
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
                        </CardColumns>
                        </div>
                       <div class="d-flex flex-row justify-content-end">
                           
                        <Card>                       
                            <Card.Body>
                                <Card.Title>About our product...</Card.Title>
                                <Card.Text>
                                    Our stuff is better than the next guys, by alot!~
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        </div>
                        
                        <div class="d-flex flex-row justify-content-end mt-4">
                        <Card>                       
                            <Card.Body>
                                <Card.Title>From our home to yours..</Card.Title>
                                <Card.Text>
                                   Here at Envoc Agriculture Co. We take pride in our product!
                                   
                                 
                                   
                                  
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body>
                                <Jumbotron>
                                   
                            <div class="jumbotron">
                                
                             <h1 class="display-4">Envoc Agri. CO. From our home to yours.!</h1>
                             <p class="lead">Find any fresh fruit your heart desires, and know it comes from a place of care!</p>
                             <hr class="my-4"></hr>
                             <p>Interested in hearing more? Take a look at some of our testimonials...</p>
                            

                             <a class="btn btn-primary btn-lg" role="button">Learn more</a>
                            

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
