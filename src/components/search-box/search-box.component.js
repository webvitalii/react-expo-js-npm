import React from 'react';
import './search-box.component.css';

export default class SearchBox extends React.Component {
    render() {
        return (
            <section className='search-box'>
                <input type='search'
                    className='search-box__input'
                    onChange={this.props.handleChange} />
            </section>
        );
    }
}