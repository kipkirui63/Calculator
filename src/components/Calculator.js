// Calculator.js
import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        const result = eval(input).toString();
        setInput(`${input} =`);
        setOutput(result);
      } catch (error) {
        setInput('Error');
        setOutput('');
      }
    } else if (value === 'C') {
      setInput('');
      setOutput('');
    } else {
      setInput((prevInput) => prevInput + value);
      setOutput('');
    }
  };

  const buttons = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+', 'C'];

  return (
    <div className="calculator">
      <div className="display">
        <input type="text" value={input} readOnly />
        <div className="output">{output}</div>
      </div>
      <div className="buttons">
        {buttons.map((button) => (
          <button key={button} onClick={() => handleButtonClick(button)}>
            {button}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
