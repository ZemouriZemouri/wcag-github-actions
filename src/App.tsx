import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Image } from "./components/Image";

if (process.env.NODE_ENV !== "production") {
  const axe = require("@axe-core/react");
  axe(React, ReactDOM, 1000);
}

function App() {
  const [inputText, setInputText] = useState("");

  const handleInputChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setInputText(e.target.value);
  };

  const handleButtonClick = () => {
    alert(`Ingevoerde tekst: ${inputText}`);
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '1rem',
      padding: '20px'
    }}>
      <Image />
      <div className="input-container" style={{
        display: 'flex',
        gap: '10px',
        maxWidth: '400px',
        width: '100%'
      }}>
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Voer tekst in"
          aria-label="Invoerveld"
          style={{
            padding: '8px',
            flexGrow: 1,
            borderRadius: '4px',
            border: '1px solid #ccc'
          }}
        />
        <button 
          onClick={handleButtonClick} 
          aria-label="Toon tekst"
          style={{
            padding: '8px 16px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Toon tekst
        </button>
      </div>
    </div>
  );
}

export default App;