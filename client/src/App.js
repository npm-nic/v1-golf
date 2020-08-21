import React from "react";
import { ReactQueryDevtools } from "react-query-devtools";

import "./App.css";
// import EventBoard from "./components/EventBoard";
import Header from "./components/Header";
import EventsBoard from "./views/EventsBoard";

function App() {
  return (
    <>
      <div className='App'>
        {/* <h1>PGA Championship</h1>
        <EventBoard /> */}
        <Header />
        <EventsBoard />
      </div>
      <ReactQueryDevtools />
    </>
  );
}

export default App;
