import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./index.css";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div>{count}</div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Add
      </button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
