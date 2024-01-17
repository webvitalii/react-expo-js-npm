import React from 'react';

import UserList from '../../components/user-list/user-list.component';
import SearchBox from '../../components/search-box/search-box.component';

export default class UserListPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userList: [],
            searchString: ''
        };

        // This binding is necessary to make `this` work in the callback
        this.onSearchChange = this.onSearchChange.bind(this);
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((data) => this.setState((prevState, prevProps) => {
          return { userList: data }; 
        }));
    }

    render() {
        const userListCopy = this.state.userList;
        const searchStringCopy = this.state.searchString;
        const userListFiltered = userListCopy.filter(user => {
          return user.name.toLowerCase().includes(searchStringCopy.toLocaleLowerCase());
        });


        return (
            <section className='user-list-page'>
                <h3>User list page</h3>

                <SearchBox handleChange={this.onSearchChange} />
                <UserList users={userListFiltered} />
            </section>
        );
    }

    onSearchChange(event) {
        this.setState((prevState, prevProps) => {
            console.log('this.state=', this.state);
            console.log('prevState=', prevState);
            // use prevState instead of this.state to be safe with up-to-date
            return {searchString: event.target.value};
        }, () => console.log('callback after state update: this.state=', this.state));
    }

  }
