import React from 'react';

export default class GeolocationPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            latitude: null,
            longitude: null,
            accuracy: null,
            errorMessage: ''
        };
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log(position);
                this.setState({latitude: position.coords.latitude});
                this.setState({longitude: position.coords.longitude});
                this.setState({accuracy: position.coords.accuracy});
            },
            (error) => {
                console.log(error);
                this.setState({errorMessage: error.message});
            }
        );
    }

    render() {
        if (!this.state.errorMessage && !this.state.latitude) {
            return (
                <h3>Loading...</h3>
            );
        }

        if (this.state.errorMessage) {
            return (
                <h3>Error: {this.state.errorMessage}</h3>
            );
        }

        if (this.state.latitude || this.state.longitude) {
            return (
                <ul>
                    <li>Latitude: {this.state.latitude}</li>
                    <li>Longitude: {this.state.longitude}</li>
                    <li>Accuracy: More or less {this.state.accuracy} meters.</li>
                </ul>
            );
        }
    }
  }