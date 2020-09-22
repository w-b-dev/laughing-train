import React, { useEffect, useState } from "react";
import EntryForm from "./EntryForm/";
import Results from "./Results/";
import "./App.css";
import { API_RESPONSE, getImage } from "./API";
import { initialState } from "./mock";
import { AppState } from "./types";

function App() {
  const [state, setState] = useState<AppState>(initialState);
  useEffect(() => {
    setState((state) => ({ ...state, isLoading: true }));
    getImage({})
      .then((r: API_RESPONSE) => {
        setState((state) => ({ ...state, isLoading: false, data: r }));
      })
      .catch((e) => console.error(e));
  }, []);
  return (
    <div className="App">
      <EntryForm />
      <hr />
      <Results loading={state.isLoading} url={state.data.url} />
    </div>
  );
}

export default App;
