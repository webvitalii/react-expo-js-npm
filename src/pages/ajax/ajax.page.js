import React from 'react';
import axios from 'axios';

export default class AjaxPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fetchError: null,
            fetchIsLoaded: false,
            fetchUserList: [],
            axiosError: null,
            axiosIsLoaded: false,
            axiosUserList: []
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then(
          (data) => {
            this.setState({
                fetchIsLoaded: true,
                fetchUserList: Array.isArray(data) ? data : []
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
                fetchIsLoaded: true,
                fetchError: error
            });
          }
        );

        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(
          (data) => {
            this.setState({
                axiosIsLoaded: true,
                axiosUserList: Array.isArray(data.data) ? data.data : []
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
                axiosIsLoaded: true,
                axiosError: error
            });
          }
        );
    }

    fetchRender() {
        if (this.state.fetchError) {
            return <div>Error: {this.state.fetchError.message}</div>;
        } else if (!this.state.fetchIsLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <ul>
                {this.state.fetchUserList?.map((user) => (
                    <li key={user.id}>
                    {user.name}
                    </li>
                ))}
                </ul>
            );
        }
    }

    axiosRender() {
        if (this.state.axiosError) {
            return <div>Error: {this.state.axiosError.message}</div>;
        } else if (!this.state.axiosIsLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <ul>
                {this.state.axiosUserList?.map((user) => (
                    <li key={user.id}>
                    {user.name}
                    </li>
                ))}
                </ul>
            );
        }
    }

    render() {
        return (
            <section className='user-list-page'>
                <h3>User list page</h3>

                <h5>AJAX request using fetch()</h5>
                {this.fetchRender()}

                <h5>AJAX request using axios</h5>
                {this.axiosRender()}
            </section>
        );
    }
}