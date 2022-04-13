
import React , {useState, useRef} from "react";
import { Link, useLocation } from 'react-router-dom'
import './Header.css'
import { BsCart2,BsSearch,BsPerson } from "react-icons/bs";
import logo from '../image/logo.png'
import { FiX } from "react-icons/fi";

function ItemSp(){
   
    return(
        <div className="item_cart">
        <div className="imageclass">
            <img src={logo}/>
        </div>
        <div className="item_sp">
            <p>name</p>
           
            <p>trang/xl</p>
           
            <p>sl:price</p>
        </div>
        <div className="item_cancle">
        <FiX/>
        </div>
    </div>
    );
}
export default ItemSp