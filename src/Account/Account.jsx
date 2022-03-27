import React from 'react'
import { NavLink } from 'react-router-dom';
import useform from './useform';
import account from './account.css';

function Account() {
      //Final submit function
  const formLogin = () => {

    console.log("Callback function when form is submitted!");
    console.log("Form Values ", values);
  }

  //Custom hook call
  const {handleChange, values,errors,handleSubmit} = useform(formLogin);
  return (
    <div className="acc">
        <div className=" col-lg-6 col-md-12 col-sm-12"> 
            <div className="sec1 formm">
                <img class=" mb-4 logo" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png" alt="" />
                <p className="watch">Sign up to see photos and videos from your friends.</p>
                <form onSubmit={handleSubmit}>
                    <input className="inputt inputer form-control" type="email" name="email" placeholder="Email"  onChange={handleChange}   />
                    {
                        errors.email && <h3>{errors.email}</h3>
                    }
                    <input className="inputt inputer form-control" type="text" minLength='5' required name="fullname" placeholder="Full Name"  onChange={handleChange}   />
                    {
                        errors.fullname && <h3>{errors.fullname}</h3>
                    }
                    <input className="inputt inputer form-control" type="text" minLength='5' required name="username" placeholder="username"  onChange={handleChange}   />
                    {
                        errors.username && <h3>{errors.username}</h3>
                    }
                    <input  className="inputt inputer form-control" minLength='8' type="password" name="password" placeholder="Password"  onChange={handleChange}   />
                    {
                        errors.password && <h3>{errors.password}</h3>
                    }
                    <NavLink to="/Home" className="inputer loginer btn btn-primary" type="submit">Log In</NavLink>
                </form>
            </div>
            <div className="sec2 sec22">
                <p className="newacc">
                    Have an account ? 
                    <NavLink to="/Signin">Log in</NavLink>
                </p>
            </div>
            <p className="get getit">Get the App</p>
            <img className="download downloadnow" width="350px" src="\image\293493937 (1).jpg" alt="" />
            <div className="footer">
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
        </div>
    </div>
  )
}

export default Account