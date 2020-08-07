import React from "react";
import { ReactQueryDevtools } from "react-query-devtools";

import "./App.css";
import EventBoard from "./components/EventBoard";

function App() {

  return (
    <>
      <div className='App'>
        <h1>PGA Championship</h1>
        <EventBoard />
      </div>
      <ReactQueryDevtools />
    </>
  );
}

export default App;
