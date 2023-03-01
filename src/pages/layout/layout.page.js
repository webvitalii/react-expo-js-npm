import React from 'react';
import { Outlet, Link } from 'react-router-dom';

import './layout.page.css';

export default class LayoutPage extends React.Component {
    render() {
        return (
            <section className='layout-page'>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/user-list">User list</Link>
                        </li>
                        <li>
                            <Link to="/geolocation">Geolocation</Link>
                        </li>
                        <li>
                            <Link to="/form">Form</Link>
                        </li>
                        <li>
                            <Link to="/ajax">Ajax</Link>
                        </li>
                        <li>
                            <Link to="/youtube">Youtube</Link>
                        </li>
                        <li>
                            <Link to="/wikipedia">Wikipedia</Link>
                        </li>
                        <li>
                            <Link to="/superheroes">Superheroes</Link>
                        </li>
                    </ul>
                </nav>

                <Outlet />
            </section>
        );
    }
  }
