import { Component } from 'react';


class HartaHelper extends Component {

    static getMapCenter(mapData) {

        let centerLat = '0';
        let centerLon = '0';
        let mapCenter = 0;

        let locations = mapData.split('#');

        if (locations.length > 1)
            mapCenter = parseInt(locations.length / 2);

        let centerCoords = locations[mapCenter].split(',');
        centerLat = centerCoords[0];
        centerLon = centerCoords[1];

        return centerLat + '#' + centerLon;
    }
}

export default HartaHelper;