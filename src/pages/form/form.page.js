import React from 'react';

export default class FormPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            username: 'default_username',
            password: ''
        };

        // This binding is necessary to make `this` work in the callback
        this.onInputUsernameChange = this.onInputUsernameChange.bind(this);
        this.onInputPasswordChange = this.onInputPasswordChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputUsernameChange(event) {
        this.setState((prevState, prevProps) => {
            return { username: event.target.value.trim() };
        });
    }

    onInputPasswordChange(event) {
        this.setState((prevState, prevProps) => {
            return { password: event.target.value };
        });
    }

    onFormSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <section className='form-page'>
                <h3>Form page</h3>

                <form onSubmit={this.onFormSubmit}>
                    <div className='fx-u-mb-3'>
                        <label className='fx-label'>Username with trimmed value (no spaces): [{this.state.username}]</label>
                        <input className='fx-input' type="text" 
                            value={this.state.username}
                            onChange={this.onInputUsernameChange} />
                    </div>

                    <div className='fx-u-mb-3'>
                        <label className='fx-label'>Password with minimum lenght value: {this.state.password}</label>
                        <input className='fx-input' type="password" 
                            value={this.state.password}
                            onChange={this.onInputPasswordChange} />
                        <div className='fx-u-color-danger'>
                            {this.state.password.length < 4 ? 'Password must be at least 4 characters' : ''}
                        </div>
                    </div>
                </form>
            </section>
        );
    }
}