import React from "react";
import { ReactQueryDevtools } from "react-query-devtools";

import "./App.css";
import useAllGolfers from "./queries/useAllGolfers";
import Golfers from "./components/Golfers";

function App() {
  const golfers = useAllGolfers();

  return (
    <>
      <div className='App'>
        <h1>PGA Championship {golfers.isFetching && "..."}</h1>
        <Golfers />
      </div>
      <ReactQueryDevtools />
    </>
  );
}

export default App;
