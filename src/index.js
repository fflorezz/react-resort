import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { RoomProvider } from "./context/room.context";
import { GlobalProvider } from "./context/global.context";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <GlobalProvider>
      <RoomProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </RoomProvider>
    </GlobalProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
