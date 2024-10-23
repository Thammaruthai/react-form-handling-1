import "./App.css";
import { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [text, setText] = useState("Greeting Message asd");

  return (
    <div className="App">
      <div className="greeting-container">
        {text}
      </div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input
          id="greeting-message"
          type="text"
          value={inputText}
          onChange={(event) => setInputText(event.target.value)}
        />
      </div>

      <div className="buttons">
        <button onClick={() => setText(inputText)}>Update text</button>
      </div>
    </div>
  );
}

export default App;
