
import './App.css'

import React, { useState } from 'react';

function App() {
  const [bgColor, setBgColor] = useState('#ffffff');
  const [textColor, setTextColor] = useState('#000000');
  const [fontSize, setFontSize] = useState(16);
  const [borderRadius, setBorderRadius] = useState(0);

  const handleBgColorChange = (event) => {
    setBgColor(event.target.value);
  };

  const handleTextColorChange = (event) => {
    setTextColor(event.target.value);
  };

  const handleFontSizeChange = (event) => {
    setFontSize(event.target.value);
  };

  const handleBorderRadiusChange = (event) => {
    setBorderRadius(event.target.value);
  };

  const cssCode = `
    background-color: ${bgColor};
    color: ${textColor};
    font-size: ${fontSize}px;
    border-radius: ${borderRadius}px;
  `;

  return (
    <div className="container">
      <h1>CSS Generator</h1>
      
      <div className="form">
        <label htmlFor="bg-color">Background Color:</label>
        <input type="color" id="bg-color" value={bgColor} onChange={handleBgColorChange} />
        
        <label htmlFor="text-color">Text Color:</label>
        <input type="color" id="text-color" value={textColor} onChange={handleTextColorChange} />
        
        <label htmlFor="font-size">Font Size:</label>
        <input type="range" id="font-size" min="10" max="50" value={fontSize} onChange={handleFontSizeChange} />
        
        <label htmlFor="border-radius">Border Radius:</label>
        <input type="range" id="border-radius" min="0" max="50" value={borderRadius} onChange={handleBorderRadiusChange} />
      </div>
      
      <div className="preview" style={{ backgroundColor: bgColor, color: textColor, fontSize: `${fontSize}px`, borderRadius: `${borderRadius}px` }}>
        <h2>Preview</h2>
        <p>This is a sample text.</p>
      </div>
      
      <div className="css-code">
        <h2>CSS Code</h2>
        <pre>{cssCode}</pre>
        <button onClick={() => navigator.clipboard.writeText(cssCode)}>Copy CSS</button>
      </div>
    </div>
  );
}

export default App;
