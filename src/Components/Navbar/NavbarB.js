import "bootstrap/dist/css/bootstrap.css";

import React, {PureComponent} from 'react';
import {Navbar} from "react-bootstrap";

export class NavbarB extends PureComponent {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">React Huyact Weather App</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                </Navbar.Collapse>
            </Navbar>
        );
    }
}