import React from 'react';
import Display from '../Display/Display';
import Pad from '../Pad/Pad';
import {ACTIONS} from '../utils/constants';
import './Main.css';

export const DispatchContext = React.createContext();

const initialState = {
  overwrite: false,
  previousOperand: '',
  currentOperand: '0',
};

function reducer(state, {type, payload}) {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          overwrite: false,
          currentOperand: payload.digit,
        };
      }
      if (
        payload.digit === '0' &&
        state.currentOperand === initialState.currentOperand
      ) {
        return state;
      }
      if (payload.digit === '.' && state.currentOperand.includes('.')) {
        return state;
      }
      if (
        state.currentOperand === initialState.currentOperand &&
        payload.digit !== '.'
      ) {
        return {
          ...state,
          currentOperand: payload.digit,
        };
      }

      return {
        ...state,
        currentOperand: `${state.currentOperand || ''}${payload.digit}`,
      };

    case ACTIONS.CALCULATE_PERCENT:
      if (state.currentOperand === initialState.currentOperand) return state;
      return {
        ...state,
        overwrite: true,
        previousOperand: initialState.previousOperand,
        currentOperand: state.currentOperand / 100,
      };

    case ACTIONS.CHOOSE_OPERATION:
      if (
        state.currentOperand == initialState.currentOperand &&
        state.previousOperand == initialState.previousOperand
      ) {
        return state;
      }
      if (state.previousOperand == initialState.previousOperand) {
        return {
          ...state,
          operation: payload.operation,
          previousOperand: state.currentOperand,
          currentOperand: initialState.currentOperand,
        };
      }

      return {
        ...state,
        previousOperand: evaluate(state),
        operation: payload.operation,
        currentOperand: initialState.currentOperand,
      };

    case ACTIONS.CLEAR:
      return initialState;

    case ACTIONS.DELETE_DIGIT:
      if (state.overwrite) {
        return initialState;
      }
      if (!state.currentOperand) {
        return state;
      }
      if (state.currentOperand.length === 1) {
        return {
          ...state,
          currentOperand: initialState.currentOperand,
        };
      }

      return {
        ...state,
        currentOperand: state.currentOperand.slice(0, -1),
      };

    case ACTIONS.EVALUATE:
      if (
        state.operation === initialState.operation ||
        state.currentOperand === initialState.currentOperand ||
        state.previousOperand === initialState.previousOperand
      ) {
        return state;
      }

      return {
        ...state,
        overwrite: true,
        previousOperand: initialState.previousOperand,
        currentOperand: evaluate(state),
        operation: null,
      };
  }
}

function evaluate({currentOperand, previousOperand, operation}) {
  const previous = Number(previousOperand);
  const current = Number(currentOperand);

  let op = 0;

  switch (operation) {
    case '÷':
      op = previous / current;
      break;
    case '×':
      op = previous * current;
      break;
    case '-':
      op = previous - current;
      break;
    case '+':
      op = previous + current;
      break;
    default:
      break;
  }

  return String(op);
}

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
