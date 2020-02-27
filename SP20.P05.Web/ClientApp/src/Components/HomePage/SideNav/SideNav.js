import React, { Component } from 'react';
import {
    Sidenav,
    Nav,
    Icon,
    Dropdown
} from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import './SideNav.css'

class SideNavbar extends Component {
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
                                <Nav.Item id="sidebar_iconWhite" eventKey="1" icon={<Icon icon="home" />} >
                                    Home
                                </Nav.Item>
                                <Nav.Item id="sidebar_iconWhite" eventKey="2" icon={<Icon icon="tree" />}>
                                    Browse Fields
                                </Nav.Item>
                                <Nav.Item id="sidebar_iconWhite" eventKey="3" icon={<Icon icon="shopping-basket" />}>
                                    Baskets
                                </Nav.Item>
                                <Nav.Item id="sidebar_iconWhite" eventKey="4" icon={<Icon icon="order-form" />}>
                                    Order Ticket
                                </Nav.Item>
                                <Nav.Item id="sidebar_iconWhite" eventKey="5" icon={<Icon icon="info"/>}>
                                    About Us
                                </Nav.Item>

                            </Nav>
                        </Sidenav.Body>
                    </Sidenav>
                </div>
            </div>
        );
    }
}

export default SideNavbar;