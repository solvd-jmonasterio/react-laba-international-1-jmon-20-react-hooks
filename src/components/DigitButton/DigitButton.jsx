import React from 'react';
import {ACTIONS} from '../utils/constants';
import {DispatchContext} from '../Main/Main';

export default function DigitButton({digit, classes}) {
  const dispatch = React.useContext(DispatchContext);

  return (
    <button
      onClick={() => dispatch({type: ACTIONS.ADD_DIGIT, payload: {digit}})}
      className={classes}
    >
      {digit}
    </button>
  );
}
