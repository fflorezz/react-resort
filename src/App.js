import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";
import Header from "./new-components/header/Header";
import HomePage from "./pages/home/HomePage";
import RoomsPage from "./pages/rooms/RoomsPage";
import SingleRoomPage from "./pages/single-room/SingleRoomPage";
import Reservas from "./pages/reservas/Reservas";
import ErrorPage from "./pages/error/ErrorPage";
// import Mask from "./new-components/mask/Mask";

import "./App.scss";

function App() {
  const location = useLocation();
  return (
    <>
      {/* <Mask /> */}
      <Header />
      <AnimatePresence>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/rooms" component={RoomsPage} />
          <Route exact path="/rooms/:slug" component={SingleRoomPage} />
          <Route exact path="/reservas" component={Reservas} />
          <Route component={ErrorPage} />
        </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;
