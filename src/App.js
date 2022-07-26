import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LayoutPage from './pages/layout/layout.page';
import HomePage from './pages/home/home.page';
import AboutPage from './pages/about/about.page';
import UserListPage from './pages/user-list/user-list.page';
import GeolocationPage from './pages/geolocation/geolocation.page';
import FormPage from './pages/form/form.page';
import AjaxPage from './pages/ajax/ajax.page';
import NotFoundPage from './pages/not-found/not-found.page';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutPage />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="user-list" element={<UserListPage />} />
            <Route path="geolocation" element={<GeolocationPage />} />
            <Route path="form" element={<FormPage />} />
            <Route path="ajax" element={<AjaxPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
