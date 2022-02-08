import React from 'react';
import './user-card.component.css';

export default class UserCard extends React.Component {
    render() {
        return (
            <section className='user-card' key={this.props.user.id}>
                <img className='user-card__img'
                    src={`https://robohash.org/${this.props.user.id}?set=set5&size=150x150`}
                    alt='User avatar' />
                <h3>{ this.props.user.name }</h3>
                <h5>{ this.props.user.email }</h5>
            </section>
        );
    }
}