import React from 'react'
import home from './home.css'
import { NavLink } from 'react-router-dom';
import Posts from '../posts/Posts';

function Home() {
  return (
    <div >
      <div class="sidebar">
        <div className="row">
          <img className="imgg1" src="\images\download.jpeg" alt="" />
          <div className="name1">
            <h5 className="h5">Yasmin_Hamed</h5>
            <h6 className="h6">Yasmin 7</h6>
          </div>
        </div>
        <hr />
        <h1>Suggestions For You</h1>
        <div className="row">
          <img className="imgg" src="\images\download (1).jpeg" alt="" />
          <div className="name">
            <h5>Joseph_Gaming</h5>
            <h6>New to Instagram</h6>
          </div>
        </div>
        <div className="row">
          <img className="imgg"src="\images\download (2).jpeg" alt="" />
          <div className="name">
            <h5>Tota</h5>
            <h6>Followed by sad..+ 2 More</h6>
          </div>
        </div>        
        <div className="row">
          <img className="imgg"src="\images\download (3).jpeg" alt="" />
          <div className="name">
            <h5>Sofai_pro</h5>
            <h6>Followed by farah..+ 16 More</h6>
          </div>
        </div>        
        <div className="row">
          <img className="imgg"src="\images\download (4).jpeg" alt="" />
          <div className="name">
            <h5>Magical_official</h5>
            <h6>Followed by youssf..+ 48 More</h6>
          </div>
        </div>        
        <div className="row">
          <img className="imgg"src="\images\images.jpeg" alt="" />
          <div className="name">
            <h5>Bigger_accounts</h5>
            <h6>New to Insgram</h6>
          </div>
        </div>
        <div className="row">
          <img className="imgg" src="\images\download (1).jpeg" alt="" />
          <div className="name">
            <h5>Joseph_Gaming</h5>
            <h6>New to Instagram</h6>
          </div>
        </div>
        <div className="row">
          <img className="imgg"src="\images\download (2).jpeg" alt="" />
          <div className="name">
            <h5>Tota</h5>
            <h6>Followed by sad..+ 2 More</h6>
          </div>
        </div>        
        <div className="row">
          <img className="imgg"src="\images\download (3).jpeg" alt="" />
          <div className="name">
            <h5>Sofai_pro</h5>
            <h6>Followed by farah..+ 16 More</h6>
          </div>
        </div>        
        <div className="row">
          <img className="imgg"src="\images\download (4).jpeg" alt="" />
          <div className="name">
            <h5>Magical_official</h5>
            <h6>Followed by youssf..+ 48 More</h6>
          </div>
        </div>        
      </div>
      <div class="content">
        <Posts/>
      </div>
    </div>
  )
}

export default Home