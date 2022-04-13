
import React , {useState, useRef} from "react";
import { Link, useLocation } from 'react-router-dom'
import './Header.css'
import { BsCart2,BsSearch,BsPerson,BsFillBarChartLineFill,BsList,BsFillArrowRightSquareFill,BsFillPencilFill} from "react-icons/bs";
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

    const logout = () => {
        if(localStorage.getItem('user')!=null){
            localStorage.clear()
            alert("dang xuat thanh cong")
            window.location = "http://localhost:3000/user"
        }
    }
    const obj=JSON.parse(localStorage.getItem('user'));
    console.log(obj)
    if(localStorage.getItem('user') == null){
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
                         <Link to="/user" className="link">
                         <BsPerson/>
                         </Link>
                        
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
    if(obj['role'] === 1 && obj != null){
        return(
            <div className="Menu">
                
                <div className="Menu_left">
                 <img src={logo} className="logo"/>
                </div>
                <div className="Menu_between">
                         {
                             mainNav.map((item,index) => (
                                     <div className="Menu_between_con" key={index}>
                                     <Link to={item.path} className="link" >
                                         <span >
                                         {item.display}
                                         </span>
                                     </Link>
                                     </div>
                             ))
                         }      
                 </div>
                 <div className="Menu_right">
                     <div className="Menu_right_con">
                         <Link className="link" >
                         <BsFillArrowRightSquareFill onClick={logout}/>
                         </Link>
                         
                     </div>
                     <div className="Menu_right_con">
                         <Link to="/instertdata" className="link" >
                         <BsFillPencilFill/>
                         </Link>
                         
                     </div>
                    
                     <div className="Menu_right_con">
                         <Link to="/cart" className="link">
                         <BsCart2/>
                         </Link>
                        
                     </div>
                     <div className="Menu_right_con">
                         <Link to="/browselist" className="link">
                         <BsList/>
                         </Link>
                        
                     </div>
                     <div className="Menu_right_con">
                         <Link to="/revenue" className="link">
                         <BsFillBarChartLineFill/>
                         </Link>
                        
                     </div>
                 </div>
            </div>
         );
    }
    else {
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
                         <Link className="link" >
                         <BsFillArrowRightSquareFill onClick={logout}/>
                         </Link>
                         
                     </div>
                 <div className="Menu_right_con">
                         <Link to="/user" className="link">
                         <BsPerson/>
                         </Link>
                        
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
  
       
   
}
export default Header