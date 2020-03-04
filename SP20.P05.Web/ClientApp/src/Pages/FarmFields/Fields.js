import React, { Component } from 'react';
import {
    Icon,
    Drawer,
    Button
} from 'rsuite';

// Components
import FieldsNav from './FieldsNav';

// Style sheets
import 'bootstrap/dist/css/bootstrap.min.css';
import './Fields.css';



export class Fields extends Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }



    render() {
        return (
            <div>
                <FieldsNav/>
                <div >
                    <div className={"p1"}>
                        <div className={"overlay"} > </div>
                        <div className={"text_background"}>
                            <div className={"p1_text"}>
                                Check out our blueberry farm and buy tickets now!
                            </div>
                            <div>
                                <div className={"p1_icons"}>
                                    <button className={"btn"}>
                                        <Icon className={"icon_style"}  icon={"share"} />
                                    </button>
                                    &nbsp;
                                    <button className={"btn"}>
                                        <Icon className={"icon_style"} icon={"ticket"}/>
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className={"p2"}>
                        <div className={"overlay"} > </div>
                        <div className={"text_background"}>
                            <div className={"p1_text"}>
                                Check out our strawberry farm and buy tickets now!
                            </div>
                            <div>
                                <div className={"p1_icons"}>
                                    <button className={"btn"}>
                                        <Icon className={"icon_style"}  icon={"share"} />
                                    </button>
                                    &nbsp;
                                    <button className={"btn"}>
                                        <Icon className={"icon_style"} icon={"ticket"}/>
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className={"p3"}>
                        <div className={"overlay"} > </div>
                        <div className={"text_background"}>
                            <div className={"p1_text"}>
                                Check out our blackberry farm and buy tickets now!
                            </div>
                            <div>
                                <div className={"p1_icons"}>
                                    <button className={"btn"}>
                                        <Icon className={"icon_style"}  icon={"share"} />
                                    </button>
                                    &nbsp;
                                    <button className={"btn"}>
                                        <Icon className={"icon_style"} icon={"ticket"}/>
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Fields
