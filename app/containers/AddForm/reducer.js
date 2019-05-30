import produce from 'immer';
import { ADD_STRING } from './constants';

// The initial state of the App
export const initialState = {
  str: '',
};

/* eslint-disable default-case, no-param-reassign */
const formReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ADD_STRING:
        draft.str = action.str;
        break;
    }
  });

export default formReducer;
