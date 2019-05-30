import { ADD_STRING } from './constants';

export function addString(string) {
  return {
    type: ADD_STRING,
    string,
  };
}
