import React, { SyntheticEvent } from "react";

export const EntryForm = () => {
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="a">
        <span>A:</span>
        <input type="text" id="a" />
        <button>Send</button>
      </label>
    </form>
  );
};
export default EntryForm;
