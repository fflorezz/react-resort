import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { GlobaContextProvider } from "./context/global-context/GlobaContext";
import { RoomProvider } from "./context/room.context";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <GlobaContextProvider>
      <RoomProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </RoomProvider>
    </GlobaContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
