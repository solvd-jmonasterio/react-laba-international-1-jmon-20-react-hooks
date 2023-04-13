import React from 'react';
import Display from '../Display/Display';
import Pad from '../Pad/Pad';
import reducer from '../utils/reducer';
import {initialState} from '../utils/reducer';
import './Main.css';

export const DispatchContext = React.createContext();

export default function Main() {
  const [{currentOperand, previousOperand, operation}, dispatch] =
    React.useReducer(reducer, initialState);

  return (
    <DispatchContext.Provider value={dispatch}>
      <div className="main-container">
        <Display
          previousOperand={previousOperand}
          currentOperand={currentOperand}
          operation={operation}
        />
        <Pad />
      </div>
    </DispatchContext.Provider>
  );
}
