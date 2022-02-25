import React from 'react';

export default class HomePage extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            time: 'Now'
        };
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({time: new Date().toLocaleTimeString('en-US')});
        }, 1000)
    }

    render() {
        return (
            <section className='home-page'>
                <h3>Home page</h3>
                <p>The time is: {this.state.time}</p>
            </section>
        );
    }
}