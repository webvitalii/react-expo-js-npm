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
        this.onChangeSearch = this.onChangeSearch.bind(this);
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState((prevState, prevProps) => { 
          return { userList: users }; 
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

                <SearchBox handleChange={this.onChangeSearch} />
                <UserList users={userListFiltered} />
            </section>
        );
    }

    onChangeSearch(evt) {
        this.setState((prevState, prevProps) => {
          console.log('onChangeSearch this.state=', this.state);
          console.log('onChangeSearch prevState=', prevState);
          // use prevState instead of this.state to be safe
          return {searchString: evt.target.value};
        }, () => console.log('onChangeSearch callback this.state=', this.state)); 
    }

  }