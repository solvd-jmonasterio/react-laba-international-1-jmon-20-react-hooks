import React from 'react';
import DigitButton from '../DigitButton/DigitButton';
import OperationButton from '../OperationButton/OperationButton';
import {DispatchContext} from '../Main/Main';
import {ACTIONS, buttons} from '../utils/constants';
import './Pad.css';

export default function Pad() {
  const dispatch = React.useContext(DispatchContext);

  return (
    <div className="pad-container">
      {buttons.map(button => {
        switch (button.type) {
          case 'clear':
            return (
              <button
                key={button.inner}
                onClick={() => dispatch({type: ACTIONS.CLEAR})}
                className={button.class}
              >
                {button.inner}
              </button>
            );
          case 'op':
            return (
              <OperationButton
                key={button.inner}
                operation={button.inner}
                classes={button.class}
              />
            );
          case 'del':
            return (
              <button
                key={button.inner}
                onClick={() => dispatch({type: ACTIONS.DELETE_DIGIT})}
                className={button.class}
              >
                {button.inner}
              </button>
            );
          case 'digit':
            return (
              <DigitButton
                key={button.inner}
                digit={button.inner}
                classes={button.class}
              />
            );
          case 'percent':
            return (
              <button
                key={button.inner}
                onClick={() => dispatch({type: ACTIONS.CALCULATE_PERCENT})}
                className={button.class}
              >
                {button.inner}
              </button>
            );
          case 'equal':
            return (
              <button
                key={button.inner}
                onClick={() => dispatch({type: ACTIONS.EVALUATE})}
                className={button.class}
              >
                {button.inner}
              </button>
            );
        }
      })}
    </div>
  );
}
