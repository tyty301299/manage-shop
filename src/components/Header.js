
import React , {useState, useRef} from "react";
import { Link, useLocation } from 'react-router-dom'
import './Header.css'
import { BsCart2,BsSearch,BsPerson } from "react-icons/bs";
import logo from '../image/logo.png'
const mainNav = [
    {
        display : "HÀNG MỚI",
        path : '/'
    },
    {
        display : "ÁO",
        path : '/shirt'
    },
    {
        display : "ĐẦM",
        path : '/dress'
    },
    {
        display : "VÁY",
        path : '/skirt'
    },
    {
        display : "QUẦN",
        path : '/trousers'
    },
]
function Header(){
    // const {pathname} = useLocation()
    // const acitveNav = mainNav.findIndex(e=> e.path === pathname)
    // const headerRef = useRef(null)
    // const menuToggle = () => men
    return(
       
       <div className="Menu">
           
           <div className="Menu_left">
            <img src={logo} className="logo"/>
           </div>
           <div className="Menu_between">
                    {
                        mainNav.map((item,index) => (
                                <div className="Menu_between_con">
                                <Link to={item.path} className="link">
                                    <span>
                                    {item.display}
                                    </span>
                                </Link>
                                </div>
                        ))
                    }      
            </div>
            <div className="Menu_right">
                <div className="Menu_right_con">
                    <Link className="link">
                    <BsSearch/>
                    </Link>
                    
                </div>
                <div className="Menu_right_con">
                    <Link to="/user" className="link"><BsPerson/></Link>
                    
                </div>
                <div className="Menu_right_con">
                    <Link to="/cart" className="link">
                    <BsCart2/>
                    </Link>
                   
                </div>
            </div>
       </div>
    );
}
export default Header