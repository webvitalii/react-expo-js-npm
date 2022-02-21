import React from 'react';
import { Outlet, Link } from 'react-router-dom';

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
                    </ul>
                </nav>

                <Outlet />
            </section>
        );
    }
  }