import React from 'react';
import './user-card.component.css';

export default class UserCard extends React.Component {
    render() {
        return (
            <section className='user-card' key={this.props.user.id}>
                <img className='user-card__img'
                     // https://source.unsplash.com/600x400/?computer
                    // src={`https://robohash.org/${this.props.user.id}?set=set5&size=150x150`}
                    src={`https://source.unsplash.com/random/300x300/?person,man,woman`} />
                <div className='user-card__body'>
                    <h3>{ this.props.user.name }</h3>
                    <p>{ this.props.user.phone }</p>
                    <p>{ this.props.user.email }</p>
                </div>
            </section>
        );
    }
}
