import React, {Component} from 'react';
import {WeatherDisplay} from '../WeatherDisplay/WeatherDisplay';
import logo from '../../logo.svg';
import './App.css';

const PLACES = [
    {name: "Palo Alto", zip: "94303"},
    {name: "San Jose", zip: "94088"},
    {name: "Santa Cruz", zip: "95062"},
    {name: "Honolulu", zip: "96803"}
];

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activePlace: 0
        };
    }

    render() {
        const placeId = this.state.activePlace;
        return (
            <div className="App">
                {PLACES.map((value, index) => (
                    <button
                        key={index}
                        onClick={() => this.setState({activePlace:index})}>
                        {value.name}
                    </button>
                ))}
                <WeatherDisplay
                    zip={PLACES[placeId].zip}
                    key={placeId}
                    />
            </div>
        );
    }
}

export default App;
