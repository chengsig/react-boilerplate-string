import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the stringList state domain
 */

const selectStringListDomain = state => state.stringList || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by StringList
 */

const makeSelectStringList = () =>
  createSelector(
    selectStringListDomain,
    substate => substate,
  );

export default makeSelectStringList;
export { selectStringListDomain };
