import React from 'react';

export default class FormPage extends React.Component {
    state = { term: 'DEFAULT VALUE' };

    render() {
        return (
            <section className='form-page'>
                <h3>Form page</h3>

                <form>
                    <label className='fx-label'>Input with uppercased value: {this.state.term}</label>
                    <input className='fx-input' type="text" value={this.state.term}
                        onChange={(evt) => this.setState({ term: evt.target.value.toUpperCase() }) } />
                </form>
            </section>
        );
    }
}