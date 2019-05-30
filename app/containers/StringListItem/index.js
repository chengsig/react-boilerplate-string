/**
 * StringListItem
 *
 * Lists the content of strings
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectStrings } from 'containers/App/selectors';
import ListItem from 'components/ListItem';

export function StringListItem(props) {
  const { string } = props;
  console.log('in Stringlist index', props)
  const content = <p>{string.body}</p>;

  // Render the content into a list item
  return <ListItem key={`repo-list-item-${string.id}`} item={content} />;
}

StringListItem.propTypes = {
  string: PropTypes.object,
};

export default connect(
  createStructuredSelector({
    currentStrings: makeSelectStrings(),
  }),
)(StringListItem);
