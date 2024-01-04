import React from "react";
import useStorage from "./components/Storage";
import "./App.css";

const App = () => {
  const [inputValue, setInputValue] = useStorage("content", "");
  return (
    <>
      <div className="input">
        <label>
          Type something:
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </label>
        <p>You typed: {inputValue}</p>
      </div>
    </>
  );
};

export default App;
