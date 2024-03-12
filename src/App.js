import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import LayoutPage from "./pages/layout/LayoutPage";
import HomePage from "./pages/home/HomePage";
import CounterPage from "./pages/counter/CounterPage";
import CounterReducerPage from "./pages/counterReducer/CounterReducerPage";

import UserListPage from "./pages/user-list/user-list.page";
import PostListPage from "./pages/PostListPage";
import PostDetailPage from "./pages/PostDetailPage";
import GeolocationPage from "./pages/geolocation/geolocation.page";
import FormPage from "./pages/form/form.page";
import FetchPage from "./pages/fetch/FetchPage";
import YoutubePage from "./pages/youtube/YoutubePage";
import WikipediaPage from "./pages/wikipedia/wikipedia.page";
import SuperheroesPage from "./pages/superheroes/superheroes.page";
import DomainListPage from "./pages/DomainListPage";
import TestPage from "./pages/test/TestPage";
import NotFoundPage from "./pages/not-found/not-found.page";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <ChakraProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LayoutPage />}>
              <Route index element={<HomePage />} />
              <Route path="counter" element={<CounterPage />} />
              <Route path="counter-reducer" element={<CounterReducerPage />} />
              <Route path="user-list" element={<UserListPage />} />
              <Route path="posts" element={<PostListPage />} />
              <Route path="posts/:postId" element={<PostDetailPage />} />
              <Route path="geolocation" element={<GeolocationPage />} />
              <Route path="form" element={<FormPage />} />
              <Route path="fetch" element={<FetchPage />} />
              <Route path="youtube" element={<YoutubePage />} />
              <Route path="wikipedia" element={<WikipediaPage />} />
              <Route path="superheroes" element={<SuperheroesPage />} />
              <Route path="domains" element={<DomainListPage />} />
              <Route path="test" element={<TestPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    );
  }
}

export default App;
