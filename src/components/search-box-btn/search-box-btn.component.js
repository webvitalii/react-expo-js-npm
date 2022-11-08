import React from 'react';
import './search-box-btn.component.css';

export default class SearchBoxBtn extends React.Component {
    constructor(props) {
        super(props);
        this.state = { searchTerm: '' };

        // This binding is necessary to make `this` work in the callback
        this.onSearchTermChange = this.onSearchTermChange.bind(this);
        this.onBtnClick = this.onBtnClick.bind(this);
    }

    onSearchTermChange(event) {
        this.setState({ searchTerm: event.target.value.trim() });
    }

    onBtnClick() {
        this.props.handleClick(this.state.searchTerm);
    }

    render() {
        return (
            <section className='search-box'>
                <input type='search'
                    className='search-box__input'
                    value={this.state.searchTerm}
                    onChange={this.onSearchTermChange} />
                <button className='search-box__input' 
                    onClick={this.onBtnClick}>Submit</button>
            </section>
        );
    }
}