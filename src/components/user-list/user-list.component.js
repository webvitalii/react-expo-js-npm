import React from 'react';
import './user-list.component.css';
import UserCard from '../user-card/user-card.component';

export default class UserList extends React.Component {
    render() {
        // console.log(this.props);
        // console.log(this.props.children);
        return (
            <section className='user-list'>
                {this.props.users.map(user => (
                    <UserCard key={user.id} user={user}></UserCard>
                ))}
            </section>
        );
    }
  }