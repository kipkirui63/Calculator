// Calculator.js
import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setInput(eval(input).toString());
      } catch (error) {
        setInput('Error');
      }
    } else if (value === 'C') {
      setInput('');
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  const buttons = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+', 'C'];

  return (
    <div className="calculator">
      <input type="text" value={input} readOnly />
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
