import React from 'react';
import {ACTIONS} from '../utils/constants';
import {DispatchContext} from '../Main/Main';

export default function OperationButton({operation, classes}) {
  const dispatch = React.useContext(DispatchContext);

  return (
    <button
      onClick={() =>
        dispatch({type: ACTIONS.CHOOSE_OPERATION, payload: {operation}})
      }
      className={classes}
    >
      {operation}
    </button>
  );
}
