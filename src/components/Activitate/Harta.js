import React, { Component } from 'react';
import ClientMarker from '../Data/ClientMarker';

import { Map, GoogleApiWrapper, Polyline, Marker } from 'google-maps-react';



const mapStyles = {
    width: '92%',
    height: '650px',
    marginLeft: '0px'
};




class Harta extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
        };

        this.centerLat = null;
        this.centerLng = null;
        this.onMarkerClick = this.onMarkerClick.bind(this);
        this.onMapClicked = this.onMapClicked.bind(this);



    }





    getTraseu() {

        let dateTraseu = [];
        let istoricTraseu = [];

        dateTraseu = this.props.hartaBord.split('--');
        istoricTraseu = dateTraseu[0].split('#');



        let traseu = [];
        var mapCenter = parseInt(istoricTraseu.length / 2);

        const { google } = this.props;
        const maps = google.maps;


        var loc, position;
        for (var i = 0; i < istoricTraseu.length - 1; i++) {
            loc = istoricTraseu[i].split(',');
            position = new maps.LatLng(loc[0], loc[1]);

            if (i === mapCenter) {
                this.centerLat = loc[0];
                this.centerLng = loc[1];


            }

            traseu.push(position);
        }

        return traseu;

    }

    getClienti() {
        let clienti = [];

        if (this.props.hartaBord.length === 0)
            return clienti;


        let dateTraseu = this.props.hartaBord.split('--');
        let pozitieClienti = dateTraseu[1].split('#');

        var client;

        let clientMarker;
        for (var j = 0; j < pozitieClienti.length; j++) {
            client = pozitieClienti[j].split(',');

            clientMarker = new ClientMarker();
            clientMarker.id = j;
            clientMarker.lat = client[0];
            clientMarker.lon = client[1];
            clientMarker.nume = client[2];

            if (clientMarker.lat.length > 0)
                clienti.push(clientMarker);
        }

        return clienti;
    }


    onMarkerClick(props, marker, e) {
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        })
        console.log('marker' + marker);
    }



    onMapClicked(props) {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    }

    render() {


        let traseuPath = this.getTraseu();
        let clientiPos = this.getClienti();

        let emptyMap = <div></div>

        let dataMap =
            <Map
                google={this.props.google}
                zoom={8}
                style={mapStyles}
                initialCenter={{ lat: this.centerLat, lng: this.centerLng }}
                onClick={this.onMapClicked}
            >
                <Polyline
                    path={traseuPath}
                    options={{
                        geodesic: true,
                        strokeColor: '#FF0000',
                        strokeOpacity: 1.0,
                        strokeWeight: 2,
                    }}
                />
                {clientiPos.map(marker => (
                    <Marker
                        onClick={this.onMarkerClick}
                        name={marker.id}
                        position={{ lat: marker.lat, lng: marker.lon }}
                        key={marker.id}
                        label={{
                            text: marker.nume,
                            fontFamily: "Arial Narrow bold",
                            fontSize: "14px",
                            color: '#424242',
                            backgroundColor: '#6C7AE0'
                        }}

                    >

                    </Marker>
                ))}
            </Map>

        return this.props.hartaBord.length === 0 ? emptyMap : dataMap;
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAgADG_qpXTBiOPvRTXUHAB9GoG8yaZlLM'
})(Harta);