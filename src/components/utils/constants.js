export const ACTIONS = {
  ADD_DIGIT: 'add-digit',
  CALCULATE_PERCENT: 'calculate-percent',
  CHOOSE_OPERATION: 'choose-operation',
  CLEAR: 'clear',
  DELETE_DIGIT: 'delete-digit',
  EVALUATE: 'evaluate',
};

export const buttons = [
  {
    class: 'btn btn--light btn-clear',
    inner: 'C',
    type: 'clear',
  },
  {
    class: 'btn btn--light',
    inner: '÷',
    type: 'op',
  },
  {
    class: 'btn btn--light',
    inner: '×',
    type: 'op',
  },
  {
    class: 'btn btn--light btn-delete',
    inner: '⌫',
    type: 'del',
  },
  {
    class: 'btn',
    inner: '7',
    type: 'digit',
  },
  {
    class: 'btn',
    inner: '8',
    type: 'digit',
  },
  {
    class: 'btn',
    inner: '9',
    type: 'digit',
  },
  {
    class: 'btn btn--light',
    inner: '-',
    type: 'op',
  },
  {
    class: 'btn',
    inner: '4',
    type: 'digit',
  },
  {
    class: 'btn',
    inner: '5',
    type: 'digit',
  },
  {
    class: 'btn',
    inner: '6',
    type: 'digit',
  },
  {
    class: 'btn btn--light',
    inner: '+',
    type: 'op',
  },
  {
    class: 'btn',
    inner: '1',
    type: 'digit',
  },
  {
    class: 'btn',
    inner: '2',
    type: 'digit',
  },
  {
    class: 'btn',
    inner: '3',
    type: 'digit',
  },
  {
    class: 'btn',
    inner: '%',
    type: 'percent',
  },
  {
    class: 'btn',
    inner: '0',
    type: 'digit',
  },
  {
    class: 'btn',
    inner: '.',
    type: 'digit',
  },
  {
    class: 'btn btn-equal',
    inner: '=',
    type: 'equal',
  },
];
