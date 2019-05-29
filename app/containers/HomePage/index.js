/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { NavLink } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import StringList from 'containers/StringList/Loadable';
import messages from './messages';


export default function HomePage() {
  return (
    <h1>
      <FormattedMessage {...messages.header} />
      <nav>
        <div className="navBar">
          <h1 id="strings">Strings App</h1><br/>
          <p id="addString">
            <NavLink exact to="/add">
              Add String
            </NavLink>
          </p>
        </div>
      </nav>
      <StringList />
    </h1>
  );
}
