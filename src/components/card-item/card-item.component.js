import React from 'react';
import './card-item.component.css';

export default class CardItem extends React.Component {
    render() {
        return (
            <section className='card-item' 
                key={this.props.listItem.id}>
                <img className='card-item__img'
                    src={ this.props.listItem.imgUrl }
                    alt='Post image' />
                <h5>{ this.props.listItem.title }</h5>
                <p>{ this.props.listItem.description }</p>
                <p>URL: https://www.youtube.com/watch?v={ this.props.listItem.id }</p>
            </section>
        );
    }
}