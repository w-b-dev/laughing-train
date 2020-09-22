import React, { useState } from "react";
import Loader from "../Loader";

export const Results = ({
  url,
  loading,
}: {
  url: string;
  loading: boolean;
}) => {
  const [visible, setVisible] = useState(false);

  return (
    <section className="Results">
      {loading ? (
        <div>
          <Loader />
          <h2 style={{ color: "goldenrod" }}>API call...</h2>
        </div>
      ) : !visible ? (
        <div>
          <Loader />
          <h2 style={{ color: "crimson" }}>Rendering...</h2>
        </div>
      ) : null}
      <img
        onLoad={() => setVisible(true)}
        style={{ display: visible ? "block" : "none" }}
        alt="Nasa space shot"
        src={url}
      />
    </section>
  );
};
export default Results;
