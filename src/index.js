import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { RoomProvider } from "./context/room.context";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <RoomProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RoomProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
