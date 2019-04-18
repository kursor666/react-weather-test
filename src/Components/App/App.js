import React, {Component} from 'react';
import './App.css';
import "bootswatch/dist/lux/bootstrap.css";
import {Col, Container, Row} from "react-bootstrap";
import {WeatherDisplay} from "../WeatherDisplay/WeatherDisplay";
import {NavbarB} from "../Navbar/NavbarB";
import {CitySelector} from "../CitySelector/CitySelector"

const PLACES = [
    {name: "NSK", zip: "630000"},
    {name: "Железногорск-Илимский", zip: "665653"},
    {name: "MSK", zip: "101000"},
    {name: "Honolulu", zip: "96803"}
];

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activePlace: 0
        };
    }

    changeZipAction = (placeId)=>{
        this.setState({activePlace: placeId});
    };

    render() {
        const placeId = this.state.activePlace;
        return (
            <div className="App">
                <NavbarB/>
                <div className="mt-4">
                    <Container>
                        <Row>
                            <Col md={4} sm={4}>
                                <CitySelector changeZip={this.changeZipAction} places={PLACES} placeId={placeId}/>
                            </Col>
                            <Col md={8} sm={8}>
                                <WeatherDisplay key={placeId} zip={PLACES[placeId].zip}/>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}

export default App;
