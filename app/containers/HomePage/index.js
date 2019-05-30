/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectStrings,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import StringList from 'components/StringsList';
import { loadStrings } from '../App/actions';
import saga from './saga';

const key = 'home';

export function HomePage({ loading, error, strings }) {
  useInjectSaga({ key, saga });

  const stringsListProps = {
    loading,
    error,
    strings,
  };

  return (
    <div>
      <h2>Strings App</h2>
      <NavLink exact to="/add">
        Add String
      </NavLink>
      <div>
        <StringList {...stringsListProps} />
      </div>
    </div>
  );
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  strings: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};

const mapStateToProps = createStructuredSelector({
  strings: makeSelectStrings(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  console.log('did we get here')
  return dispatch(loadStrings());
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
