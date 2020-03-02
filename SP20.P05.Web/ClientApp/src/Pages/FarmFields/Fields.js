import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'

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
                <div className={"content"}>
                    <div >
                        <Card >
                            <Card.Img className={"cardStyle"} src={require("../../Resources/pickinBlues.jpg")}/>
                            <Card.Body>
                                <Card.Text>
                                    Check out our blueberry farms!
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div >
                        <Card >
                            <Card.Img className={"cardStyle"} src={require("../../Resources/pickinBlues.jpg")}/>
                            <Card.Body>
                                <Card.Text>
                                    Check out our blueberry farms!
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

                </div>
            </div>
        )
    }
}

export default Fields
