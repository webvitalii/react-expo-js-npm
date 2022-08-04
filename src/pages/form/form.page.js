import React from 'react';

export default class FormPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: 'default_username',
            password: '',
            textarea: '',
            select: 'coconut'
        };

        // This binding is necessary to make `this` work in the callback
        this.onInputUsernameChange = this.onInputUsernameChange.bind(this);
        this.onInputPasswordChange = this.onInputPasswordChange.bind(this);
        this.onInputTextareaChange = this.onInputTextareaChange.bind(this);
        this.onInputSelectChange = this.onInputSelectChange.bind(this);
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

    onInputTextareaChange(event) {
        this.setState((prevState, prevProps) => {
            return { textarea: event.target.value };
        });
    }

    onInputSelectChange(event) {
        this.setState((prevState, prevProps) => {
            return { select: event.target.value };
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
                        <label className='fx-label'>Password with minimum lenght value: [{this.state.password}]</label>
                        <input className='fx-input' type="password" 
                            value={this.state.password}
                            onChange={this.onInputPasswordChange} />
                        <div className='fx-u-color-danger'>
                            {this.state.password.length < 4 ? 'Password must be at least 4 characters' : ''}
                        </div>
                    </div>

                    <div className='fx-u-mb-3'>
                        <label className='fx-label'>Textarea:</label>
                        <textarea className='fx-textarea'
                            value={this.state.textarea}
                            onChange={this.onInputTextareaChange} />
                    </div>

                    <div className='fx-u-mb-3'>
                        <label className='fx-label'>Select: [{this.state.select}]</label>
                        <select className='fx-select'
                            value={this.state.select}
                            onChange={this.onInputSelectChange}>
                            <option value="pineapple">Pineapple</option>
                            <option value="orange">Orange</option>
                            <option value="coconut">Coconut</option>
                            <option value="mango">Mango</option>
                        </select>
                    </div>
                    

                </form>
            </section>
        );
    }
}