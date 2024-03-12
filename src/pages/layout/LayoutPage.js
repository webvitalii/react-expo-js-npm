import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import { Outlet, Link } from "react-router-dom";
import "./LayoutPage.css";

export default class LayoutPage extends React.Component {
  render() {
    return (
      <section className="layout-page">
        <Flex as="nav">
          <Box mr={4}>
            <Link to="/">Home</Link>
          </Box>
          <Box mr={4}>
            <Link to="/counter">Counter</Link>
          </Box>
          <Box mr={4}>
            <Link to="/counter-reducer">Counter reducer</Link>
          </Box>
          <Box mr={4}>
            <Link to="/posts">Post list</Link>
          </Box>
          <Box mr={4}>
            <Link to="/user-list">User list</Link>
          </Box>
          <Box mr={4}>
            <Link to="/geolocation">Geolocation</Link>
          </Box>
          <Box mr={4}>
            <Link to="/form">Form</Link>
          </Box>
          <Box mr={4}>
            <Link to="/fetch">Fetch</Link>
          </Box>
          <Box mr={4}>
            <Link to="/youtube">Youtube</Link>
          </Box>
          <Box mr={4}>
            <Link to="/wikipedia">Wikipedia</Link>
          </Box>
          <Box mr={4}>
            <Link to="/superheroes">Superheroes</Link>
          </Box>
          <Box mr={4}>
            <Link to="/domains">Domains</Link>
          </Box>
          <Box mr={4}>
            <Link to="/test">Test</Link>
          </Box>
        </Flex>

        <Outlet />
      </section>
    );
  }
}
