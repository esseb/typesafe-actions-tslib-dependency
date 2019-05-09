import { createReducer } from 'typesafe-actions';

// Example copied from https://github.com/piotrwitek/typesafe-actions#reducer-creators-api
const testReducer = createReducer(0, {
  ADD: (state, action) => state + action.payload
});

// This typeof check is only used to prevent Typescript from complaining
// that 'testReducer' is declared but its value is never read
if (typeof testReducer !== 'undefined') {
  console.log('PASS');
}
