import React from 'react'
import signin from './signin.css'
import { NavLink } from 'react-router-dom';
import useform from './useform';

function Signin(props) {

  //Final submit function
  const formLogin = () => {

    console.log("Callback function when form is submitted!");
    console.log("Form Values ", values);
  }

  //Custom hook call
  const {handleChange, values,errors,handleSubmit} = useform(formLogin);
    return (
        <div className="instamaain">
            <div className="container ">
                <div className="row ">
                    <div className="left col-lg-6 col-md-12 col-sm-12"> 
                        <img className="mobile" width="108%" src="\images\pngtree-mobile-phone-mockup-png-image_2704120-removebg-preview.png" alt="" />
                        <img className="content" width="225px" src="https://www.instagram.com/static/images/homepage/screenshots/screenshot1-2x.png/cfd999368de3.png" alt="" />
                    </div>
                    <div className="leftt col-lg-6 col-md-12 col-sm-12"> 
                        <div className="sec1">
                            <img class="mb-4 logo" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png" alt="" />
                            <form onSubmit="/">
                                <div class="form-group">
                                    <input className="inputer form-control" type="email" name="email" placeholder="Phone number, username, or email"  onChange={handleChange}   />
                                    {
                                        errors.email && <h3>{errors.email}</h3>
                                    }
                                </div>
                                <div class="form-group">
                                    <input  className="inputer form-control" minLength='8' type="password" name="password" placeholder="Password"  onChange={handleChange}   />
                                    {
                                        errors.password && <h3>{errors.password}</h3>

                                    }
                                </div>
                                <NavLink to="/Home" className="inputer loginer btn btn-primary" type="submit">Log In</NavLink>
                            </form>
                        </div>
                        <div className="sec2">
                            <p className="newacc">
                                Don't have an account ? 
                                <NavLink to="/">Sign up</NavLink>
                            </p>
                        </div>
                        <p className="get">Get the App</p>
                        <img className="download" width="350px" src="\image\293493937 (1).jpg" alt="" />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <p>Meta</p>
                    <p>About</p>
                    <p>Blog</p>
                    <p>Jobs</p>
                    <p>Help</p>
                    <p>API</p>
                    <p>Terms</p>
                    <p>Top Accounts</p>
                    <p>Hashtags</p>
                    <p>Locations</p>
                    <p>Instagram Lite</p>
                    <p>Dance</p>
                    <p>Food & Drink</p>
                    <p>Home & Garden</p>
                    <p>Music</p>
                    <p>Visaul Arts</p>
                </div>
            </div>
            <p className="copyrights">© 2022 Instagram from Meta</p>
        </div>
    )
}

export default Signin