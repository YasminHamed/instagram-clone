import React from 'react'
import { BrowserRouter , Routes, Route} from 'react-router-dom';
// component
import Navbar from './Navbar/Navbar.jsx'
import Home from './Home/Home.jsx';
import Posts from './posts/Posts.jsx';
import Error from './Error/Error.jsx';
import Signin from './Signin/Signin.jsx';
import Account from './Account/Account.jsx';

function App() {
  return (
    <BrowserRouter>
      <Navbar logo="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"/>
      <Routes>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Posts" element={<Posts/>} />
        <Route path="/Signin" element={<Signin/>} />
        <Route path="/" element={<Account/>} />
        <Route path="*" element={<Error/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App