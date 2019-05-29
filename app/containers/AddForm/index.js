/*
 * Add string form page
 *
 * This page allows user to add a string to the database
 * the result should be displayed at homepage
 *
 */

import React from 'react';
import { NavLink } from 'react-router-dom';

export default function AddForm() {
  return (
    <div className="AddForm">
      <h3>Add a new string</h3>
      <p id="backToStings">
        <NavLink exact to="/">
          String List
        </NavLink>
      </p>
      <label htmlFor="body">add a string: </label>
      <input name="body" id="body"/>
      <button className="addButton">
        add
      </button>
    </div>
  );
}
