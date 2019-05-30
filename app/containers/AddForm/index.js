/*
 * Add string form page
 *
 * This page allows user to add a string to the database
 * the result should be displayed at homepage
 *
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectStrings,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import Form from './Form';
import Input from './Input';
import reducer from './reducer';
import saga from './saga';
import { addString } from './actions';

const key = 'form';

export function AddForm({ str, onSubmitForm }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    if (str.length > 0) onSubmitForm();
  }, []);

  return (
    <div className="AddForm">
      <h3>Add a new string</h3>
      <p id="backToStings">
        <NavLink exact to="/">
          String List
        </NavLink>
      </p>
      <Form onSubmit={onSubmitForm}>
        <label htmlFor="newString">
          <Input
            id="newString"
            type="text"
            placeholder="mxstbr"
            value={newString}
          />
        </label>
      </Form>
    </div>
  );
}

AddForm.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  strings: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
}

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(addString(newString));
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(AddForm);
