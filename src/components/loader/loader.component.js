import React from 'react';
import './loader.component.css';

export default class Loader extends React.Component {
    render() {
        return (
            <section className='loading'>
                <h3>{this.props.text}</h3>
            </section>
        );
    }
}

Loader.defaultProps = {
    text: 'Loading...'
};