import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, withScriptjs } from "react-google-maps";
import { Marker, InfoWindow } from "react-google-maps";
import truckIcon from '../../images/green_truck.png';



class Harta extends Component {

    constructor(props) {
        super(props);

        this.state = {
            infoIndex: -1
        }

    }


    handleToggleOpen = (index) => {

        this.setState({
            infoIndex: index
        });

    }

    handleToggleClose = () => {
        this.setState({
            infoIndex: -1
        });

    }


    getMasiniLoc() {

        if (this.props.masiniData === '')
            return;

        let locations = this.props.masiniData.split('#');

        let places = locations.map((locations, index) => {
            let onePlace = locations.split(',');
            return (

                <Marker
                    key={onePlace[0]}
                    position={{ lat: parseFloat(onePlace[0]), lng: parseFloat(onePlace[1]) }}
                    onClick={() => this.handleToggleOpen(index)}
                    icon={{
                        url: truckIcon
                    }}
                >
                    {
                        (this.state.infoIndex === index) &&
                        <InfoWindow onCloseClick={() => this.handleToggleClose()}>
                            <span><b>{onePlace[2]}</b><br />{onePlace[6]}<br />{onePlace[4]}<br />{onePlace[3] + ' km/h'}<br />{onePlace[7]}</span>
                        </InfoWindow>
                    }
                </Marker>


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

