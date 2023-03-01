import React from 'react';
import Superhero from '../../components/superhero/superhero.component';

export default class SuperheroesPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            heroList: ['Spider-Man', 'Batman', 'Superman']
        };
    }

    renderContent() {
        return this.state.heroList.map((hero, index) => {
            return <Superhero name={hero} key={index}/>
        });
    }

    render() {
        return (
            <div className='superheroes-page'>
                { this.renderContent() }
            </div>
        );
    }
}