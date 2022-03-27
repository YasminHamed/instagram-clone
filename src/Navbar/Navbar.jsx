import React from 'react'
import navbar from './navbar.css'
import { NavLink } from 'react-router-dom';

function Navbar(props) {
  return (
    <div className="top">
        <nav class="container navbar navbar-expand-lg navbar-light bg-light shadow-sm">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <NavLink to="/Home" class="navbar-brand ml-4" ><img class="logo" src={props.logo} alt="" /></NavLink>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                <form class=" form-inline my-2 my-lg-0">
                    <img className="iconser" width="15px" alt="Search" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAADkklEQVRYhb2WQUgcZxTHf+8b17VZaaPY1lYhpAi9yFrwEptDCqU5GQ2EEXZ2VoS2FnovrfcmhfQQeuhFigcdWZvFthiIobUgNBRSClLWWBo8pIJNTIrSKpUdd+b14FpCcXbX6Pq/zHzDe+//m/m++d4nlJFt21YsFjtrjLmoqj1AO/ACsAE8AhZVdWZnZ2c2l8v9Va5WlCTqueu6tqpeBjqAu6o6B/wuImtAE9AKnAHOAT5wLR6PXx0bG9s8FEAqlWoxxlwvFZ6wLOvK+Pj4vagCQ0NDJ33ff0dERgA/DEM7m83efioA13VfVdWbgARBcGlqamqh2kKO4zSJyBdAr4i863ne+IEASm9+B3gUhuGFbDb7Z7XmT9ZLp9NXgA9EpNfzvFuVEsxeooh8CcghzAF0cnJyBPBUNZvJZE5XBeC6ri0ibwRBcOkQ5v9pfX39PeBBGIafVASwbdsqrfaJg8x5Oc3OzhZE5CNgwHGc7rIAsVjsLNAhIhVpDyLP82aAuyIyWBbAGHMRWPQ877ejBCjpK6Cf6P0Go6qvA3M1MEdE5oBT6XS6LRIAaFPVlVoAhGG4AqCqL0cCqOrzIvK4FgAbGxsPSwAvRgIYY/4Gnq0FQEtLy3MAIhLZqIyq/gG8VAuAYrHYClBXV/cwEgBYYrerHbksy+oBNre3t+9HAojIDeCc4zhNNWDoU9Vvc7mcHwlQKBRustvP3z5KZ9d1O1T1LWPMdLk4UzrJXBORkaP8Cqr6MXCvUChcLwtQun4K+KV+HrlrVSvXdVPAgIh8mMvlgnKxFkA+ny90dnbeEZHLyWTyRD6f//5pzVOpVI+ITIvIZ57nfV4p3tq7WVxcXOnq6loBriaTyVfa29tnl5eXy9L/X67rpkRkGvjR9/2hpaUlrZRjnhx4njcuIr1Af3Nz84Lrun1VGnek0+kpVZ0E1oDX4vF4ZzW5+853JpM5XTpMDLB79P7GGPNdsVi8HwTBWkNDw8lisdgqImdEpA84LyIrqvp+IpG4vbW1dUNEukTkTc/zfjkwwJ4cx+ku9fN+4NQ+IVvAD8CY7/tf7y244eHhE9VCVL3iBwcH21S1PQiCVsuyNsMwfLy6uvrr/Px8cb/4aiEO/cuVk23bz9TX188A3caY8xMTEz8fK0A1EDUHqARxLADlIEyFvCNTLpfbTiQS/aq6EIbhrVQqlTxWAIDR0dF/GhsbLwA/GWNsgH8B26+BVRIj19kAAAAASUVORK5CYII="/>
                    <input class="search form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                </form>
                <div className="icons">
                    <NavLink to="/Signin">
                        Log out
                    </NavLink>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar