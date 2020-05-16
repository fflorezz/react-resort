import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./new-components/header/Header";
import HomePage from "./pages/home-page/HomePage";
import RoomsPage from "./pages/RoomsPage";
import SingleRoomPage from "./pages/SingleRoomPage";
import ErrorPage from "./pages/ErrorPage";

import "./App.scss";

function App() {
  return (
    <>
      <Header />
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
