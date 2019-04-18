import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.css";
import {Nav} from "react-bootstrap";

export class CitySelector extends Component {
    render() {
        const placeId = this.props.placeId;
        return (
            <div>
                <h3>Select a city</h3>
                <Nav
                    className="flex-column"
                    variant="pills"
                    activeKey={placeId}
                    onSelect={index => {
                        this.props.changeZip(index)
                    }}>
                    {this.props.places.map((value, index) => (
                        <Nav.Link key={index} eventKey={index}>{value.name}</Nav.Link>
                    ))}
                </Nav>
            </div>
        );
    }
}