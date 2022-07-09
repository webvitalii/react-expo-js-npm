import React from 'react';

export default class FormPage extends React.Component {
    state = { 
        username: 'default_username',
        password: ''
    };

    render() {
        return (
            <section className='form-page'>
                <h3>Form page</h3>

                <form>
                    <div className='fx-u-mb-3'>
                        <label className='fx-label'>Username with trimmed value (no spaces): [{this.state.username}]</label>
                        <input className='fx-input' type="text" value={this.state.username}
                            onChange={(evt) => this.setState({ username: evt.target.value.trim() }) } />
                    </div>

                    <div className='fx-u-mb-3'>
                        <label className='fx-label'>Password with minimum lenght value: {this.state.password}</label>
                        <input className='fx-input' type="password" value={this.state.password}
                            onChange={(evt) => this.setState({ password: evt.target.value }) } />
                        <div className='fx-u-color-danger'>{this.state.password.length < 4 ? 'Password must be at least 4 characters' : ''}</div>
                    </div>
                </form>
            </section>
        );
    }
}