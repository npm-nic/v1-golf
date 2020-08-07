import React from "react";
import { ReactQueryDevtools } from "react-query-devtools";

import "./App.css";
import useAllGolfers from "./queries/useAllGolfers";

function App() {
  const golfers = useAllGolfers();
  return (
    <>
      <div className='App'>
        <h1>PGA Championship {golfers.isFetching && '...'}</h1>
      </div>
      <ReactQueryDevtools />
    </>
  );
}

export default App;
