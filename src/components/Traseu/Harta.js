import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Polyline, withScriptjs } from "react-google-maps";
import iconStop from '../../images/stop-icon.png';

const {
    MarkerWithLabel
} = require("react-google-maps/lib/components/addons/MarkerWithLabel");

class Harta extends Component {


    getTraseu() {
        let traseu = [];
        let traseuData = this.props.traseu.split('#');

        var loc, position;
        for (var i = 0; i < traseuData.length - 1; i++) {
            loc = traseuData[i].split(',');
            if (loc[0].length > 0) {
                position = { lat: parseFloat(loc[0]), lng: parseFloat(loc[1]) };
                traseu.push(position);
            }
        }

        return traseu;
    }

    getOpriri() {

        const labelSize = { width: 200 };
        const labelPadding = 2;

        if (this.props.opriri === '')
            return;

        let locations = this.props.opriri.split('!');

        let places = locations.map((locations,i) => {
            let onePlace = locations.split('-');
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
                    labelAnchor={{ x: labelSize.width / 4 + labelPadding, y: 60 }}
                    key={i}
                    position={{ lat: parseFloat(onePlace[2]), lng: parseFloat(onePlace[3]) }}
                    icon={{
                        url: iconStop
                      }}
                >
                    <span>{onePlace[0]}<br />{onePlace[1]}</span>
                </MarkerWithLabel>
            )
        });

        return places;
    }


    render() {
        let traseuPath = this.getTraseu();
        
        return (
            <GoogleMap defaultZoom={8} center={{ lat: this.props.centerLat, lng: this.props.centerLon }}>
                <Polyline
                    geodesic= {true}
                    strokeColor= {'#FF0000'}
                    strokeOpacity= {1.0}
                    strokeWeight= {2}
                    path={traseuPath}
                />
                {this.getOpriri()}
            </GoogleMap>
        )
    }
}

export default withScriptjs(withGoogleMap(Harta));