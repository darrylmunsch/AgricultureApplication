import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import CardColumns from "react-bootstrap/CardColumns";

// Components
import FieldsNav from './FieldsNav';

// Style sheets
import 'bootstrap/dist/css/bootstrap.min.css';
import './Fields.css';



export class Fields extends Component {
    render() {
        return (
            <div>
                <FieldsNav/>
                <div className={"cardcolumns"}>
                    <CardColumns>
                        <Card>
                            <Card.Img variant={"top"} src={require("../../Resources/pickinBlues.jpg")}/>
                            <Card.Body>
                                <Card.Title>Blueberry Field</Card.Title>
                                <Card.Text>
                                    Our blueberry fields are all pesticide free and are available to be picked from May to July.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant={"top"} src={require("../../Resources/taters.jpg")}/>
                            <Card.Body>
                                <Card.Title>Potato Field</Card.Title>
                                <Card.Text>
                                    Some of the largest potatoes you've ever seen. Best picked around fall or early winter.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant={"top"} src={require("../../Resources/cornpickin.jpg")}/>
                            <Card.Body>
                                <Card.Title>COrN</Card.Title>
                                <Card.Text>
                                    corn corn corn corn corn corn corn corn corn corn
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardColumns>
                </div>
                <div className={"cardcolumns"}>
                    <CardColumns>
                        <Card >
                            <Card.Img variant={"top"} src={require("../../Resources/blackberrydeath.jpg")}/>
                            <Card.Body>
                                <Card.Title>death</Card.Title>
                                <Card.Text>
                                    bloody death
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardColumns>
                </div>

            </div>
        )
    }
}

export default Fields
