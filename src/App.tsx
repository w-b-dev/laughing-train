import React, { useEffect, useState } from "react";
import EntryForm from "./EntryForm/";
import Results from "./Results/";
import "./App.css";
import { getImage } from "./API";
import { initialState } from "./mock";
import { API_RESPONSE, API_OPTIONS, AppState } from "./types";

function App() {
  const [state, setState] = useState<AppState>(initialState);

  const loadImages = (payload: API_OPTIONS) => {
    getImage(payload)
      .then((r: API_RESPONSE) => {
        setState((state) => ({ ...state, isLoading: false, data: r }));
      })
      .catch((e) => console.error(e));
  };

  useEffect(() => {
    setState((state) => ({ ...state, isLoading: true }));
    loadImages({});
  }, []);

  useEffect(() => {
    console.info("state changes", state);
  }, [state]);

  const handleUserInput = (input: API_OPTIONS) => {
    setState({ ...state, userInput: input });
    loadImages(input);
  };

  return (
    <div className="App">
      <EntryForm updateUserInput={handleUserInput} />
      <hr />
      <Results loading={state.isLoading} url={state.data.url} />
    </div>
  );
}

export default App;
