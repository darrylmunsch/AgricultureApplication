import React, { Component } from 'react';
import {
    Sidenav,
    Nav,
    Icon,
    Dropdown,
    Toggle
} from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import 'rsuite/lib/styles/themes/dark/index.less';
import './SideNav.js';

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
                    <Sidenav
                        expanded={isOpen}
                        activeKey={this.state.activeKey}
                        onSelect={this.handleSelect}
                    >
                        <Sidenav.Body>
                            <Nav>
                                <Nav.Item eventKey="1" icon={<Icon icon="home" />} >
                                    Home
                                </Nav.Item>
                                <Nav.Item eventKey="2" icon={<Icon icon="tree" />}>
                                    Browse Fields
                                </Nav.Item>
                                <Nav.Item eventKey="3" icon={<Icon icon="shopping-basket" />}>
                                    Baskets
                                </Nav.Item>
                                <Nav.Item eventKey="4" icon={<Icon icon="order-form" />}>
                                    Order Ticket
                                </Nav.Item>
                                <Nav.Item eventKey="5" icon={<Icon icon="info"/>}>
                                    About Us
                                </Nav.Item>
                                <Dropdown
                                    placement="rightStart"
                                    eventKey="6"
                                    title="Settings"
                                    icon={<Icon icon="gear-circle" />}
                                >
                                    <Dropdown.Item eventKey="6-1">Dark Mode</Dropdown.Item>
                                    <Dropdown.Item eventKey="6-2">Check Active Farms</Dropdown.Item>
                                    <Dropdown.Item eventKey="6-3">Search Farms by product</Dropdown.Item>
                                    <Dropdown.Menu eventKey="6-5" title="Dev">
                                        <Dropdown.Item eventKey="6-5-1">Dev Portal</Dropdown.Item>
                                        <Dropdown.Item eventKey="6-5-2">Dev Info</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Nav>
                        </Sidenav.Body>
                    </Sidenav>
                </div>
            </div>
        );
    }
}

export default SideNavbar;