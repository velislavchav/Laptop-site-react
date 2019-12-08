import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import './about.css';

class MapContainer extends Component {
    render() {
        const mapStyles = {
            marginTop: '2%',
            width: '100%',
            height: '100%',
        };
        return (
            <Map
                google={this.props.google}
                zoom={19}
                style={mapStyles}
                initialCenter={{ lat: 41.57831, lng: 24.696515 }}
            >
                <Marker position={{ lat: 41.57831, lng: 24.696515 }} />
            </Map>

        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAwtrIljGqNj2Sly3Ggo3Qb1EFRXkadDSg'
})(MapContainer);