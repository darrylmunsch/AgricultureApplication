import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {
    Sidenav,
    Nav,
    Icon,
    Dropdown
} from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import './SideNav.css'

class LoginNav extends Component {
    constructor() {
        super();
        this.state = {
            isOpen: false,
            activeKey: '1'
        };
        this.handleToggle = this.handleToggle.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleToggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    handleSelect(eventKey) {
        this.setState({
            activeKey: eventKey
        });
    }

    render() {
        const { isOpen } = this.state;

        return (
            <div style={{ width: 200 }}>
                <div >
                    <Sidenav id="content_window"
                             expanded={isOpen}
                             activeKey={this.state.activeKey}
                             onSelect={this.handleSelect}
                    >
                        <Sidenav.Body id="flex-container">
                            <Nav>
                            <Link to ='/'>
                                    <Nav.Item id="sidebar_iconGreen" eventKey="1" icon={<Icon icon="home" />}>
                                        Home
                                    </Nav.Item>
                                </Link>

                                <Link to ='/fields'>
                                    <Nav.Item id="sidebar_iconGreen" eventKey="2" icon={<Icon icon="tree" />} >
                                        Browse Fields
                                    </Nav.Item>
                                </Link>
                                <Link to ='/Baskets'>
                                <Nav.Item id="sidebar_iconGreen" eventKey="3" icon={<Icon icon="shopping-basket" />}>
                                    Baskets
                                </Nav.Item>
                                </Link>

                                <Link to = '/Tickets'>
                                <Nav.Item id="sidebar_iconGreen" eventKey="4" icon={<Icon icon="order-form" />} >
                                    Order Ticket
                                </Nav.Item>
                                </Link>
                               <Link to ='/Login'>
                                <Nav.Item id="sidebar_iconGreen" eventKey="6" icon= {<Icon icon="user-circle-o"/>}>
                                    Login/Register
                                </Nav.Item>
                                </Link>
                            </Nav>
                        </Sidenav.Body>
                    </Sidenav>
                </div>
            </div>
        );
    }
}

export default LoginNav;