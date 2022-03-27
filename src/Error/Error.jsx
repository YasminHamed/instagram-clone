import React from 'react'
import error from './error.css'
import { NavLink } from 'react-router-dom';

function Error() {
  return (
    <div className="error">
        <h1>Sorry, this page isn't available.</h1>
        <p>
            The link you followed may be broken, or the page may have been removed.
            <NavLink to="/Home">
                Go back to Instagram.
            </NavLink>
        </p>
    </div>
  )
}

export default Error