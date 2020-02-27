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
            <div style={{ width: 200 }} >
            <Toggle icon={<Icon icon="circle"/>} onChange={this.handleToggle} checked={isOpen} />
            <hr />
            <Sidenav
              expanded={isOpen}
              activeKey={this.state.activeKey}
              onSelect={this.handleSelect}
            >
              <Sidenav.Body>
                <Nav>
                    <Nav.Item eventKey="1" icon={<Icon icon="home" />}>
                        Home
                    </Nav.Item>
                    <Nav.Item eventKey="2" icon={<Icon icon="shopping-basket" />}>
                        Baskets
                    </Nav.Item>
                    <Nav.Item eventKey="3" icon = {<Icon icon="order-form" />}>
                        Order Ticket
                    </Nav.Item>
                    <Dropdown 
                        placement="rightStart" 
                        title="Browse Fields" 
                        eventKey="4" 
                        icon={<Icon icon="tree" />}
                    >
                        <Dropdown.Item eventKey="4-1">Blueberries</Dropdown.Item>
                        <Dropdown.Item eventKey="4-2">Blackberries</Dropdown.Item>
                        <Dropdown.Item eventKey="4-3">Potatoes</Dropdown.Item>
                        <Dropdown.Item eventKey="4-4">Corn</Dropdown.Item>
                    </Dropdown>                 
                    <Dropdown
                        placement="rightStart"
                        eventKey="5"
                        title="Advanced"
                        icon={<Icon icon="magic" />}
                    >
                        <Dropdown.Item eventKey="5-1">Geo</Dropdown.Item>
                        <Dropdown.Item eventKey="5-2">Devices</Dropdown.Item>
                        <Dropdown.Item eventKey="5-3">Loyalty</Dropdown.Item>
                        <Dropdown.Item eventKey="5-4">Visit Depth</Dropdown.Item>
                    </Dropdown>
                    <Dropdown 
                        placement="rightStart"
                        eventKey="6"
                        title="Settings"
                        icon={<Icon icon="gear-circle" />}
                    >
                        <Dropdown.Item eventKey="6-1">Applications</Dropdown.Item>
                        <Dropdown.Item eventKey="6-2">Channels</Dropdown.Item>
                        <Dropdown.Item eventKey="6-3">Versions</Dropdown.Item>
                        <Dropdown.Menu eventKey="6-5" title="Custom Action">
                        <Dropdown.Item eventKey="6-5-1">Action Name</Dropdown.Item>
                        <Dropdown.Item eventKey="6-5-2">Action Params</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    </Nav>
                    </Sidenav.Body>
                </Sidenav>
            </div>
        );
    }
}

export default SideNavbar;