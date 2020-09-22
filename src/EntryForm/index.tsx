import React, { SyntheticEvent, useState } from "react";
import { API_OPTIONS } from "../types";

export const EntryForm = ({
  updateUserInput,
}: {
  updateUserInput: (data: API_OPTIONS) => void;
}) => {
  const [date, setDate] = useState("2020-06-28");
  const [lat, setLat] = useState("44.64");
  const [lon, setLon] = useState("-78.38");
  const [dim, setDim] = useState(6);
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    updateUserInput({ date, lat, lon, dim: Math.trunc(dim) / 10 });
  };
  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      style={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "50vw",
        margin: "auto",
      }}
    >
      <label htmlFor="Date">
        <span>Date:</span>
        <input
          type="text"
          id="Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </label>
      <label htmlFor="Latitude">
        <span>Latitude:</span>
        <input
          type="string"
          id="Latitude"
          value={lat}
          onChange={(e) => setLat(e.target.value)}
        />
      </label>
      <label htmlFor="Longitude">
        <span>Longitude:</span>
        <input
          type="string"
          id="Longitude"
          value={lon}
          onChange={(e) => setLon(e.target.value)}
        />
      </label>
      <label htmlFor="Dim">
        <span>Dim:</span>
        <input
          type="range"
          id="Dim"
          value={dim}
          max="10"
          onChange={(e) => setDim(Number.parseInt(e.target.value))}
        />
      </label>
      <button>Send</button>
    </form>
  );
};
export default EntryForm;
