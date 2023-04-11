import React from 'react';
import './Display.css';

export default function Display({previousOperand, currentOperand, operation}) {
  return (
    <div className="display-container">
      <div>
        {previousOperand} {operation}
      </div>
      <div className="input">{currentOperand}</div>
    </div>
  );
}
