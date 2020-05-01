import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage";
import RoomsPage from "./pages/RoomsPage";
import SingleRoomPage from "./pages/SingleRoomPage";
import ErrorPage from "./pages/ErrorPage";
import NavBar from "./components/NavBar";

import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/rooms" component={RoomsPage} />
        <Route exact path="/rooms/:slug" component={SingleRoomPage} />
        <Route component={ErrorPage} />
      </Switch>
    </>
  );
}

export default App;
