import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, withScriptjs } from "react-google-maps";



const {
    MarkerWithLabel
} = require("react-google-maps/lib/components/addons/MarkerWithLabel");


class Harta extends Component {

  

    getMasiniLoc() {

        const labelSize = { width: 200 };
        const labelPadding = 2;

        if (this.props.masiniData === '')
            return;

        let locations = this.props.masiniData.split('#');

        let places = locations.map(locations => {
            let onePlace = locations.split(',');
            return (
                <MarkerWithLabel
                    labelStyle={{
                        textAlign: "center",
                        backgroundColor: "#f9fbe7",
                        fontSize: "12px",
                        padding: labelPadding + "px",
                        opacity: 0.85,
                        borderStyle : "solid",
                        borderWidth : "0.5px",
                        borderColor : "#bda8a7"
                    }}
                    labelClass="map-label"
                    labelAnchor={{ x: labelSize.width / 3.5 + labelPadding, y: 120 }}
                    key={onePlace[0]}
                    position={{ lat: parseFloat(onePlace[0]), lng: parseFloat(onePlace[1]) }}
                >
                    <span><b>{onePlace[2]}</b><br/>{onePlace[6]}<br />{onePlace[4]}<br />{onePlace[3] + ' km/h'}<br />{onePlace[7]}</span>
                </MarkerWithLabel>
            )
        });

        return places;
    }

    render() {

        return (
            <GoogleMap defaultZoom={8} center={{ lat: this.props.centerLat, lng: this.props.centerLon }}>
                {this.getMasiniLoc()}
            </GoogleMap>
        )
    }

}

export default withScriptjs(withGoogleMap(Harta));

