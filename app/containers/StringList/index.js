/**
 *
 * StringList
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectStringList from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function StringList() {
  useInjectReducer({ key: 'stringList', reducer });
  useInjectSaga({ key: 'stringList', saga });

  return (
    <div>
      <Helmet>
        <title>StringList</title>
        <meta name="description" content="Description of StringList" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

StringList.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  stringList: makeSelectStringList(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(StringList);
