import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, withScriptjs, Polyline } from "react-google-maps";


const {
    MarkerWithLabel
} = require("react-google-maps/lib/components/addons/MarkerWithLabel");

class HartaNoua extends Component {


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


    getClienti() {

        const labelSize = { width: 200 };
        const labelPadding = 2;

        if (this.props.clienti === '')
            return;


        let dateTraseu = this.props.clienti.split('--');
        let pozitieClienti = dateTraseu[1].split('#');

        let places = pozitieClienti.map((pozitieClienti, i) => {
            let onePlace = pozitieClienti.split(',');

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
                    labelAnchor={{ x: labelSize.width / 3.5 + labelPadding, y: 60 }}
                    key={i}
                    position={{ lat: parseFloat(onePlace[0]), lng: parseFloat(onePlace[1]) }}

                >
                    <span>{onePlace[2]}</span>
                </MarkerWithLabel>
            )
        });



        return places;
    }



    render() {

        let traseuPath = this.getTraseu();
    

        let dataMap =
            <GoogleMap defaultZoom={8} center={{ lat: this.props.centerLat, lng: this.props.centerLon }}>
                <Polyline
                    geodesic={true}
                    strokeColor={'#FF0000'}
                    strokeOpacity={1.0}
                    strokeWeight={2}
                    path={traseuPath}
                />
                {this.getClienti()}
            </GoogleMap>



        return dataMap;

    }

}

export default withScriptjs(withGoogleMap(HartaNoua));