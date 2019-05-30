/**
 * AddForm selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectForm = state => state.form || initialState;

const makeSelectAddString = () =>
  createSelector(
    selectForm,
    homeState => homeState.str,
  );

export { selectForm, makeSelectAddString };
