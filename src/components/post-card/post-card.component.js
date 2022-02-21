import React from 'react';
import './post-card.component.css';

export default class PostCard extends React.Component {
    render() {
        return (
            <section className='post-card' key={this.props.post.id}>
                <img className='post-card__img'
                    src={`https://robohash.org/${this.props.post.id}?set=set5&size=150x150`}
                    alt='Post image' />
                <h3>{ this.props.post.title }</h3>
                <h5>{ this.props.post.id }</h5>
            </section>
        );
    }
}