import React,{useEffect} from 'react'
import {
    Link
  } from "react-router-dom";
  import {fetchImage,changeSwitch} from '../redux/actions'
  import { useDispatch, useSelector} from 'react-redux'
export default function Header() {
    const dispatch = useDispatch()
    const switchToggle=()=>{
     document.body.classList.toggle("dark")
      dispatch(changeSwitch())
    }
    const toggle = useSelector(state => state.galleryaArrays.toggle)
    
    return (
        <header>
            <div className="wrapper">
            <ul className="nav">
            <li className="nav__link" ><Link  to="/">Home</Link></li>
            <li className="nav__link" ><Link to="/about">About</Link></li>
            <li className="nav__link" ><Link to="contact">Contact</Link></li>
            <li className="nav__link" > <div className={toggle?"switch-btn":"switch-btn switch-on"} onClick={()=>switchToggle()} ></div></li>
            
        </ul>
    </div>
        <div className="bg-white">
            <div className="wrapper">
                <div className="header">
                    <div className="logo">React Gallery</div>
                </div>
            </div>
        </div>
        </header>
    )
}
